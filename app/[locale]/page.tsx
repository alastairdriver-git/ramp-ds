"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Map, BarChart3, Table2, Activity, Cpu, Coins, Palette, Code, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SitesOverviewExample } from "@/components/examples/sites-overview";
import { AnalyticsDashboardExample } from "@/components/examples/analytics-dashboard";
import { FleetDashboardExample } from "@/components/examples/fleet-dashboard";
import { EnergyMonitorExample } from "@/components/examples/energy-monitor";
import { EMSDashboardExample } from "@/components/examples/ems-dashboard";
import { SavingsRewardsExample } from "@/components/examples/savings-rewards";

// Toggle to show/hide the dashboard demo section
// Set to true to show on production, false to hide (will still show on localhost)
const SHOW_DASHBOARD_DEMO = false;

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // Show demo on localhost regardless of toggle, or if toggle is true
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    setShowDemo(SHOW_DASHBOARD_DEMO || isLocalhost);
  }, []);
  const resources = [
    {
      icon: Code,
      title: "50+ Components",
      description: "Production-ready React components built with Radix UI and Tailwind CSS.",
      href: "/components",
    },
    {
      icon: Palette,
      title: "Design Tokens",
      description: "Consistent colors, typography, and spacing across your application.",
      href: "/docs/tokens/colors",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and examples for every component.",
      href: "/docs",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="absolute inset-x-0 bottom-0 h-32 hero-gradient" />

          <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 pb-16 pt-24 md:pt-32 md:pb-24 text-center px-4 md:px-8">
            <Badge variant="outline" className="border-primary/50">
              <span className="mr-2">🎨</span>
              Design System
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Build beautiful interfaces with{" "}
              <span className="text-primary">Ramp</span>
            </h1>

            <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
              A comprehensive design system with 50+ React components, design tokens,
              and patterns. Built with Radix UI primitives and styled with Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/components">
                  Browse Components
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Demo - only shown on localhost or if SHOW_DASHBOARD_DEMO is true */}
        {showDemo && (
          <section className="border-t bg-muted/30">
            <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Interactive Examples</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  See the components in action
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore interactive dashboard examples built entirely with Ramp components.
                </p>
              </div>

              <Tabs defaultValue="sites" className="w-full">
                <div className="flex items-center justify-center mb-6 overflow-x-auto">
                  <TabsList className="h-10">
                    <TabsTrigger value="sites" className="gap-2">
                      <Map className="hidden sm:block h-4 w-4" />
                      <span className="hidden sm:inline">Sites</span>
                      <span className="sm:hidden">Sites</span>
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="gap-2">
                      <BarChart3 className="hidden sm:block h-4 w-4" />
                      <span className="hidden sm:inline">Analytics</span>
                      <span className="sm:hidden">Charts</span>
                    </TabsTrigger>
                    <TabsTrigger value="fleet" className="gap-2">
                      <Table2 className="hidden sm:block h-4 w-4" />
                      <span className="hidden sm:inline">Fleet</span>
                      <span className="sm:hidden">Table</span>
                    </TabsTrigger>
                    <TabsTrigger value="monitor" className="gap-2">
                      <Activity className="hidden sm:block h-4 w-4" />
                      <span className="hidden sm:inline">Monitor</span>
                      <span className="sm:hidden">Monitor</span>
                    </TabsTrigger>
                    <TabsTrigger value="ems" className="gap-2">
                      <Cpu className="hidden sm:block h-4 w-4" />
                      <span className="hidden sm:inline">Automation</span>
                      <span className="sm:hidden">Auto</span>
                    </TabsTrigger>
                    <TabsTrigger value="savings" className="gap-2">
                      <Coins className="hidden sm:block h-4 w-4" />
                      <span className="hidden sm:inline">Savings</span>
                      <span className="sm:hidden">Save</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="sites" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
                  <SitesOverviewExample />
                </TabsContent>
                <TabsContent value="analytics" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
                  <AnalyticsDashboardExample />
                </TabsContent>
                <TabsContent value="fleet" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
                  <FleetDashboardExample />
                </TabsContent>
                <TabsContent value="monitor" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
                  <EnergyMonitorExample />
                </TabsContent>
                <TabsContent value="ems" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
                  <EMSDashboardExample />
                </TabsContent>
                <TabsContent value="savings" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
                  <SavingsRewardsExample />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* Resources */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Everything you need
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Components, tokens, and documentation to build consistent interfaces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Link key={resource.title} href={resource.href} className="block">
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {resource.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Quick Start
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get up and running in minutes.
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6 font-mono text-sm">
                <div className="text-muted-foreground mb-4"># Install the package</div>
                <pre className="text-foreground overflow-x-auto mb-6">
{`npm install @ramp-ds/ui`}
                </pre>

                <div className="text-muted-foreground mb-4"># Import and use components</div>
                <pre className="text-foreground overflow-x-auto">
{`import { Button, Card, Input } from "@ramp-ds/ui"
import "@ramp-ds/ui/styles.css"

export default function App() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </Card>
  )
}`}
                </pre>
              </div>

              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/docs/installation">
                    View full installation guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>Ramp Design System · Built with Radix UI and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
