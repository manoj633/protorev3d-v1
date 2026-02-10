import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ComingSoon from "@/pages/ComingSoon";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import ProductDesignDevelopment from "./pages/services/ProductDesignDevelopment";
import ReverseEngineering from "./pages/services/ReverseEngineering";
import FixtureToolingDesign from "./pages/services/FixtureToolingDesign";
import TwoDToThreeDCNC from "./pages/services/TwoDToThreeDCNC";
import GOMInspectionQuality from "./pages/services/GOMInspectionQuality";
import ThreeDPrintingPrototyping from "./pages/services/ThreeDPrintingPrototyping";

function Router() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <Switch>
      <Route path="/" component={ComingSoon} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route
        path="/services/product-design-development"
        component={ProductDesignDevelopment}
      />
      <Route
        path="/services/reverse-engineering"
        component={ReverseEngineering}
      />
      <Route
        path="/services/fixture-tooling-design"
        component={FixtureToolingDesign}
      />
      <Route path="/services/2d-to-3d-cnc" component={TwoDToThreeDCNC} />
      <Route
        path="services/gom-inspection-quality"
        component={GOMInspectionQuality}
      />
      <Route
        path="services/3d-printing-prototyping"
        component={ThreeDPrintingPrototyping}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
        <Navigation />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
