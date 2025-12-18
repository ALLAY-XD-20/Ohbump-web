import { Zap, Bot, Clock, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Premium() {
  const features = [
    {
      number: 1,
      title: "AutoBump Per 50 Min",
      description: "AutoBump is a premium feature that automatically bumps your server every 50 minutes, so you never miss a bump.",
      benefits: [
        { icon: "🤖", text: "Fully automatic (no manual /bump)" },
        { icon: "⏱️", text: "Runs every 50 minutes, respecting cooldowns" },
        { icon: "📈", text: "Keeps your server consistently visible" },
        { icon: "🔒", text: "Works 24/7 while enabled" }
      ],
      requirements: [
        "Bot permissions: Send Messages, Embed Links",
        "AutoBump channel must be set",
        "💎 Available for Premium users only"
      ]
    },
    {
      number: 2,
      title: "Make Bump Cooldown To 50",
      description: "Make Your Cooldown Short",
      benefits: [
        { icon: "⚡", text: "Reduced cooldown from standard 2 hours to just 50 minutes" },
        { icon: "🚀", text: "Bump more frequently without waiting" },
        { icon: "📊", text: "Increase server visibility exponentially" },
        { icon: "💰", text: "Premium exclusive feature" }
      ],
      requirements: [
        "Active Premium subscription",
        "AutoBump enabled",
        "💎 Available for Premium users only"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header with Animated Logo */}
      <div className="relative">
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Animated Boost Logo */}
          <div className="relative">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-spin opacity-75" 
                style={{ animationDuration: "3s" }}>
              </div>
              
              {/* Middle ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"
                style={{ animation: "spin 4s linear infinite reverse" }}>
              </div>
              
              {/* Inner circle with icon */}
              <div className="relative inset-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-black border-2 border-purple-400 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                <Rocket className="w-12 h-12 text-pink-400 animate-bounce" />
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-5xl font-display font-bold text-rainbow">
              Premium
            </h1>
            <p className="text-xl text-muted-foreground">Unlock the full power of OHBump</p>
          </div>
        </div>
      </div>

      {/* Premium Benefits Section */}
      <div className="space-y-2 mb-8">
        <h2 className="text-4xl font-display font-bold">
          Premium <span className="text-rainbow">Benefits</span>
        </h2>
        <p className="text-muted-foreground">Elevate your server growth with exclusive features</p>
      </div>

      {/* Features */}
      <div className="space-y-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] space-y-6"
            data-testid={`premium-feature-${feature.number}`}
          >
            {/* Feature Header */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-display font-bold text-xl">
                {feature.number}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-lg flex-shrink-0">{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Requirements</p>
              <ul className="space-y-2">
                {feature.requirements.map((req, ridx) => (
                  <li key={ridx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">›</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="glass-card p-8 rounded-2xl border border-primary/30 bg-gradient-to-r from-purple-600/10 to-pink-600/10 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold text-white">Ready to Upgrade?</h2>
          <p className="text-muted-foreground">Get premium features and boost your server growth today</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://discord.gg/WgaAFQQQFP" target="_blank" rel="noreferrer">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              data-testid="button-upgrade-premium">
              <Zap className="w-4 h-4 mr-2" />
              Get Premium
            </Button>
          </a>
          <a href="https://discord.gg/WgaAFQQQFP" target="_blank" rel="noreferrer">
            <Button variant="outline" className="w-full sm:w-auto border-primary/30 text-white hover:bg-primary/10 hover:border-primary/50 py-6 px-8 rounded-xl font-semibold transition-all duration-300"
              data-testid="button-learn-more">
              Learn More
            </Button>
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3 text-center">
          <Zap className="w-8 h-8 text-primary mx-auto" />
          <h3 className="font-display font-bold text-white">Super Fast</h3>
          <p className="text-sm text-muted-foreground">Lightning-fast bumping every 50 minutes</p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3 text-center">
          <Shield className="w-8 h-8 text-primary mx-auto" />
          <h3 className="font-display font-bold text-white">Secure</h3>
          <p className="text-sm text-muted-foreground">Your data is safe and encrypted</p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3 text-center">
          <Clock className="w-8 h-8 text-primary mx-auto" />
          <h3 className="font-display font-bold text-white">24/7 Support</h3>
          <p className="text-sm text-muted-foreground">Always here to help you grow</p>
        </div>
      </div>
    </div>
  );
}
