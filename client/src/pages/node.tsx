import { Card } from "@/components/ui/card";
import { ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Node() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-display font-bold text-white">Node.js Development</h1>
        <p className="text-muted-foreground">Build with Node.js and Discord.js</p>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-white">Discord.js</h2>
          <p className="text-muted-foreground mb-4">The most popular Node.js library for Discord bot development</p>
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-rainbow font-semibold text-lg">Discord.js</span>
            <a
              href="https://discord.js.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Documentation
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold text-white">Installation</h3>
          <div className="bg-black/40 p-4 rounded-lg border border-white/10 font-mono text-sm text-green-400 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <code>npm install discord.js</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard("npm install discord.js", "install")}
                className="text-white/60 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold text-white">Quick Start</h3>
          <div className="bg-black/40 p-4 rounded-lg border border-white/10 font-mono text-xs text-green-400 overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">{`const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds] 
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  
  if (interaction.commandName === 'bump') {
    await interaction.reply('Server bumped!');
  }
});

client.login(process.env.DISCORD_TOKEN);`}</pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold text-white">Resources</h3>
          <ul className="space-y-2">
            {[
              { name: "Official Documentation", url: "https://discord.js.org" },
              { name: "Discord Developer Portal", url: "https://discord.com/developers/applications" },
              { name: "Discord API Documentation", url: "https://discord.com/developers/docs" }
            ].map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
