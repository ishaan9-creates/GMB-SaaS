"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function PostScheduler() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("09:00");
  const { toast } = useToast();

  const handleSchedule = () => {
    toast({
      title: "Post Scheduled",
      description: `Your post has been scheduled for ${date?.toLocaleDateString()} at ${time}`,
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Schedule Posts</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-2">
          <Label>Select Time</Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 24 }).map((_, i) => (
                <SelectItem key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                  {`${i.toString().padStart(2, "0")}:00`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleSchedule} disabled={!date}>
          Schedule Post
        </Button>
      </div>
    </Card>
  );
}