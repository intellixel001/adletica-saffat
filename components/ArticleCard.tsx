'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  imageSrc: string;
  tags: string[];
}

export default function BasicCarousel({ articles }: { articles: Article[] }) {
  const [current, setCurrent] = useState(0);
  const total = articles.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}>
        {articles.map((article, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2">
            <div className="group bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image src={article.imageSrc} alt={article.title} fill className="object-cover" />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </button>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <div className="text-xs text-gray-500">{article.tags.join(', ')}</div>
                <div className="flex justify-between text-xs mt-2">
                  <span>{article.author}</span>
                  <span>{article.date} • {article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Controls */}
      <div className="flex justify-center gap-2 mt-4">
        {articles.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}