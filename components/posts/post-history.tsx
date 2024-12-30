"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Clock, MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

interface Post {
  id: string;
  content: string;
  date: string;
  status: "published" | "scheduled";
}

const DUMMY_POSTS: Post[] = [
  {
    id: "1",
    content: "Join us for our weekly health tips session every Wednesday...",
    date: "2024-03-20",
    status: "published",
  },
  {
    id: "2",
    content: "Introducing our new pediatric care services...",
    date: "2024-03-25",
    status: "scheduled",
  },
];

export function PostHistory() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "The post has been removed from your history.",
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Post History</h2>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="font-medium">{post.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{post.status}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(post.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}