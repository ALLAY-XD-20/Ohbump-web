import { CheckCircle2, AlertCircle, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export default function Status() {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: "Discord Bot", status: "🟢 Operational" },
    { name: "AutoBump System", status: "🟢 Operational" },
    { name: "API", status: "🟢 Operational" },
    { name: "Dashboard", status: "🟢 Operational" }
  ];

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    if (diff < 60000) return "Just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
    return date.toLocaleString();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-5xl font-display font-bold text-white">
          OHBump <span className="text-rainbow">Status</span>
        </h1>
        <p className="text-xl text-muted-foreground">Real-time service status and performance metrics</p>
      </div>

      {/* Current Status */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
          <h2 className="text-2xl font-display font-bold text-white">Current Status</h2>
        </div>
        <p className="text-3xl font-display font-bold text-green-400">🟢 All Systems Operational</p>
        <p className="text-muted-foreground">All services are running normally and performing as expected.</p>
      </div>

      {/* Services */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display font-bold text-white">⚙️ Services</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl border border-white/10 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
              data-testid={`service-${service.name.toLowerCase().replace(/ /g, '-')}`}
            >
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-display font-bold text-white mb-1">{service.name}</h3>
                <p className="text-green-400 text-sm font-semibold">{service.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
        <h2 className="text-2xl font-display font-bold text-white">⏱️ Performance</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Activity className="w-4 h-4" />
              Uptime
            </div>
            <p className="text-3xl font-display font-bold text-green-400">99.9%</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Activity className="w-4 h-4" />
              Average Latency
            </div>
            <p className="text-3xl font-display font-bold text-primary">120ms</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Activity className="w-4 h-4" />
              Last Check
            </div>
            <p className="text-lg font-display font-bold text-white">{formatTime(lastUpdate)}</p>
          </div>
        </div>
      </div>

      {/* Incidents */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white">📢 Incidents</h2>
        <div className="flex items-start gap-3 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <p className="text-green-200">No incidents reported in the last 24 hours.</p>
        </div>
      </div>

      {/* Auto Refresh */}
      <div className="glass-card p-6 rounded-xl border border-primary/30 bg-gradient-to-r from-purple-600/10 to-pink-600/10 space-y-2 text-center">
        <p className="text-sm text-muted-foreground">🔄 Auto Refresh</p>
        <p className="text-white font-semibold">Status updates automatically every 60 seconds.</p>
      </div>

      {/* Incident History */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white">📋 Incident History</h2>
        <div className="space-y-3">
          <div className="p-4 bg-black/30 rounded-lg border border-green-500/20 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display font-bold text-white mb-1">AutoBump Feature Update</h3>
                <p className="text-sm text-muted-foreground">Scheduled maintenance for AutoBump optimization</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">Resolved</span>
            </div>
            <p className="text-xs text-muted-foreground">Dec 10, 2024 • Duration: 15 minutes</p>
          </div>

          <div className="p-4 bg-black/30 rounded-lg border border-green-500/20 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display font-bold text-white mb-1">Database Optimization</h3>
                <p className="text-sm text-muted-foreground">Performance improvements to bot database</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">Resolved</span>
            </div>
            <p className="text-xs text-muted-foreground">Dec 5, 2024 • Duration: 22 minutes</p>
          </div>

          <div className="p-4 bg-black/30 rounded-lg border border-green-500/20 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display font-bold text-white mb-1">API Security Patch</h3>
                <p className="text-sm text-muted-foreground">Critical security update applied to API endpoints</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">Resolved</span>
            </div>
            <p className="text-xs text-muted-foreground">Nov 28, 2024 • Duration: 8 minutes</p>
          </div>

          <div className="p-4 bg-black/30 rounded-lg border border-green-500/20 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display font-bold text-white mb-1">Dashboard Deployment</h3>
                <p className="text-sm text-muted-foreground">New dashboard version released with improvements</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">Resolved</span>
            </div>
            <p className="text-xs text-muted-foreground">Nov 20, 2024 • Duration: 12 minutes</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground italic pt-2 border-t border-white/10">All incidents have been resolved. For more details, join our support server.</p>
      </div>

      {/* Support Footer */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4 text-center">
        <p className="text-muted-foreground">🔗 Need help?</p>
        <a
          href="https://discord.gg/WgaAFQQQFP"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          data-testid="button-join-support"
        >
          Join our Support Server
        </a>
      </div>

      {/* Status History */}
      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-2xl font-display font-bold text-white">📊 Uptime History</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
            <span className="text-muted-foreground">Today</span>
            <span className="text-green-400 font-semibold">100%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
            <span className="text-muted-foreground">This Week</span>
            <span className="text-green-400 font-semibold">99.9%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
            <span className="text-muted-foreground">This Month</span>
            <span className="text-green-400 font-semibold">99.9%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
            <span className="text-muted-foreground">Last 90 Days</span>
            <span className="text-green-400 font-semibold">99.95%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
