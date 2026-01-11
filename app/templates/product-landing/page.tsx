"use client";

import { SectionBlock } from "@/components/ui/section-block";
import { MediaBlock } from "@/components/ui/media-block";
import { CardBlock } from "@/components/ui/card-block";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, BarChart3, Globe2, ArrowRight, Star, Quote } from "lucide-react";
import Link from "next/link";

export default function ProductLandingTemplate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionBlock
        padding="xl"
        background="gradient"
        alignment="center"
        titleSize="xl"
        fullBleed
        title="Transform Your Energy Management"
        subtitle="Monitor, optimize, and control your energy systems with our cutting-edge platform. Join thousands of businesses reducing costs and carbon footprint."
        cta1={{ text: "Start Free Trial", variant: "default", href: "#" }}
        cta2={{ text: "Watch Demo", variant: "outline", href: "#" }}
      />

      {/* Features Section */}
      <SectionBlock
        padding="lg"
        background="transparent"
        alignment="center"
        title="Everything you need to succeed"
        subtitle="Powerful features designed for modern energy management"
      >
        <CardBlock
          layout="grid"
          columns={3}
          items={[
            {
              icon: <Zap className="h-5 w-5 text-primary" />,
              title: "Real-time Monitoring",
              description: "Track energy consumption, production, and storage across all your sites in real-time.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-primary" />,
              title: "Advanced Analytics",
              description: "Gain insights with powerful analytics and customizable reports.",
            },
            {
              icon: <Shield className="h-5 w-5 text-primary" />,
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance with industry standards.",
            },
            {
              icon: <Globe2 className="h-5 w-5 text-primary" />,
              title: "Multi-site Management",
              description: "Manage unlimited sites and devices from a single dashboard.",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary" />,
              title: "Smart Automation",
              description: "Automate energy optimization with AI-powered recommendations.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-primary" />,
              title: "Custom Integrations",
              description: "Connect with your existing tools via our comprehensive API.",
            },
          ]}
        />
      </SectionBlock>

      {/* Product Screenshot */}
      <SectionBlock
        padding="lg"
        background="muted"
        alignment="center"
        title="Beautiful, intuitive interface"
        subtitle="Designed for efficiency and ease of use"
      >
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg shadow-2xl flex items-center justify-center border border-border">
            <div className="text-center space-y-2">
              <BarChart3 className="h-16 w-16 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Product Screenshot</p>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Testimonials Section */}
      <SectionBlock
        padding="lg"
        background="transparent"
        alignment="center"
        title="Trusted by industry leaders"
        subtitle="See what our customers have to say"
      >
        <CardBlock
          layout="grid"
          columns={3}
          items={[
            {
              icon: <Quote className="h-5 w-5 text-primary" />,
              title: "Game-changing platform",
              description: "\"This platform has completely transformed how we manage our energy portfolio. The insights are invaluable.\"",
              footer: (
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Energy Manager, Tech Corp</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              ),
            },
            {
              icon: <Quote className="h-5 w-5 text-primary" />,
              title: "Incredible ROI",
              description: "\"We reduced our energy costs by 30% in the first quarter. The platform paid for itself immediately.\"",
              footer: (
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">CFO, Green Solutions</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              ),
            },
            {
              icon: <Quote className="h-5 w-5 text-primary" />,
              title: "Outstanding support",
              description: "\"The team's support has been exceptional. They helped us get up and running in days, not weeks.\"",
              footer: (
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Emma Williams</p>
                  <p className="text-xs text-muted-foreground">Operations Lead, EcoPlus</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </SectionBlock>

      {/* Stats Section */}
      <SectionBlock
        padding="lg"
        background="card"
        alignment="center"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "10k+", label: "Active Users" },
            { value: "500+", label: "Enterprise Clients" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "30%", label: "Avg. Cost Savings" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* CTA Section */}
      <SectionBlock
        padding="xl"
        background="primary"
        alignment="center"
        fullBleed
        title="Ready to transform your energy management?"
        subtitle="Join thousands of businesses already saving costs and reducing their carbon footprint"
        cta1={{ text: "Start Free Trial", variant: "secondary", href: "#" }}
        cta2={{ text: "Contact Sales", variant: "outline", href: "#" }}
      />

      {/* Back to Templates */}
      <div className="py-8 text-center">
        <Link href="/templates">
          <Button variant="ghost" size="sm">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Templates
          </Button>
        </Link>
      </div>
    </div>
  );
}
