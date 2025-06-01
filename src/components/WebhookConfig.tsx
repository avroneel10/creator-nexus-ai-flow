import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Webhook, Plus, Trash2, TestTube } from "lucide-react";

const WebhookConfig = () => {
  const { toast } = useToast();
  const [webhooks, setWebhooks] = useState([
    {
      id: 1,
      name: "Campaign Created",
      url: "https://hooks.zapier.com/hooks/catch/123456/abcdef/",
      events: ["campaign.created", "campaign.updated"],
      status: "active"
    }
  ]);
  const [newWebhook, setNewWebhook] = useState({
    name: "",
    url: "",
    events: [] as string[]
  });
  const [isLoading, setIsLoading] = useState(false);

  const availableEvents = [
    "campaign.created",
    "campaign.updated", 
    "creator.applied",
    "contract.signed",
    "payment.completed"
  ];

  const handleTestWebhook = async (webhookUrl: string) => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a valid webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Testing webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          test: true,
          timestamp: new Date().toISOString(),
          event: "webhook.test",
          data: {
            message: "This is a test webhook from CreatorConnect"
          }
        }),
      });

      toast({
        title: "Test Sent",
        description: "Test webhook sent successfully. Check your endpoint to confirm receipt.",
      });
    } catch (error) {
      console.error("Error testing webhook:", error);
      toast({
        title: "Error",
        description: "Failed to send test webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddWebhook = () => {
    if (!newWebhook.name || !newWebhook.url) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const webhook = {
      id: Date.now(),
      ...newWebhook,
      status: "active"
    };

    setWebhooks([...webhooks, webhook]);
    setNewWebhook({ name: "", url: "", events: [] });
    
    toast({
      title: "Success",
      description: "Webhook added successfully",
    });
  };

  const handleDeleteWebhook = (id: number) => {
    setWebhooks(webhooks.filter(w => w.id !== id));
    toast({
      title: "Success",
      description: "Webhook deleted successfully",
    });
  };

  const toggleEvent = (event: string) => {
    const events = newWebhook.events.includes(event)
      ? newWebhook.events.filter(e => e !== event)
      : [...newWebhook.events, event];
    
    setNewWebhook({ ...newWebhook, events });
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Webhook className="w-5 h-5 mr-2" />
            Webhook Configuration
          </CardTitle>
          <CardDescription>
            Configure webhooks to receive real-time notifications about platform events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add New Webhook */}
          <div className="p-4 border rounded-lg bg-slate-50">
            <h3 className="font-medium mb-4">Add New Webhook</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="webhook-name">Webhook Name</Label>
                <Input
                  id="webhook-name"
                  placeholder="e.g., Zapier Integration"
                  value={newWebhook.name}
                  onChange={(e) => setNewWebhook({ ...newWebhook, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={newWebhook.url}
                  onChange={(e) => setNewWebhook({ ...newWebhook, url: e.target.value })}
                />
              </div>
            </div>
            
            <div className="mt-4">
              <Label>Events to Subscribe</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {availableEvents.map((event) => (
                  <Badge
                    key={event}
                    variant={newWebhook.events.includes(event) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleEvent(event)}
                  >
                    {event}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 mt-4">
              <Button onClick={handleAddWebhook}>
                <Plus className="w-4 h-4 mr-2" />
                Add Webhook
              </Button>
              {newWebhook.url && (
                <Button 
                  variant="outline" 
                  onClick={() => handleTestWebhook(newWebhook.url)}
                  disabled={isLoading}
                >
                  <TestTube className="w-4 h-4 mr-2" />
                  Test Webhook
                </Button>
              )}
            </div>
          </div>

          {/* Existing Webhooks */}
          <div>
            <h3 className="font-medium mb-4">Configured Webhooks</h3>
            <div className="space-y-3">
              {webhooks.map((webhook) => (
                <div key={webhook.id} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium">{webhook.name}</h4>
                        <Badge variant={webhook.status === "active" ? "default" : "secondary"}>
                          {webhook.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">{webhook.url}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {webhook.events.map((event) => (
                          <Badge key={event} variant="outline" className="text-xs">
                            {event}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleTestWebhook(webhook.url)}
                        disabled={isLoading}
                      >
                        <TestTube className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteWebhook(webhook.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WebhookConfig;
