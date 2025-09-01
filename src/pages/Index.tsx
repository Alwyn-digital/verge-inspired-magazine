import { Navigation } from "@/components/Navigation";
import { HeroArticle } from "@/components/HeroArticle";
import { TopStories } from "@/components/TopStories";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-ai-article.jpg";
import techWorkspace from "@/assets/tech-workspace.jpg";
import phoneTech from "@/assets/phone-tech.jpg";
import vrGaming from "@/assets/vr-gaming.jpg";

const Index = () => {
  // Mock data for the hero article
  const heroArticle = {
    title: "AI agents are science fiction not yet ready for primetime",
    subtitle: "But they're getting better. The future of artificial intelligence promises to reshape how we work, create, and interact with technology in ways we're just beginning to understand.",
    author: "SARAH CHEN",
    date: "JAN 15",
    image: heroImage,
    category: "AI"
  };

  // Mock data for top stories
  const topStories = [
    {
      id: 1,
      title: "Showrunner wants to turn you into a happy little content prompter for the 'Netflix of AI'",
      author: "ALEX MARTINEZ",
      date: "JAN 14",
      image: techWorkspace,
      commentCount: 85
    },
    {
      id: 2,
      title: "Why do delivery drones keep loitering in front of my house?",
      author: "JORDAN PARKER",
      date: "JAN 14",
      image: phoneTech,
      commentCount: 42
    },
    {
      id: 3,
      title: "The future of VR hardware isn't one device — it's an entire ecosystem",
      author: "RILEY JOHNSON",
      date: "JAN 13",
      image: vrGaming,
      commentCount: 156
    },
    {
      id: 4,
      title: "The Pixel 10's AI screamed at us",
      author: "CASEY TAYLOR",
      date: "JAN 12",
      image: phoneTech,
      commentCount: 203
    },
    {
      id: 5,
      title: "Meta is struggling to rein in its AI chatbots",
      author: "MORGAN ELLIS",
      date: "JAN 11",
      image: techWorkspace,
      commentCount: 97
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hero Article - Takes up 2/3 of the width on large screens */}
          <div className="lg:col-span-2">
            <HeroArticle {...heroArticle} />
          </div>
          
          {/* Top Stories Sidebar - Takes up 1/3 of the width on large screens */}
          <div className="lg:col-span-1">
            <TopStories stories={topStories} />
          </div>
        </div>

        {/* Latest Articles Grid */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-verge-cyan">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="group cursor-pointer">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={item % 2 === 0 ? techWorkspace : vrGaming}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-verge-cyan rounded">
                    Tech
                  </span>
                  
                  <h3 className="font-bold leading-tight group-hover:text-verge-cyan transition-colors">
                    Revolutionary breakthrough in quantum computing brings us closer to the future
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="text-verge-cyan font-medium">TECH WRITER</span>
                    <span>•</span>
                    <time>2 hours ago</time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;