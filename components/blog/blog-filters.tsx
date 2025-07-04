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
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* 搜尋 */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="搜尋文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </form>

        {/* 分類篩選 */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Filter className="h-4 w-4 mr-2" />
              {selectedCategory || "選擇分類"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="space-y-2">
              <h4 className="font-medium">分類</h4>
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

        {/* 標籤篩選 */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Filter className="h-4 w-4 mr-2" />
              {selectedTag || "選擇標籤"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="space-y-2">
              <h4 className="font-medium">標籤</h4>
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

        {/* 日期篩選 */}
        {onDateFilter && (
          <Select 
            value={selectedDateRange || undefined} 
            onValueChange={(value) => onDateFilter(value || null)}
          >
            <SelectTrigger className="w-48">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="選擇時間範圍" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部時間</SelectItem>
              <SelectItem value="last-week">最近一週</SelectItem>
              <SelectItem value="last-month">最近一個月</SelectItem>
              <SelectItem value="last-3-months">最近三個月</SelectItem>
              <SelectItem value="last-year">最近一年</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* 清除篩選 */}
        {hasActiveFilters && (
          <Button variant="outline" onClick={clearFilters}>
            <X className="h-4 w-4 mr-2" />
            清除
          </Button>
        )}
      </div>

      {/* 顯示當前篩選 */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary">
              搜尋: {searchQuery}
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary">
              分類: {selectedCategory}
            </Badge>
          )}
          {selectedTag && (
            <Badge variant="secondary">
              標籤: #{selectedTag}
            </Badge>
          )}
          {selectedDateRange && selectedDateRange !== 'all' && (
            <Badge variant="secondary">
              時間: {
                selectedDateRange === 'last-week' ? '最近一週' :
                selectedDateRange === 'last-month' ? '最近一個月' :
                selectedDateRange === 'last-3-months' ? '最近三個月' :
                selectedDateRange === 'last-year' ? '最近一年' : selectedDateRange
              }
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
