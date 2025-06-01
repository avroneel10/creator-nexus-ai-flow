
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          CreatorConnect
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/discover" className="text-slate-600 hover:text-slate-900 transition-colors">
            Discover
          </Link>
          <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition-colors">
            Dashboard
          </Link>
          <Link to="/campaigns" className="text-slate-600 hover:text-slate-900 transition-colors">
            Campaigns
          </Link>
          <Link to="/admin" className="text-slate-600 hover:text-slate-900 transition-colors">
            Admin
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
