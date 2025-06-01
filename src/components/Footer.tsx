
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CreatorConnect
            </h3>
            <p className="text-slate-400">
              The future of creator-brand partnerships, powered by AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/discover" className="block text-slate-400 hover:text-white transition-colors">
                Discover Creators
              </Link>
              <Link to="/dashboard" className="block text-slate-400 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/campaigns" className="block text-slate-400 hover:text-white transition-colors">
                Campaigns
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 CreatorConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
