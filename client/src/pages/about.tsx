import { Card } from "@/components/ui/card";
import { Heart, Zap, Megaphone, Users, Star } from "lucide-react";

export default function About() {
  const staff = [
    {
      position: 1,
      name: "Fay",
      role: "Bump System And Original Dev",
      icon: Zap,
      color: "from-purple-600 to-purple-500"
    },
    {
      position: 2,
      name: "Allay XD",
      role: "Premiun System And Hosting",
      icon: Star,
      color: "from-cyan-600 to-cyan-500"
    },
    {
      position: 3,
      name: "Retro",
      role: "Bot Promotion, Command Idea, And Add Server Partner",
      icon: Megaphone,
      color: "from-pink-600 to-pink-500"
    },
    {
      position: 4,
      name: "Vien",
      role: "Discord Staff And Server Booster",
      icon: Users,
      color: "from-blue-600 to-blue-500"
    },
    {
      position: 5,
      name: "Tegba",
      role: "Partnership And Server Booster [Special Member]",
      icon: Heart,
      color: "from-red-600 to-red-500"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-5xl font-display font-bold">
          About <span className="text-rainbow">Staff</span>
        </h1>
        <p className="text-xl text-muted-foreground">Meet the amazing team behind OHBump</p>
      </div>

      <div className="space-y-4">
        {staff.map((member) => {
          const Icon = member.icon;
          return (
            <div
              key={member.position}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group"
              data-testid={`staff-card-${member.position}`}
            >
              <div className="flex items-start gap-6">
                {/* Position Number */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-display font-bold text-2xl group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300`}>
                  {member.position}
                </div>

                {/* Content */}
                <div className="flex-1 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-rainbow mb-2">
                      {member.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">{member.role}</p>
                  </div>
                  <Icon className="w-8 h-8 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white mb-4">About OHBump</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            OHBump was created with one mission in mind: <span className="text-primary">to help Discord server owners grow their communities</span> through a powerful and easy-to-use bumping system.
          </p>
          <p>
            Our team of dedicated developers and community managers work tirelessly to ensure that OHBump remains the most reliable and feature-rich bumping bot on Discord. Every member of our team brings unique expertise and passion to make OHBump better every day.
          </p>
          <p>
            Whether it's developing new features, managing premium systems, promoting the bot, handling community needs, or fostering partnerships, our team is committed to your success.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3">
          <h3 className="text-lg font-display font-bold text-white">Our Mission</h3>
          <p className="text-muted-foreground text-sm">
            To provide the most intuitive and powerful Discord bumping solution that helps server owners grow their communities organically and sustainably.
          </p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-white/10 space-y-3">
          <h3 className="text-lg font-display font-bold text-white">Our Vision</h3>
          <p className="text-muted-foreground text-sm">
            To become the go-to choice for server owners worldwide who want to boost their Discord communities with a reliable, feature-rich bot.
          </p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-6">
          Want to connect with us, share feedback, or report issues? Join our support server and be part of the OHBump family!
        </p>
        <a
          href="https://discord.gg/WgaAFQQQFP"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          data-testid="button-join-discord"
        >
          Join Discord Server
        </a>
      </div>
    </div>
  );
}
