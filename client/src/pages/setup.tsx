import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Setup() {
  const steps = [
    {
      title: "Set Channel",
      command: "/channel <#channel>",
      description: "Set the channel where bump notifications will be sent",
      icon: "1"
    },
    {
      title: "Add Description",
      command: "/description <desc>",
      description: "Add a description for your server listing",
      icon: "2"
    },
    {
      title: "Add Color",
      command: "/color <#hex>",
      description: "Customize your server listing with a color (hex code)",
      icon: "3"
    },
    {
      title: "Add Banner",
      command: "/banner <link>",
      description: "Add a banner image to your server listing",
      icon: "4"
    },
    {
      title: "Bump Your Server",
      command: "/bump",
      description: "Finally, bump your server to the top of the list!",
      icon: "5"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-5xl font-display font-bold text-white">
          HOW TO <span className="text-rainbow">SETUP</span>
        </h1>
        <p className="text-xl text-muted-foreground">It's so simple! Follow these easy steps</p>
      </div>

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group"
            data-testid={`setup-step-${idx + 1}`}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-white font-display font-bold text-lg group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-display font-bold text-white mb-2">{step.title}</h2>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-green-400 break-words">
                  <code>{step.command}</code>
                </div>
              </div>
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
        <h2 className="text-3xl font-display font-bold text-white">And /bump! It's so Simple!</h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/40 p-6 rounded-xl border border-primary/20">
              <div className="text-primary font-display font-bold text-2xl mb-2">✨ That's It!</div>
              <p className="text-muted-foreground">You've successfully set up OHBump for your server. Your server is now ready to be bumped and grow!</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/20 p-6 rounded-xl border border-primary/30">
              <div className="text-primary font-display font-bold text-2xl mb-2">🚀 Ready to Bump</div>
              <p className="text-muted-foreground">Type /bump whenever you want to boost your server visibility and attract new members!</p>
            </div>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-white/10 space-y-3">
            <h3 className="text-white font-display font-bold">Pro Tips:</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Use <code className="bg-black/60 px-2 py-1 rounded text-green-400">/autobump</code> to automatically bump every 2 hours
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Set up <code className="bg-black/60 px-2 py-1 rounded text-green-400">/bumpreminder</code> to get notified when you can bump again
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Use attractive banners and descriptions to get more joins from each bump
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Combine bumping with Discord Server List promotion for maximum visibility
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Need Help?</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>If you have any questions or need assistance during setup:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Join our <a href="https://discord.gg/WgaAFQQQFP" className="text-primary hover:text-primary/80 transition-colors">support server</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Email us at <a href="mailto:faybuilder.id@gmail.com" className="text-primary hover:text-primary/80 transition-colors">faybuilder.id@gmail.com</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Check our <a href="/docs" className="text-primary hover:text-primary/80 transition-colors">documentation</a> for more details</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
