import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1449058454957330616&scope=bot";

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <img 
          src="/banner.png" 
          alt="OHBump Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-5xl font-display font-bold text-rainbow">OHBump</h1>
        <p className="text-xl text-muted-foreground">The Ultimate Discord Bumping Bot</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Invite Card */}
        <div className="glass-card p-8 rounded-2xl space-y-4 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
          <h2 className="text-2xl font-display font-bold text-white">Get Started</h2>
          <p className="text-muted-foreground">Add OHBump to your server with one click</p>
          <Button 
            onClick={copyInviteLink}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            data-testid="button-copy-invite"
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? "Copied!" : "Copy Invite Link"}
          </Button>
          <a
            href={inviteLink}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-block"
          >
            <Button 
              variant="outline"
              className="w-full border-primary/30 text-white hover:bg-primary/10 hover:border-primary/50 py-6 rounded-xl font-semibold transition-all duration-300"
              data-testid="button-invite-discord"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Invite Link
            </Button>
          </a>
        </div>

        {/* Features Card */}
        <div className="glass-card p-8 rounded-2xl space-y-4 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
          <h2 className="text-2xl font-display font-bold text-white">Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Auto-bump your server
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Scheduled bumping
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Easy configuration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              24/7 Support
            </li>
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Servers", value: "50+" },
          { label: "Users", value: "90K+" },
          { label: "Uptime", value: "24/7" }
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-6 rounded-xl border border-white/10 text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
