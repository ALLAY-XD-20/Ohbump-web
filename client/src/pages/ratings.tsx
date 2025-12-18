import { Star, ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function Ratings() {
  const [sortBy, setSortBy] = useState<"recent" | "highest" | "lowest">("recent");

  const ratings = [
    {
      id: 1,
      user: "SkyBuilder#2341",
      avatar: "🎮",
      rating: 5,
      title: "Best bumping bot ever!",
      review: "OHBump has completely transformed how we grow our server. The AutoBump feature saves us hours, and the UI is incredibly clean.",
      date: "2 days ago",
      helpful: 234
    },
    {
      id: 2,
      user: "Luna_Dev#5678",
      avatar: "✨",
      rating: 5,
      title: "Amazing support and features",
      review: "The team is super responsive and always adding new features. Premium is worth every penny. Highly recommend!",
      date: "1 week ago",
      helpful: 189
    },
    {
      id: 3,
      user: "NovaGaming#1234",
      avatar: "🚀",
      rating: 5,
      title: "Game changer for server growth",
      review: "Our server went from 50 members to 500+ in just 2 months using OHBump. The automation is flawless.",
      date: "2 weeks ago",
      helpful: 456
    },
    {
      id: 4,
      user: "CoolDev#9999",
      avatar: "🔥",
      rating: 4,
      title: "Great bot, minor UI issues",
      review: "Works great and the bump system is solid. Just had some minor UI glitches on mobile, but overall excellent.",
      date: "3 weeks ago",
      helpful: 127
    },
    {
      id: 5,
      user: "ProServer#4567",
      avatar: "⭐",
      rating: 5,
      title: "Worth the investment",
      review: "Best investment we made for our server. AutoBump alone saves us so much time. Customer service is top-notch!",
      date: "1 month ago",
      helpful: 312
    },
    {
      id: 6,
      user: "TechLord#8888",
      avatar: "💻",
      rating: 5,
      title: "Flawless automation",
      review: "The bot never fails. Runs 24/7 without issues. Dashboard is beautiful. Haven't found any bugs yet.",
      date: "1 month ago",
      helpful: 198
    }
  ];

  const sortedRatings = [...ratings].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0;
  });

  const averageRating = (ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length).toFixed(1);
  const fiveStarCount = ratings.filter(r => r.rating === 5).length;
  const fourStarCount = ratings.filter(r => r.rating === 4).length;

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-5xl font-display font-bold text-white">
          Global <span className="text-rainbow">Ratings</span>
        </h1>
        <p className="text-xl text-muted-foreground">See what the community thinks about OHBump</p>
      </div>

      {/* Rating Summary */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">Average Rating</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-4xl font-display font-bold text-yellow-400">{averageRating}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(parseFloat(averageRating)) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{ratings.length} Ratings</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">5 ⭐</span>
              <div className="flex-1 h-2 bg-black/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400" 
                  style={{ width: `${(fiveStarCount / ratings.length) * 100}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground">{fiveStarCount}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">4 ⭐</span>
              <div className="flex-1 h-2 bg-black/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-300" 
                  style={{ width: `${(fourStarCount / ratings.length) * 100}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground">{fourStarCount}</span>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">User Satisfaction</p>
            <p className="text-3xl font-display font-bold text-green-400">100%</p>
            <p className="text-xs text-muted-foreground">Recommended</p>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex gap-3">
        <button
          onClick={() => setSortBy("recent")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            sortBy === "recent"
              ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              : "bg-black/40 text-muted-foreground hover:text-white border border-white/10"
          }`}
        >
          Recent
        </button>
        <button
          onClick={() => setSortBy("highest")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            sortBy === "highest"
              ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              : "bg-black/40 text-muted-foreground hover:text-white border border-white/10"
          }`}
        >
          Highest
        </button>
        <button
          onClick={() => setSortBy("lowest")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            sortBy === "lowest"
              ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              : "bg-black/40 text-muted-foreground hover:text-white border border-white/10"
          }`}
        >
          Lowest
        </button>
      </div>

      {/* Ratings List */}
      <div className="space-y-4">
        {sortedRatings.map((rating) => (
          <div
            key={rating.id}
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 space-y-3"
            data-testid={`rating-card-${rating.id}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{rating.avatar}</span>
                <div>
                  <p className="font-display font-bold text-white">{rating.user}</p>
                  <p className="text-xs text-muted-foreground">{rating.date}</p>
                </div>
              </div>
              {renderStars(rating.rating)}
            </div>

            {/* Title and Review */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-white">{rating.title}</h3>
              <p className="text-muted-foreground text-sm">{rating.review}</p>
            </div>

            {/* Helpful */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-white text-sm">
                <ThumbsUp className="w-4 h-4" />
                Helpful ({rating.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="glass-card p-8 rounded-2xl border border-primary/30 bg-gradient-to-r from-purple-600/10 to-pink-600/10 space-y-4 text-center">
        <h2 className="text-2xl font-display font-bold text-white">Join 90K+ Happy Users</h2>
        <p className="text-muted-foreground">Experience the power of OHBump and see why our community loves it.</p>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1449058454957330616&scope=bot"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          data-testid="button-add-bot-ratings"
        >
          Add OHBump to Your Server
        </a>
      </div>
    </div>
  );
}
