import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Share2, Bookmark, Heart } from "lucide-react";
import heroAiImage from "@/assets/hero-ai-article.jpg";
import techWorkspaceImage from "@/assets/tech-workspace.jpg";
import phoneTechImage from "@/assets/phone-tech.jpg";
import vrGamingImage from "@/assets/vr-gaming.jpg";
import electricCarImage from "@/assets/electric-car.jpg";
import spaceTechImage from "@/assets/space-tech.jpg";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock article data - in real app, this would come from CMS/API
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Everyday Technology",
      subtitle: "How artificial intelligence is reshaping the way we interact with devices and changing our daily routines",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg",
        bio: "Senior Technology Reporter covering AI and emerging tech"
      },
      publishedAt: "January 15, 2024",
      category: "AI",
      image: heroAiImage,
      content: `
        <p>Artificial intelligence has moved beyond the realm of science fiction and into our everyday lives. From smart home devices that learn our preferences to recommendation algorithms that shape our digital experiences, AI is quietly revolutionizing how we interact with technology.</p>
        
        <p>The integration of AI into consumer technology has accelerated dramatically over the past few years. Voice assistants like Alexa and Google Assistant have become household staples, while machine learning algorithms power everything from photo organization to predictive text input on our smartphones.</p>
        
        <h2>The Personal AI Revolution</h2>
        
        <p>What makes today's AI revolution particularly significant is its personal nature. Unlike previous technological advances that required us to adapt to new interfaces or workflows, modern AI systems adapt to us. They learn from our behavior, anticipate our needs, and provide increasingly personalized experiences.</p>
        
        <p>Consider how your smartphone's camera now automatically adjusts settings based on what it detects in the scene, or how streaming services seem to know exactly what you want to watch next. These aren't magic tricks – they're the result of sophisticated machine learning algorithms working behind the scenes.</p>
        
        <h2>Challenges and Opportunities</h2>
        
        <p>However, this AI integration isn't without its challenges. Privacy concerns, algorithmic bias, and the potential for over-dependence on automated systems are real issues that technologists and policymakers are grappling with.</p>
        
        <p>The key to navigating this AI-powered future lies in finding the right balance between automation and human agency. The most successful AI implementations will be those that enhance human capabilities rather than replace them entirely.</p>
        
        <p>As we look ahead, one thing is clear: AI will continue to become more deeply integrated into our daily lives. The question isn't whether this will happen, but how we can ensure it happens in ways that benefit everyone.</p>
      `
    },
    {
      id: 2,
      title: "Revolutionary VR Gaming Experience",
      subtitle: "The latest VR headsets are changing the gaming landscape forever",
      author: {
        name: "Mike Rodriguez",
        avatar: "/placeholder.svg",
        bio: "Gaming Technology Specialist and VR enthusiast"
      },
      publishedAt: "January 14, 2024",
      category: "Tech",
      image: vrGamingImage,
      content: `
        <p>Virtual reality gaming has reached a tipping point. With the latest generation of VR headsets offering unprecedented visual fidelity, intuitive controls, and immersive experiences, we're witnessing the birth of a truly revolutionary gaming medium.</p>
        
        <p>The technology that once required room-scale setups and complex configurations has become increasingly accessible. Modern VR systems can track movement with millimeter precision, render graphics that approach photorealism, and provide haptic feedback that makes virtual worlds feel tangible.</p>
        
        <h2>Beyond Traditional Gaming</h2>
        
        <p>What's particularly exciting about current VR gaming is how it's expanding beyond traditional game genres. Social VR experiences allow players to meet in virtual spaces, fitness games turn workouts into adventures, and educational experiences transport learners to historical events or distant planets.</p>
        
        <p>The immersive nature of VR creates emotional connections that flat-screen gaming simply cannot match. When you're standing on a virtual mountain peak or exploring an alien world, the sense of presence is profound and transformative.</p>
      `
    }
  ];

  const article = articles.find(a => a.id === parseInt(id || "1")) || articles[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4 bg-verge-cyan text-background">
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {article.subtitle}
              </p>
            )}
          </div>

          {/* Author and Meta */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">{article.author.bio}</p>
                <p className="text-sm text-muted-foreground mt-1">{article.publishedAt}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-p:leading-relaxed prose-strong:text-foreground">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </article>

        {/* Related Articles */}
        <div className="border-t border-border pt-8">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.filter(a => a.id !== article.id).slice(0, 2).map((relatedArticle) => (
              <Link key={relatedArticle.id} to={`/article/${relatedArticle.id}`}>
                <div className="group border border-border rounded-lg overflow-hidden hover:bg-accent/50 transition-colors">
                  <div className="aspect-video">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 bg-verge-cyan text-background text-xs">
                      {relatedArticle.category}
                    </Badge>
                    <h4 className="font-bold mb-2 group-hover:text-verge-cyan transition-colors">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {relatedArticle.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;