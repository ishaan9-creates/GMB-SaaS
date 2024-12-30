import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Building2, Calendar, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-primary font-semibold text-xl">
            <Building2 className="h-6 w-6" />
            <span>GMB AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 ml-3.5 mr-3.5">
            Automate Your Healthcare Practice's Social Presence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Use AI to generate engaging Google My Business posts and grow your practice's online visibility.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Content</h3>
                <p className="text-gray-600">
                  Generate engaging posts tailored to your healthcare practice automatically.
                </p>
              </Card>
              <Card className="p-6">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
                <p className="text-gray-600">
                  Schedule posts in advance and maintain a consistent online presence.
                </p>
              </Card>
              <Card className="p-6">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">GMB Integration</h3>
                <p className="text-gray-600">
                  Seamlessly publish content to your Google My Business profile.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 HealthPost AI. A product by Obuliq.</p>
        </div>
      </footer>
    </div>
  );
}