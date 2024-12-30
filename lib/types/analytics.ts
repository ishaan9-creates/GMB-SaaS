export interface Metric {
  label: string;
  value: string;
  change: string;
  icon: any;
}

export interface Post {
  content: string;
  views: string;
  likes: number;
  comments: number;
}

export interface ChartData {
  date: string;
  views: number;
  engagement: number;
}