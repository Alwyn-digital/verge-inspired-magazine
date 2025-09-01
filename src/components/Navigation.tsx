import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const categories = ["Tech", "Reviews", "Science", "Entertainment", "AI", "Politics"];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar with logo and actions */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-tight hover:text-verge-cyan transition-colors">
                The<span className="text-verge-cyan">Verge</span>
              </h1>
            </Link>
            
            {/* Desktop Categories */}
            <div className="hidden lg:flex space-x-6">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-verge-cyan text-background hover:bg-verge-cyan/90"
            >
              Subscribe
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};