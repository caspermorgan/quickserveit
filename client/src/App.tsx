import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import InstituteServices from "@/pages/InstituteServices";
import CreativeStudio from "@/pages/CreativeStudio";
import Portfolio from "@/pages/Portfolio";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Disclaimer from "@/pages/Disclaimer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/institute-services" component={InstituteServices} />
      <Route path="/creative-studio" component={CreativeStudio} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
