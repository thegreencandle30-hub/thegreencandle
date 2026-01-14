import { BackgroundPaths } from "@/components/ui/background-paths";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Shield, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Hero Section */}
      <BackgroundPaths title="The Green Candle" />

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-white">
              Powerful Features for Traders
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 md:text-lg">
              Everything you need to stay ahead in the fast-paced world of trading.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-black dark:text-white" />}
              title="Real-time Analytics"
              description="Get instant updates on market movements with our low-latency data engine."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-black dark:text-white" />}
              title="Secure Trading"
              description="Your data and assets are protected by industry-leading security protocols."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-black dark:text-white" />}
              title="Fast Execution"
              description="Execute trades in milliseconds with our optimized infrastructure."
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-black dark:text-white" />}
              title="Advanced Insights"
              description="Leverage AI-driven insights to make better informed trading decisions."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-neutral-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
                At The Green Candle, we believe that every trader deserves access to professional-grade tools and insights. Our platform is built by traders, for traders, with a focus on speed, accuracy, and ease of use.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Whether you&apos;re just starting out or you&apos;re a seasoned professional, we provide the data and analytics you need to navigate the markets with confidence.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl group">
              <Image
                src="/mission.png"
                alt="Our Mission - Advanced Trading Workspace"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">Professional instruments for precision trading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-neutral-900 py-24 text-white dark:bg-white dark:text-black">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] opacity-80 md:text-lg">
            Join thousands of traders who are already using The Green Candle to master the markets.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#">
              <Button size="lg" variant="secondary" className="px-8">
                Get Started Now
              </Button>
            </Link>
            <Link href="mailto:contact@thegreencandle.com">
              <Button size="lg" variant="outline" className="px-8 text-white border-white/20 hover:bg-white/10 dark:border-black/20 dark:hover:bg-black/70">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}
