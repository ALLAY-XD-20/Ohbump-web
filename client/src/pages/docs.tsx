import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

export default function Docs() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-display font-bold text-white">Documentation</h1>
        <p className="text-muted-foreground">Learn how to use OHBump effectively</p>
      </div>

      <Tabs defaultValue="getting-started" className="space-y-6">
        <TabsList className="bg-black/40 border border-white/10">
          <TabsTrigger value="getting-started" className="text-white">Getting Started</TabsTrigger>
          <TabsTrigger value="setup" className="text-white">Setup</TabsTrigger>
          <TabsTrigger value="faq" className="text-white">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started" className="space-y-4">
          <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">Getting Started with OHBump</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>OHBump is a Discord bot designed to help server owners automatically bump their servers to increase visibility and grow their community.</p>
              
              <h3 className="text-lg font-bold text-white mt-6">What is Bumping?</h3>
              <p>Bumping is the process of re-listing your Discord server at the top of server lists. This increases visibility and helps attract new members.</p>
              
              <h3 className="text-lg font-bold text-white mt-6">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Automatic server bumping</li>
                <li>Scheduled bump times</li>
                <li>Multi-language support</li>
                <li>Real-time statistics</li>
                <li>24/7 uptime</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="setup" className="space-y-4">
          <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">Setup Instructions</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Step 1: Add Bot to Server</h3>
                <p>Click the "Invite OHBump" button on the dashboard to add the bot to your server.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Step 2: Grant Permissions</h3>
                <p>Accept the required permissions for the bot to function properly. OHBump needs minimal permissions to operate safely.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Step 3: Configure Bumping</h3>
                <p>Use the `/bump set` command to configure when and how often your server gets bumped.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Step 4: Enjoy!</h3>
                <p>Your server will now be automatically bumped according to your settings.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-display font-bold text-white">Frequently Asked Questions</h2>
            
            {[
              { q: "Is OHBump free?", a: "Yes, OHBump is completely free to use!" },
              { q: "How often can I bump?", a: "You can bump every 2 hours on most Discord list platforms." },
              { q: "Does it work with all servers?", a: "Yes, OHBump works with any Discord server regardless of size." },
              { q: "Is my data safe?", a: "We take privacy seriously. Your data is encrypted and never shared." }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4 last:border-b-0">
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
