import { Card } from "@/components/ui/card";
import { Eye, MessageSquare, ThumbsUp } from "lucide-react";

const topPosts = [
  {
    content: "Weekly health tips session announcement",
    views: "2.3K",
    likes: 156,
    comments: 23,
  },
  {
    content: "New pediatric services introduction",
    views: "1.8K",
    likes: 142,
    comments: 18,
  },
  {
    content: "Healthcare awareness campaign",
    views: "1.5K",
    likes: 98,
    comments: 15,
  },
];

export function TopPosts() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Top Performing Posts</h3>
      <div className="space-y-4">
        {topPosts.map((post, i) => (
          <div key={i} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
            <div className="flex-1">
              <p className="font-medium">{post.content}</p>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Eye className="mr-1 h-4 w-4" />
                  {post.views}
                </span>
                <span className="flex items-center">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  {post.likes}
                </span>
                <span className="flex items-center">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}