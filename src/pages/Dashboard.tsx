
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, FileText, CreditCard, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const stats = [
    { title: "Active Campaigns", value: "12", icon: BarChart3, change: "+2.1%" },
    { title: "Total Creators", value: "45", icon: Users, change: "+5.4%" },
    { title: "Pending Contracts", value: "8", icon: FileText, change: "+1.2%" },
    { title: "Total Spend", value: "$24.5K", icon: CreditCard, change: "+12.3%" },
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: "Summer Fashion Collection",
      creators: 8,
      status: "Active",
      budget: "$15,000",
      performance: "92%",
    },
    {
      id: 2,
      name: "Tech Product Launch",
      creators: 5,
      status: "Planning",
      budget: "$12,000",
      performance: "-",
    },
    {
      id: 3,
      name: "Fitness Challenge",
      creators: 12,
      status: "Completed",
      budget: "$8,500",
      performance: "87%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-slate-600">Welcome back! Here's what's happening with your campaigns.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Campaigns
                  <Button asChild>
                    <Link to="/campaigns">View All</Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{campaign.name}</h4>
                        <p className="text-sm text-slate-600">{campaign.creators} creators • {campaign.budget}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={campaign.status === "Active" ? "default" : 
                                  campaign.status === "Completed" ? "secondary" : "outline"}
                        >
                          {campaign.status}
                        </Badge>
                        {campaign.performance !== "-" && (
                          <span className="text-sm font-medium text-green-600">
                            {campaign.performance}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-sm">Contract Review</p>
                    <p className="text-xs text-slate-600">Sarah Chen - Tech Review</p>
                    <p className="text-xs text-blue-600">Tomorrow, 2:00 PM</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-sm">Campaign Launch</p>
                    <p className="text-xs text-slate-600">Summer Fashion Collection</p>
                    <p className="text-xs text-purple-600">Friday, 9:00 AM</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-sm">Payment Due</p>
                    <p className="text-xs text-slate-600">Marcus Johnson - Fitness</p>
                    <p className="text-xs text-green-600">Next Monday</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link to="/discover">Find Creators</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/campaigns">Create Campaign</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
