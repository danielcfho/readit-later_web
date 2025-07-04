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
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-6 mb-8 sticky top-6 z-10">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            />
          </div>
        </form>

        {/* Category Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start border-gray-200 hover:border-blue-400">
              <Filter className="h-4 w-4 mr-2" />
              {selectedCategory || "Select Category"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="space-y-2">
              <h4 className="font-medium">Categories</h4>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
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
            <Button variant="outline" className="justify-start border-gray-200 hover:border-blue-400">
              <Filter className="h-4 w-4 mr-2" />
              {selectedTag || "Select Tag"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="space-y-2">
              <h4 className="font-medium">Tags</h4>
              <div className="space-y-1 max-h-64 overflow-y-auto">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
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
            <SelectTrigger className="w-48 border-gray-200 hover:border-blue-400">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Select Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button variant="outline" onClick={clearFilters} className="border-gray-200 hover:border-red-400 hover:text-red-600">
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              Search: {searchQuery}
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              Category: {selectedCategory}
            </Badge>
          )}
          {selectedTag && (
            <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
              Tag: #{selectedTag}
            </Badge>
          )}
          {selectedDateRange && selectedDateRange !== 'all' && (
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
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
