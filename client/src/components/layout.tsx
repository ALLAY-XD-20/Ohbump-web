import { Link, useLocation } from "wouter";
import { LayoutDashboard, Server, FileText, Terminal, Wrench, Zap, Lightbulb, Activity, Star, Users, Shield, Lock, Menu, X, Mail, LifeBuoy, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Check local storage on mount
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
      localStorage.setItem("isLoggedIn", "true");
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/setup", label: "Setup", icon: Wrench },
    { href: "/premium", label: "Premium", icon: Zap },
    { href: "/status", label: "Status", icon: Activity },
    { href: "/ratings", label: "Ratings", icon: Star },
    { href: "/suggestions", label: "Suggestions", icon: Lightbulb },
    { href: "/node", label: "Node", icon: Server },
    { href: "/docs", label: "Docs", icon: FileText },
    { href: "/commands", label: "Commands", icon: Terminal },
    { href: "/about", label: "About Staff", icon: Users },
  ];

  const footerItems = [
    { href: "/terms", label: "Terms of Service", icon: Shield },
    { href: "/privacy", label: "Privacy Policy", icon: Lock },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full bg-black/20 backdrop-blur-md border-r border-white/10">
      <div className="p-6 flex items-center gap-3 border-b border-white/10">
        <img src="/logo.gif" alt="OHBump Logo" className="w-10 h-10 rounded-full ring-2 ring-primary/50" />
        <span className="font-display font-bold text-2xl text-rainbow tracking-wide">
          OHBump
        </span>
      </div>

      {/* Login Section */}
      <div className="px-4 pt-4 pb-2">
        {isLoggedIn ? (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full bg-black" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">OHBump User</p>
              <p className="text-xs text-muted-foreground truncate">Premium Member</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white" onClick={handleLogout} title="Logout">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <Button 
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#5865F2]/20"
          >
            {isLoggingIn ? (
               <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            ) : (
               <div className="mr-2">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 00-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                 </svg>
               </div>
            )}
            {isLoggingIn ? "Connecting..." : "Login with Discord"}
          </Button>
        )}
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group",
                    isActive
                      ? "bg-primary/20 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-primary/20"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", isActive && "text-primary")} />
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-white/10 space-y-2">
        <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Support
        </div>
        <a 
          href="mailto:faybuilder.id@gmail.com"
          className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
          data-testid="link-email-support"
        >
          <Mail className="w-4 h-4" />
          <span>Email Support</span>
        </a>
        <a 
          href="https://discord.gg/WgaAFQQQFP"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
          data-testid="link-support-server"
        >
          <LifeBuoy className="w-4 h-4" />
          <span>Support Server</span>
        </a>

        <div className="pt-4 mt-2 border-t border-white/5 space-y-1">
          {footerItems.map((item) => (
             <Link key={item.href} href={item.href}>
               <div className="px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid={`link-${item.label.toLowerCase().replace(/ /g, '-')}`}>
                 {item.label}
               </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[url('/bg-grid.svg')] bg-fixed">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 fixed inset-y-0 z-50">
        <NavContent />
      </aside>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center gap-2">
          <img src="/logo.gif" alt="OHBump Logo" className="w-8 h-8 rounded-full" />
          <span className="font-display font-bold text-xl text-rainbow">OHBump</span>
        </div>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white" data-testid="button-mobile-menu">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-background border-r border-white/10 w-72">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-4 md:p-8 pt-20 md:pt-8 pb-20 md:pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 right-0 left-0 md:left-72 bg-black/40 backdrop-blur-md border-t border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center md:text-right">
          <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            OHBump® ©2025 - 2030
          </p>
        </div>
      </footer>
    </div>
  );
}
