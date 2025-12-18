import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout";
import Dashboard from "@/pages/dashboard";
import Node from "@/pages/node";
import Docs from "@/pages/docs";
import Commands from "@/pages/commands";
import Setup from "@/pages/setup";
import Premium from "@/pages/premium";
import Status from "@/pages/status";
import Ratings from "@/pages/ratings";
import Suggestions from "@/pages/suggestions";
import About from "@/pages/about";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Dashboard /></Layout>} />
      <Route path="/setup" component={() => <Layout><Setup /></Layout>} />
      <Route path="/premium" component={() => <Layout><Premium /></Layout>} />
      <Route path="/status" component={() => <Layout><Status /></Layout>} />
      <Route path="/ratings" component={() => <Layout><Ratings /></Layout>} />
      <Route path="/suggestions" component={() => <Layout><Suggestions /></Layout>} />
      <Route path="/node" component={() => <Layout><Node /></Layout>} />
      <Route path="/docs" component={() => <Layout><Docs /></Layout>} />
      <Route path="/commands" component={() => <Layout><Commands /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/terms" component={() => <Layout><Terms /></Layout>} />
      <Route path="/privacy" component={() => <Layout><Privacy /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
