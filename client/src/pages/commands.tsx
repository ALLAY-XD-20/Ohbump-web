import { Card } from "@/components/ui/card";

export default function Commands() {
  const commands = [
    {
      name: "/autobump",
      description: "Enable or disable automatic bumping for your server",
      category: "Configuration"
    },
    {
      name: "/banner",
      description: "Set a custom banner for your server listing",
      category: "Server Settings"
    },
    {
      name: "/bump",
      description: "Manually bump your server to the top of the list",
      category: "Core"
    },
    {
      name: "/bumpreminder",
      description: "Set up automatic reminders when you can bump again",
      category: "Configuration"
    },
    {
      name: "/channel",
      description: "Set the channel for bump notifications",
      category: "Configuration"
    },
    {
      name: "/color",
      description: "Customize the color of your server's listing",
      category: "Server Settings"
    },
    {
      name: "/dashboard",
      description: "View your server's bumping dashboard and statistics",
      category: "Information"
    },
    {
      name: "/description",
      description: "Update your server description for listings",
      category: "Server Settings"
    },
    {
      name: "/help",
      description: "Get help with OHBump commands and features",
      category: "Information"
    },
    {
      name: "/invite",
      description: "Get the invite link to add OHBump to your server",
      category: "Information"
    },
    {
      name: "/language",
      description: "Change the bot's language for your server",
      category: "Configuration"
    },
    {
      name: "/premium",
      description: "View premium features and upgrade your server",
      category: "Premium"
    },
    {
      name: "/preview",
      description: "Preview how your server will appear in listings",
      category: "Server Settings"
    },
    {
      name: "/promocode",
      description: "Manage and apply promo codes to your server",
      category: "Premium"
    },
    {
      name: "/redeem",
      description: "Redeem rewards and special offers",
      category: "Premium"
    },
    {
      name: "/serverinfo",
      description: "View detailed information about your server",
      category: "Information"
    },
    {
      name: "/vote",
      description: "Vote for OHBump and receive rewards",
      category: "Premium"
    }
  ];

  const categories = Array.from(new Set(commands.map(c => c.category))).sort();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-display font-bold text-white">Commands</h1>
        <p className="text-muted-foreground">Complete list of OHBump slash commands</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-primary">{category}</h2>
          <div className="grid gap-4">
            {commands
              .filter(cmd => cmd.category === category)
              .map((cmd) => (
                <div
                  key={cmd.name}
                  className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                  data-testid={`command-card-${cmd.name.replace('/', '')}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-white mb-2">{cmd.name}</h3>
                      <p className="text-muted-foreground">{cmd.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Command Permissions</h2>
        <div className="space-y-3 text-muted-foreground">
          <p><span className="text-white font-semibold">Server Owner</span> - Full access to all commands</p>
          <p><span className="text-white font-semibold">Administrator</span> - Access to configuration and settings commands</p>
          <p><span className="text-white font-semibold">All Members</span> - Can use /bump, /serverinfo, /help, /invite, /vote</p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Tips & Tricks</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>Use <code className="bg-black/40 px-2 py-1 rounded text-green-400">/autobump</code> to automatically bump your server every 2 hours</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>Customize your server appearance with <code className="bg-black/40 px-2 py-1 rounded text-green-400">/banner</code>, <code className="bg-black/40 px-2 py-1 rounded text-green-400">/color</code>, and <code className="bg-black/40 px-2 py-1 rounded text-green-400">/description</code></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>Set up <code className="bg-black/40 px-2 py-1 rounded text-green-400">/bumpreminder</code> to get notifications when you can bump again</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>Vote for OHBump to get rewards and unlock premium features</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
