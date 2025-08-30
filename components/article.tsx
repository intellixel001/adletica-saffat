'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// Define a type for the Article object
interface Article {
  title: string;
  description: string;
  author: string;
  coAuthor?: string; // coAuthor is optional
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  authorImage: string;
  coAuthorImage?: string; // coAuthorImage is optional
}

// Placeholder images - In a real app, you'd use actual image paths
const articleImages: { [key: string]: string } = {
  'Pay for Intent': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  'How a AppLovin Hijacked': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  'What Attio Teaches Us': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  'The Playbook that Fueled': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  'Data-Driven Decisions': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  'The Future of AI': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  'Mastering React Hooks': 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
};

const articles: Article[] = [
  {
    title: 'Pay for Intent, Not Clicks: How to Build Ads That Convert',
    description: 'Navigating the world of digital marketing today can feel like steering through a vast and unpredictable river. With so many ...',
    author: 'George H',
    date: 'Jul 02, 2025',
    readTime: '1 min read',
    tags: ['Intent-based Marketing', 'Pay Per Click'],
    image: articleImages['Pay for Intent'],
    authorImage: 'https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp',
  },
  {
    title: 'How a AppLovin Hijacked Billions in App-Install Spend from Google',
    description: 'I remember exactly when AppLovin first spiled onto my radar. Google’s own performance-marketing teams, usually unflappable,..',
    author: 'Mulenga Agley',
    coAuthor: 'Ambre',
    date: 'Jun 03, 2025',
    readTime: '5 min read',
    tags: ['Performance Marketing', 'Tips'],
    image: articleImages['How a AppLovin Hijacked'],
    authorImage: 'https://via.placeholder.com/36x36/dda0dd/333333?text=MA',
    coAuthorImage: 'https://via.placeholder.com/36x36/dda0dd/333333?text=A',
  },
  {
    title: 'What Attio Teaches Us About Building Irresistible Products',
    description: 'I\'ve been obsessing over Attio lately, and for good reason: it compresses everything I love about product-led growth into a...',
    author: 'Mulenga Agley',
    coAuthor: 'Maks',
    date: 'Jun 02, 2025',
    readTime: '10 min read',
    tags: ['Growth', 'Growthcourse'],
    image: articleImages['What Attio Teaches Us'],
    authorImage: 'https://via.placeholder.com/36x36/add8e6/333333?text=MA',
    coAuthorImage: 'https://via.placeholder.com/36x36/add8e6/333333?text=M',
  },
  {
    title: 'The Playbook that Fueled 12+ Million Users For Chime',
    description: 'I\'ve spent my career in fintech growth marketing, and few stories are as instructive as Chime’s meteoric rise. Chime is ofte...',
    author: 'Mulenga Agley',
    coAuthor: 'Jey Mokashi',
    date: 'May 28, 2025',
    readTime: '1 min read',
    tags: ['Fintech', 'Growth'],
    image: articleImages['The Playbook that Fueled'],
    authorImage: 'https://via.placeholder.com/36x36/e0ffff/333333?text=MA',
    coAuthorImage: 'https://via.placeholder.com/36x36/e0ffff/333333?text=JM',
  },
  {
    title: 'Data-Driven Decisions: The Key to Modern Business Success',
    description: 'Leverage analytics and insights to make informed strategic decisions that drive growth and efficiency...',
    author: 'Emily Chen',
    date: 'May 20, 2025',
    readTime: '7 min read',
    tags: ['Data Science', 'Business Strategy'],
    image: articleImages['Data-Driven Decisions'],
    authorImage: 'https://via.placeholder.com/36x36/d8bfd8/333333?text=EC',
  },
  {
    title: 'The Future of AI in Web Development: Trends and Tools',
    description: 'Explore how artificial intelligence is shaping the landscape of web development, from automated coding to intelligent interfaces...',
    author: 'Alex Rivera',
    date: 'May 15, 2025',
    readTime: '8 min read',
    tags: ['AI', 'Web Development'],
    image: articleImages['The Future of AI'],
    authorImage: 'https://via.placeholder.com/36x36/90ee90/333333?text=AR',
  },
  {
    title: 'Mastering React Hooks: Advanced Patterns for Better State Management',
    description: 'Dive deep into advanced React Hooks patterns like custom hooks, useContext, and useReducer for cleaner, more maintainable code...',
    author: 'Sarah Lee',
    date: 'May 10, 2025',
    readTime: '6 min read',
    tags: ['React', 'Frontend Development'],
    image: articleImages['Mastering React Hooks'],
    authorImage: 'https://via.placeholder.com/36x36/ffdead/333333?text=SL',
  },
];

// Define props for ArticleCard
interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group relative m-3 overflow-hidden h-full rounded-2xl">
      <div className="relative">
        <img src={article.image} alt={article.title} className="w-full h-100 object-cover rounded-2xl" />
        <div className="absolute inset-0 bg-transparent rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/details" className="bg-[#0dcaf0] w-24 h-24 rounded-full cursor-pointer text-black flex items-center justify-center font-bold text-lg  transition-colors duration-300">
            View
          </Link>
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col justify-between flex-grow rounded-b-2xl">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">{tag}</span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 leading-tight">{article.title}</h3>
          <p className="text-xl text-gray-600 mt-2 line-clamp-3">{article.description}</p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            <img src={article.authorImage} alt={article.author} className="w-9 h-9 rounded-full border-2 border-white" />
            {article.coAuthorImage && (
              <img src={article.coAuthorImage} alt={article.coAuthor} className="w-9 h-9 rounded-full border-2 border-white" />
            )}
          </div>
          <div className="text-sm text-gray-800">
            <p className="font-medium text-gray-900">
              {article.author}
              {article.coAuthor && <span className="text-gray-500"> • {article.coAuthor}</span>}
            </p>
            <p className="text-gray-500 text-xs">{article.date} • {article.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticlesSection: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(4); // Default for desktop
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerCarouselRef = useRef<HTMLDivElement>(null);
  const GAP = 24; // Tailwind's space-x-6 is 24px, keeping it consistent

  // State for dragging
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftInitial, setScrollLeftInitial] = useState<number>(0);

  // Calculate slides to show based on window width
  const calculateSlidesToShow = useCallback((): number => {
    const width = window.innerWidth;
    if (width >= 1280) return 4; // xl screens
    if (width >= 768) return 3; // md and lg screens (lg is 1024px, so this covers both)
    return 1; // sm screens and below
  }, []);

  // Calculate slide width based on container and slidesToShow
  const calculateSlideWidth = useCallback((): number => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      return (containerWidth - (slidesToShow - 1) * GAP) / slidesToShow;
    }
    return 0;
  }, [slidesToShow]);

  // Effect to set initial slidesToShow and slideWidth, and handle resize
  useEffect(() => {
    const updateDimensions = () => {
      const newSlidesToShow = calculateSlidesToShow();
      setSlidesToShow(newSlidesToShow);
    };

    updateDimensions(); // Initial calculation

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [calculateSlidesToShow]);

  // Effect to update slideWidth when slidesToShow or carouselRef.current changes
  useEffect(() => {
    setSlideWidth(calculateSlideWidth());
  }, [slidesToShow, calculateSlideWidth]);

  // --- START OF BUG FIX ---
  // Move snapToNearestSlide definition BEFORE handleDragEnd
  const snapToNearestSlide = useCallback(() => {
    if (!innerCarouselRef.current || slideWidth === 0) return;

    const currentScrollLeft = innerCarouselRef.current.scrollLeft;
    // Calculate the target scroll position based on the nearest slide
    const targetIndex = Math.round(currentScrollLeft / (slideWidth + GAP));
    setCurrentSlideIndex(targetIndex);
  }, [slideWidth, GAP]); // Added GAP to dependencies

  // --- END OF BUG FIX ---

  // Drag functionality - unified logic for mouse and touch
  const handleDragStart = useCallback((clientX: number) => {
    if (!innerCarouselRef.current) return;
    setIsDragging(true);
    setStartX(clientX - innerCarouselRef.current.offsetLeft);
    setScrollLeftInitial(innerCarouselRef.current.scrollLeft);
    innerCarouselRef.current.style.cursor = 'grabbing';
    innerCarouselRef.current.style.scrollBehavior = 'auto'; // Disable smooth scroll during drag
  }, []);

  const handleDragEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (innerCarouselRef.current) {
        innerCarouselRef.current.style.cursor = 'grab';
        innerCarouselRef.current.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
      }
      snapToNearestSlide(); // This is now safely accessible
    }
  }, [isDragging, snapToNearestSlide]); // This dependency is now correct

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging || !innerCarouselRef.current) return;
    const x = clientX - innerCarouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplier for faster scroll
    innerCarouselRef.current.scrollLeft = scrollLeftInitial - walk;
  }, [isDragging, startX, scrollLeftInitial]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => handleDragStart(e.pageX);
  const onMouseLeave = () => handleDragEnd();
  const onMouseUp = () => handleDragEnd();
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) e.preventDefault(); // Prevent default drag behavior (e.g., image dragging)
    handleDragMove(e.pageX);
  };


  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => handleDragStart(e.touches[0].pageX);
  const onTouchEnd = () => handleDragEnd();
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => handleDragMove(e.touches[0].pageX);

  // Handle programmatic scrolling to currentSlideIndex
  useEffect(() => {
    if (innerCarouselRef.current && slideWidth > 0 && !isDragging) {
      innerCarouselRef.current.scrollTo({
        left: currentSlideIndex * (slideWidth + GAP),
        behavior: 'smooth',
      });
    }
  }, [currentSlideIndex, slideWidth, isDragging, GAP]); // Added GAP to dependencies

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, articles.length - slidesToShow));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const isPrevDisabled = currentSlideIndex === 0;
  // Calculate next button disable state more accurately based on total content width vs visible width
  const isNextDisabled = currentSlideIndex >= articles.length - slidesToShow;

  return (
    <section className="px-10 py-8 max-w-7xl mx-auto bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent articles</h2>
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ${
              isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ${
              isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div ref={carouselRef} className="relative overflow-hidden">
        <div
          ref={innerCarouselRef}
          className="flex scroll-smooth overflow-x-hidden"
          style={{
            scrollSnapType: 'x mandatory',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
        >
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{
                width: slideWidth > 0 ? `${slideWidth}px` : 'auto',
                marginRight: idx < articles.length - 1 ? `${GAP}px` : '0px',
              }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;