
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Users, BarChart3, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const creators = [
    {
      id: 1,
      name: "Sarah Chen",
      platform: "YouTube",
      followers: "2.5M",
      engagement: "4.2%",
      category: "Tech Reviews",
      location: "San Francisco, CA",
      avgViews: "150K",
      rate: "$5,000",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      platform: "Instagram",
      followers: "1.8M",
      engagement: "6.8%",
      category: "Fitness",
      location: "Los Angeles, CA",
      avgViews: "200K",
      rate: "$3,500",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      platform: "TikTok",
      followers: "4.2M",
      engagement: "8.1%",
      category: "Fashion",
      location: "New York, NY",
      avgViews: "500K",
      rate: "$7,500",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Kim",
      platform: "YouTube",
      followers: "3.1M",
      engagement: "5.4%",
      category: "Gaming",
      location: "Seattle, WA",
      avgViews: "300K",
      rate: "$6,000",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Discover Creators
          </h1>
          <p className="text-slate-600 text-lg">
            Find the perfect creators for your brand with AI-powered search and filtering
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Search creators by name, category, or platform..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Platform</label>
                  <div className="space-y-2">
                    {["YouTube", "Instagram", "TikTok", "Twitter"].map((platform) => (
                      <label key={platform} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {platform}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="space-y-2">
                    {["Tech", "Fashion", "Fitness", "Gaming", "Beauty"].map((category) => (
                      <label key={category} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {creators.map((creator) => (
                <Card key={creator.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {creator.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{creator.platform}</Badge>
                          <Badge variant="outline">{creator.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span>{creator.followers} followers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-slate-500" />
                        <span>{creator.engagement} engagement</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-600">
                      <p>📍 {creator.location}</p>
                      <p>👀 {creator.avgViews} avg views</p>
                      <p className="font-semibold text-green-600">💰 {creator.rate} per post</p>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
