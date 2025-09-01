import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import heroAiImage from "@/assets/hero-ai-article.jpg";
import techWorkspaceImage from "@/assets/tech-workspace.jpg";
import phoneTechImage from "@/assets/phone-tech.jpg";
import vrGamingImage from "@/assets/vr-gaming.jpg";
import electricCarImage from "@/assets/electric-car.jpg";
import spaceTechImage from "@/assets/space-tech.jpg";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || "Category";

  // Mock articles data - in real app, this would come from CMS/API
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Everyday Technology",
      excerpt: "How artificial intelligence is reshaping the way we interact with devices",
      author: "Sarah Chen",
      publishedAt: "2024-01-15",
      category: "AI",
      image: heroAiImage,
      featured: true
    },
    {
      id: 2,
      title: "Revolutionary VR Gaming Experience",
      excerpt: "The latest VR headsets are changing the gaming landscape forever",
      author: "Mike Rodriguez",
      publishedAt: "2024-01-14",
      category: "Tech",
      image: vrGamingImage,
      featured: false
    },
    {
      id: 3,
      title: "Electric Vehicles Market Analysis",
      excerpt: "Understanding the rapid growth in electric vehicle adoption",
      author: "Emma Thompson",
      publishedAt: "2024-01-13",
      category: "Reviews",
      image: electricCarImage,
      featured: false
    },
    {
      id: 4,
      title: "Space Technology Breakthrough",
      excerpt: "New discoveries in space exploration technology",
      author: "David Park",
      publishedAt: "2024-01-12",
      category: "Science",
      image: spaceTechImage,
      featured: false
    },
    {
      id: 5,
      title: "Modern Workspace Design Trends",
      excerpt: "How technology is influencing modern office spaces",
      author: "Lisa Wang",
      publishedAt: "2024-01-11",
      category: "Tech",
      image: techWorkspaceImage,
      featured: false
    },
    {
      id: 6,
      title: "Latest Smartphone Technology",
      excerpt: "Comprehensive review of the newest smartphone features",
      author: "Alex Johnson",
      publishedAt: "2024-01-10",
      category: "Reviews",
      image: phoneTechImage,
      featured: false
    }
  ];

  // Filter articles by category
  const filteredArticles = articles.filter(
    article => article.category.toLowerCase() === category?.toLowerCase()
  );

  const displayArticles = filteredArticles.length > 0 ? filteredArticles : articles;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
          <p className="text-muted-foreground text-lg">
            Latest {categoryName.toLowerCase()} news, reviews, and insights
          </p>
        </div>

        {/* Featured Article */}
        {displayArticles[0] && (
          <div className="mb-12">
            <Link to={`/article/${displayArticles[0].id}`}>
              <Card className="overflow-hidden hover:bg-accent/50 transition-colors border-border">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-square">
                    <img
                      src={displayArticles[0].image}
                      alt={displayArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-verge-cyan text-background">
                      {displayArticles[0].category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4 leading-tight">
                      {displayArticles[0].title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {displayArticles[0].excerpt}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      By {displayArticles[0].author} • {displayArticles[0].publishedAt}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.slice(1).map((article) => (
            <Link key={article.id} to={`/article/${article.id}`}>
              <Card className="overflow-hidden hover:bg-accent/50 transition-colors border-border h-full">
                <div className="aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-verge-cyan text-background">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    By {article.author} • {article.publishedAt}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;