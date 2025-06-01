
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, BarChart3, Users, Calendar, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";

const Campaigns = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: "Summer Fashion Collection",
      description: "Promoting our new summer line with fashion influencers",
      status: "Active",
      creators: 8,
      budget: 15000,
      spent: 12000,
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      performance: 92,
    },
    {
      id: 2,
      name: "Tech Product Launch",
      description: "Launching our revolutionary tech gadget",
      status: "Planning",
      creators: 5,
      budget: 12000,
      spent: 0,
      startDate: "2024-07-01",
      endDate: "2024-07-31",
      performance: null,
    },
    {
      id: 3,
      name: "Fitness Challenge",
      description: "30-day fitness challenge with health influencers",
      status: "Completed",
      creators: 12,
      budget: 8500,
      spent: 8200,
      startDate: "2024-05-01",
      endDate: "2024-05-31",
      performance: 87,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Completed": return "secondary";
      case "Planning": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Campaigns
            </h1>
            <p className="text-slate-600">Manage and track all your influencer campaigns</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-5 h-5 mr-2" />
                New Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Campaign Name</label>
                  <Input placeholder="Enter campaign name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea placeholder="Describe your campaign" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget</label>
                    <Input placeholder="$10,000" type="number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <Input placeholder="30 days" />
                  </div>
                </div>
                <Button className="w-full">Create Campaign</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{campaign.name}</CardTitle>
                    <CardDescription className="mt-2">{campaign.description}</CardDescription>
                  </div>
                  <Badge variant={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Creators</p>
                      <p className="font-semibold">{campaign.creators}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Budget</p>
                      <p className="font-semibold">${campaign.budget.toLocaleString()}</p>
                      <p className="text-xs text-slate-500">
                        ${campaign.spent.toLocaleString()} spent
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Duration</p>
                      <p className="font-semibold">{campaign.startDate}</p>
                      <p className="text-xs text-slate-500">to {campaign.endDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Performance</p>
                      <p className="font-semibold">
                        {campaign.performance ? `${campaign.performance}%` : "Not started"}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <Button size="sm">View Details</Button>
                  <Button size="sm" variant="outline">Edit Campaign</Button>
                  <Button size="sm" variant="outline">View Report</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
