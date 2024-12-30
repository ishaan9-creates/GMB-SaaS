"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generatePost } from "@/lib/ai";
import { Image, Loader2, RefreshCw } from "lucide-react";
import { useState } from "react";

export function PostGenerator() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState("");
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const generated = await generatePost();
      setPost(generated);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate post. Please try again.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handlePublish = () => {
    toast({
      title: "Post Published",
      description: "Your post has been published to Google My Business.",
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Generate New Post</h2>
          <Button
            variant="outline"
            size="icon"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Generated Content</Label>
          <Textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Click generate to create a new post..."
            className="h-40"
          />
        </div>

        <div className="space-y-2">
          <Label>Preview Image</Label>
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <Image className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-500">
              Generated image will appear here
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setPost("")}>
            Clear
          </Button>
          <Button onClick={handlePublish} disabled={!post}>
            Publish to GMB
          </Button>
        </div>
      </div>
    </Card>
  );
}