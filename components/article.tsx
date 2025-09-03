"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Define Article type
interface Article {
  title: string;
  description: string;
  author: string;
  coAuthor?: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  authorImage: string;
  coAuthorImage?: string;
}

// Your placeholder articles array

const articleImages: { [key: string]: string } = {
  "Pay for Intent":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  "How a AppLovin Hijacked":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  "What Attio Teaches Us":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  "The Playbook that Fueled":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  "Data-Driven Decisions":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  "The Future of AI":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  "Mastering React Hooks":
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
};

const articles: Article[] = [
  {
    title: "Pay for Intent, Not Clicks: How to Build Ads That Convert",
    description:
      "Navigating the world of digital marketing today can feel like steering through a vast and unpredictable river. With so many ...",
    author: "George H",
    date: "Jul 02, 2025",
    readTime: "1 min read",
    tags: ["Intent-based Marketing", "Pay Per Click"],
    image: articleImages["Pay for Intent"],
    authorImage:
      "https://s3.eu-west-2.amazonaws.com/adletica.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp",
  },
  {
    title: "How a AppLovin Hijacked Billions in App-Install Spend from Google",
    description:
      "I remember exactly when AppLovin first spiled onto my radar. Google’s own performance-marketing teams, usually unflappable,..",
    author: "Mulenga Agley",
    coAuthor: "Ambre",
    date: "Jun 03, 2025",
    readTime: "5 min read",
    tags: ["Performance Marketing", "Tips"],
    image: articleImages["How a AppLovin Hijacked"],
    authorImage: "https://via.placeholder.com/36x36/dda0dd/333333?text=MA",
    coAuthorImage: "https://via.placeholder.com/36x36/dda0dd/333333?text=A",
  },
  {
    title: "What Attio Teaches Us About Building Irresistible Products",
    description:
      "I've been obsessing over Attio lately, and for good reason: it compresses everything I love about product-led growth into a...",
    author: "Mulenga Agley",
    coAuthor: "Maks",
    date: "Jun 02, 2025",
    readTime: "10 min read",
    tags: ["Growth", "Growthcourse"],
    image: articleImages["What Attio Teaches Us"],
    authorImage: "https://via.placeholder.com/36x36/add8e6/333333?text=MA",
    coAuthorImage: "https://via.placeholder.com/36x36/add8e6/333333?text=M",
  },
  {
    title: "The Playbook that Fueled 12+ Million Users For Chime",
    description:
      "I've spent my career in fintech growth marketing, and few stories are as instructive as Chime’s meteoric rise. Chime is ofte...",
    author: "Mulenga Agley",
    coAuthor: "Jey Mokashi",
    date: "May 28, 2025",
    readTime: "1 min read",
    tags: ["Fintech", "Growth"],
    image: articleImages["The Playbook that Fueled"],
    authorImage: "https://via.placeholder.com/36x36/e0ffff/333333?text=MA",
    coAuthorImage: "https://via.placeholder.com/36x36/e0ffff/333333?text=JM",
  },
  {
    title: "Data-Driven Decisions: The Key to Modern Business Success",
    description:
      "Leverage analytics and insights to make informed strategic decisions that drive growth and efficiency...",
    author: "Emily Chen",
    date: "May 20, 2025",
    readTime: "7 min read",
    tags: ["Data Science", "Business Strategy"],
    image: articleImages["Data-Driven Decisions"],
    authorImage: "https://via.placeholder.com/36x36/d8bfd8/333333?text=EC",
  },
  {
    title: "The Future of AI in Web Development: Trends and Tools",
    description:
      "Explore how artificial intelligence is shaping the landscape of web development, from automated coding to intelligent interfaces...",
    author: "Alex Rivera",
    date: "May 15, 2025",
    readTime: "8 min read",
    tags: ["AI", "Web Development"],
    image: articleImages["The Future of AI"],
    authorImage: "https://via.placeholder.com/36x36/90ee90/333333?text=AR",
  },
  {
    title:
      "Mastering React Hooks: Advanced Patterns for Better State Management",
    description:
      "Dive deep into advanced React Hooks patterns like custom hooks, useContext, and useReducer for cleaner, more maintainable code...",
    author: "Sarah Lee",
    date: "May 10, 2025",
    readTime: "6 min read",
    tags: ["React", "Frontend Development"],
    image: articleImages["Mastering React Hooks"],
    authorImage: "https://via.placeholder.com/36x36/ffdead/333333?text=SL",
  },
];

// Article card component
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="group relative m-3 overflow-hidden h-full rounded-2xl">
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-100 object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-transparent rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          href="/details"
          className="bg-[#0dcaf0] w-24 h-24 rounded-full cursor-pointer text-black flex items-center justify-center font-bold text-lg transition-colors duration-300"
        >
          View
        </Link>
      </div>
    </div>
    <div className="p-4 bg-white flex flex-col justify-between flex-grow rounded-b-2xl">
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h3>
        <p className="text-xl text-gray-600 mt-2 line-clamp-3">
          {article.description}
        </p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex -space-x-2">
          <img
            src={article.authorImage}
            alt={article.author}
            className="w-9 h-9 rounded-full border-2 border-white"
          />
          {article.coAuthorImage && (
            <img
              src={article.coAuthorImage}
              alt={article.coAuthor}
              className="w-9 h-9 rounded-full border-2 border-white"
            />
          )}
        </div>
        <div className="text-sm text-gray-800">
          <p className="font-medium text-gray-900">
            {article.author}
            {article.coAuthor && (
              <span className="text-gray-500"> • {article.coAuthor}</span>
            )}
          </p>
          <p className="text-gray-500 text-xs">
            {article.date} • {article.readTime}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ArticlesSection: React.FC = () => (
  <section className="lg:py-[40px] py-[20px] container mx-auto px-4 sm:px-8">
    <h2 className="mb-10 text-4xl font-bold">Latest Articles</h2>
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // Keeps autoplay after user interaction
      }}
      loop={true}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {articles.map((article, idx) => (
        <SwiperSlide key={idx}>
          <ArticleCard article={article} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ArticlesSection;
