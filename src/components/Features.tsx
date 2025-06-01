
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, FileText, CreditCard, BarChart3, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Creator Discovery Engine",
      description: "AI-powered search with advanced filters across all major platforms. Find the perfect creators for your brand.",
    },
    {
      icon: Users,
      title: "AI Outreach & Negotiation",
      description: "Automated outreach in multiple languages with intelligent negotiation capabilities and CRM integration.",
    },
    {
      icon: FileText,
      title: "Contract Automation",
      description: "Auto-generated contracts with e-signature integration and real-time status tracking.",
    },
    {
      icon: CreditCard,
      title: "Smart Payments",
      description: "Milestone-based payouts with integrated invoicing and comprehensive payment dashboards.",
    },
    {
      icon: BarChart3,
      title: "Campaign Analytics",
      description: "Real-time performance tracking with automated ROI reports and engagement insights.",
    },
    {
      icon: Shield,
      title: "Admin Controls",
      description: "Comprehensive admin panel with role-based access and data management tools.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          From discovery to payment, our platform handles every aspect of creator partnerships
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
