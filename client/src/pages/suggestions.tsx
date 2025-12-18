import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Suggestions() {
  const [suggestion, setSuggestion] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1436709415771177141/5HDOAC0GDJbQHEF-QIYR6BAb7pFcfA72dqOLj40Gtscm6-rT4CAkdBWtUUuPtq-G-gSr";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!suggestion.trim()) {
      setStatus("error");
      setMessage("Please enter a suggestion");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        content: "",
        embeds: [
          {
            title: "📝 New Suggestion Received",
            color: 0x8b5cf6,
            fields: [
              {
                name: "💡 Suggestion",
                value: suggestion,
                inline: false
              },
              {
                name: "📧 From",
                value: email,
                inline: true
              },
              {
                name: "⏰ Time",
                value: new Date().toLocaleString(),
                inline: true
              }
            ],
            footer: {
              text: "OHBump Suggestions",
              icon_url: "https://cdn-icons-png.flaticon.com/512/1995/1995572.png"
            }
          }
        ]
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! Your suggestion has been sent to our team.");
        setSuggestion("");
        setEmail("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setMessage("Failed to send suggestion. Please try again.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
      setTimeout(() => setStatus("idle"), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-5xl font-display font-bold text-white">
          <Lightbulb className="inline-block w-12 h-12 text-rainbow mr-2" />
          <span className="text-rainbow">Suggestions</span>
        </h1>
        <p className="text-xl text-muted-foreground">We'd love to hear your ideas! Help us improve OHBump.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Form Card */}
        <div className="md:col-span-2 glass-card p-8 rounded-2xl border border-white/10 space-y-6">
          <h2 className="text-2xl font-display font-bold text-white">Submit Your Suggestion</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5" data-testid="suggestions-form">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                data-testid="input-email"
                disabled={loading}
              />
            </div>

            {/* Suggestion Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Your Suggestion</label>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Tell us what you think would make OHBump better..."
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                rows={6}
                data-testid="textarea-suggestion"
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground">
                {suggestion.length}/500 characters
              </p>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-200">{message}</p>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-200">{message}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              data-testid="button-submit-suggestion"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Suggestion
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Info Card */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h3 className="text-lg font-display font-bold text-white">How It Works</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <span className="text-primary font-bold">1</span>
              <span>Fill out the form with your email and suggestion</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">2</span>
              <span>Click the submit button to send</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">3</span>
              <span>Our team reviews your suggestion on Discord</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">4</span>
              <span>We implement the best ideas!</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Need Help?</p>
            <a
              href="https://discord.gg/WgaAFQQQFP"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary rounded-lg transition-all duration-300 text-sm font-semibold"
              data-testid="link-discord-support"
            >
              Join Discord Server
            </a>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white">💡 Tips for Great Suggestions</h2>
        <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
          <div className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Be specific about what you'd like to see improved</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Explain how it would benefit the OHBump community</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Check if your suggestion doesn't already exist</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">✓</span>
            <span>Include examples if it helps clarify your idea</span>
          </div>
        </div>
      </div>

      {/* Featured Suggestions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display font-bold text-white">Recently Implemented Suggestions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "AutoBump Feature", description: "Automatic bumping every 50 minutes" },
            { title: "Premium System", description: "Advanced features for premium members" },
            { title: "Custom Colors", description: "Personalize your server listing appearance" },
            { title: "24/7 Support", description: "Around-the-clock customer support" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <h3 className="font-display font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
