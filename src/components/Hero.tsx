
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Connect Brands with Perfect Creators
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          AI-powered creator discovery, automated outreach, and end-to-end campaign management. 
          Scale your influencer marketing with intelligent automation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/discover">Start Discovering</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/dashboard">View Demo</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Search className="w-5 h-5" />
            <span>AI-Powered Search</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Users className="w-5 h-5" />
            <span>10K+ Creators</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <BarChart3 className="w-5 h-5" />
            <span>Real-time Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
