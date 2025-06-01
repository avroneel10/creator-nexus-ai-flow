
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, FileText, Shield, TrendingUp, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Admin = () => {
  const systemStats = [
    { title: "Total Users", value: "2,847", icon: Users, change: "+5.2%" },
    { title: "Active Campaigns", value: "156", icon: BarChart3, change: "+12.1%" },
    { title: "Pending Approvals", value: "23", icon: FileText, change: "+2.3%" },
    { title: "System Health", value: "99.9%", icon: Shield, change: "+0.1%" },
  ];

  const recentActivity = [
    { action: "New creator registered", user: "Emma Rodriguez", time: "2 minutes ago", type: "user" },
    { action: "Campaign approved", user: "Tech Corp", time: "5 minutes ago", type: "campaign" },
    { action: "Contract signed", user: "Sarah Chen", time: "12 minutes ago", type: "contract" },
    { action: "Payment processed", user: "Marcus Johnson", time: "18 minutes ago", type: "payment" },
    { action: "Data sync completed", user: "System", time: "25 minutes ago", type: "system" },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user": return <Users className="w-4 h-4" />;
      case "campaign": return <BarChart3 className="w-4 h-4" />;
      case "contract": return <FileText className="w-4 h-4" />;
      case "payment": return <TrendingUp className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "user": return "bg-blue-100 text-blue-600";
      case "campaign": return "bg-green-100 text-green-600";
      case "contract": return "bg-purple-100 text-purple-600";
      case "payment": return "bg-orange-100 text-orange-600";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-slate-600">Monitor and manage platform operations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
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
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest platform events and user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-slate-600">{activity.user}</p>
                      </div>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                  Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="font-medium text-sm text-yellow-800">Payment Delayed</p>
                    <p className="text-xs text-yellow-600">Tech Corp campaign payment overdue</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-medium text-sm text-red-800">High Traffic</p>
                    <p className="text-xs text-red-600">Server load at 85%, consider scaling</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="font-medium text-sm text-blue-800">New Feature</p>
                    <p className="text-xs text-blue-600">AI matching algorithm updated</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  Manage Users
                </Button>
                <Button className="w-full" variant="outline">
                  Review Campaigns
                </Button>
                <Button className="w-full" variant="outline">
                  System Settings
                </Button>
                <Button className="w-full" variant="outline">
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
