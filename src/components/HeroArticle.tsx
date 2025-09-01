import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface HeroArticleProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const HeroArticle = ({
  title,
  subtitle,
  author,
  date,
  image,
  category
}: HeroArticleProps) => {
  return (
    <Link to="/article/1">
      <article className="relative group cursor-pointer">
      {/* Featured Image */}
      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-verge-cyan text-background rounded-full">
            {category}
          </span>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white group-hover:text-verge-cyan transition-colors">
            {title}
          </h1>
          
          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span className="font-medium text-verge-cyan">{author}</span>
            <span>•</span>
            <time>{date}</time>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
};