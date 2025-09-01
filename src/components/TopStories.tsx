interface Story {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  commentCount: number;
}

interface TopStoriesProps {
  stories: Story[];
}

export const TopStories = ({ stories }: TopStoriesProps) => {
  return (
    <aside className="space-y-6">
      <h2 className="text-xl font-bold text-verge-cyan">Top Stories</h2>
      
      <div className="space-y-6">
        {stories.map((story, index) => (
          <article key={story.id} className="group cursor-pointer">
            <div className="flex space-x-4">
              {/* Story Number */}
              <span className="flex-shrink-0 text-2xl font-bold text-verge-cyan">
                {index + 1}
              </span>
              
              <div className="flex-1 space-y-2">
                <h3 className="font-bold leading-tight group-hover:text-verge-cyan transition-colors">
                  {story.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span className="text-verge-cyan font-medium">{story.author}</span>
                    <span>{story.date}</span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <span>💬</span>
                    <span>{story.commentCount}</span>
                  </span>
                </div>
              </div>
              
              {/* Story Image */}
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-muted">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
};