"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTOCProps {
  content: string;
}

export function BlogTOC({ content }: BlogTOCProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 解析標題生成目錄
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const tocItems: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fff\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      
      tocItems.push({ id, text, level });
    }

    setToc(tocItems);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    // 觀察所有標題元素
    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (toc.length === 0) return null;

  return (
    <div className="sticky top-24 space-y-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">≡</span>
          </div>
          <h3 className="font-bold text-gray-900">Table of Contents</h3>
        </div>
        <nav className="space-y-2">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left text-sm hover:text-blue-600 transition-colors rounded-md px-2 py-1 ${
                activeId === item.id 
                  ? 'text-blue-600 font-medium bg-blue-50 border-l-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={scrollToTop}
        className="w-full bg-white/80 backdrop-blur-sm border-gray-100 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
      >
        <ChevronUp className="h-4 w-4 mr-2" />
        Back to Top
      </Button>
    </div>
  );
}
