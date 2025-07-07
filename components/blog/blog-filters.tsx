"use client";

import { useState } from "react";
import { Search, Filter, X, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogFiltersProps {
  categories: string[];
  tags: string[];
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string | null) => void;
  onTagFilter: (tag: string | null) => void;
  onDateFilter?: (dateRange: string | null) => void;
  selectedCategory: string | null;
  selectedTag: string | null;
  selectedDateRange?: string | null;
}

export function BlogFilters({
  categories,
  tags,
  onSearch,
  onCategoryFilter,
  onTagFilter,
  onDateFilter,
  selectedCategory,
  selectedTag,
  selectedDateRange,
}: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const clearFilters = () => {
    setSearchQuery("");
    onSearch("");
    onCategoryFilter(null);
    onTagFilter(null);
    onDateFilter?.(null);
  };

  const hasActiveFilters = selectedCategory || selectedTag || searchQuery || (selectedDateRange && selectedDateRange !== 'all');

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 mb-8 sticky top-6 z-10">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>
        </form>

        {/* Category Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <Filter className="h-4 w-4 mr-2" />
              {selectedCategory || "Select Category"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Categories</h4>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                    onClick={() => onCategoryFilter(
                      selectedCategory === category ? null : category
                    )}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Tag Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <Filter className="h-4 w-4 mr-2" />
              {selectedTag || "Select Tag"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Tags</h4>
              <div className="space-y-1 max-h-64 overflow-y-auto">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                    onClick={() => onTagFilter(
                      selectedTag === tag ? null : tag
                    )}
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Date Filter */}
        {onDateFilter && (
          <Select 
            value={selectedDateRange || undefined} 
            onValueChange={(value) => onDateFilter(value || null)}
          >
            <SelectTrigger className="w-48 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Select Date Range" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectItem value="all" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">All Time</SelectItem>
              <SelectItem value="last-week" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Last Week</SelectItem>
              <SelectItem value="last-month" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Last Month</SelectItem>
              <SelectItem value="last-3-months" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Last 3 Months</SelectItem>
              <SelectItem value="last-year" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Last Year</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button variant="outline" onClick={clearFilters} className="border-gray-200 dark:border-gray-600 hover:border-red-400 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
              Search: {searchQuery}
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
              Category: {selectedCategory}
            </Badge>
          )}
          {selectedTag && (
            <Badge variant="secondary" className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700">
              Tag: #{selectedTag}
            </Badge>
          )}
          {selectedDateRange && selectedDateRange !== 'all' && (
            <Badge variant="secondary" className="bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700">
              Time: {
                selectedDateRange === 'last-week' ? 'Last Week' :
                selectedDateRange === 'last-month' ? 'Last Month' :
                selectedDateRange === 'last-3-months' ? 'Last 3 Months' :
                selectedDateRange === 'last-year' ? 'Last Year' : selectedDateRange
              }
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
