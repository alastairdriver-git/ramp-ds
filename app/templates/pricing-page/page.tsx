"use client";

import { SectionBlock } from "@/components/ui/section-block";
import { CardBlock } from "@/components/ui/card-block";
import { FAQBlock } from "@/components/ui/faq-block";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Building2, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPageTemplate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionBlock
        padding="xl"
        background="gradient"
        alignment="center"
        titleSize="xl"
        fullBleed
        title="Simple, transparent pricing"
        subtitle="Choose the perfect plan for your business. No hidden fees, cancel anytime."
      />

      {/* Pricing Tiers */}
      <SectionBlock
        padding="lg"
        background="transparent"
        alignment="center"
      >
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold">Starter</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Perfect for small businesses getting started
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground">Billed monthly</p>
            </div>

            <Button className="w-full" variant="outline">
              Get Started
            </Button>

            <div className="space-y-3 pt-4 border-t border-border">
              <p className="text-sm font-semibold">Includes:</p>
              <ul className="space-y-2">
                {[
                  "Up to 3 sites",
                  "50 devices",
                  "Real-time monitoring",
                  "Basic analytics",
                  "Email support",
                  "7-day data retention",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="bg-primary text-primary-foreground border-2 border-primary rounded-lg p-6 space-y-6 relative shadow-lg">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
              Most Popular
            </Badge>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Professional</h3>
              </div>
              <p className="text-sm opacity-90">
                For growing businesses with multiple sites
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$149</span>
                <span className="opacity-90">/month</span>
              </div>
              <p className="text-xs opacity-75">Billed monthly or $1,428/year</p>
            </div>

            <Button className="w-full" variant="secondary">
              Start Free Trial
            </Button>

            <div className="space-y-3 pt-4 border-t border-primary-foreground/20">
              <p className="text-sm font-semibold">Everything in Starter, plus:</p>
              <ul className="space-y-2">
                {[
                  "Up to 20 sites",
                  "Unlimited devices",
                  "Advanced analytics",
                  "Custom reports",
                  "Priority support",
                  "90-day data retention",
                  "API access",
                  "Team collaboration",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold">Enterprise</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                For large organizations with custom needs
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-4xl font-bold">Custom</div>
              <p className="text-xs text-muted-foreground">Tailored to your requirements</p>
            </div>

            <Button className="w-full" variant="default">
              Contact Sales
            </Button>

            <div className="space-y-3 pt-4 border-t border-border">
              <p className="text-sm font-semibold">Everything in Professional, plus:</p>
              <ul className="space-y-2">
                {[
                  "Unlimited sites",
                  "Unlimited devices",
                  "Custom integrations",
                  "Dedicated support",
                  "SLA guarantees",
                  "Unlimited data retention",
                  "White-label options",
                  "Custom training",
                  "On-premise deployment",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Feature Comparison */}
      <SectionBlock
        padding="lg"
        background="muted"
        alignment="center"
        title="Compare plans"
        subtitle="Find the right fit for your organization"
      >
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold">Starter</th>
                <th className="text-center py-4 px-4 font-semibold bg-primary/5">Professional</th>
                <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Sites", starter: "3", pro: "20", enterprise: "Unlimited" },
                { feature: "Devices", starter: "50", pro: "Unlimited", enterprise: "Unlimited" },
                { feature: "Data Retention", starter: "7 days", pro: "90 days", enterprise: "Unlimited" },
                { feature: "API Access", starter: "—", pro: "✓", enterprise: "✓" },
                { feature: "Custom Reports", starter: "—", pro: "✓", enterprise: "✓" },
                { feature: "Priority Support", starter: "—", pro: "✓", enterprise: "✓" },
                { feature: "SLA", starter: "—", pro: "—", enterprise: "99.9%" },
                { feature: "White-label", starter: "—", pro: "—", enterprise: "✓" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 px-4 text-sm">{row.feature}</td>
                  <td className="py-3 px-4 text-sm text-center text-muted-foreground">{row.starter}</td>
                  <td className="py-3 px-4 text-sm text-center bg-primary/5 font-medium">{row.pro}</td>
                  <td className="py-3 px-4 text-sm text-center text-muted-foreground">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* FAQs */}
      <SectionBlock
        padding="lg"
        background="transparent"
        alignment="center"
        title="Frequently asked questions"
        subtitle="Everything you need to know about our pricing"
      >
        <FAQBlock
          maxWidth="narrow"
          items={[
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers for Enterprise plans. All payments are processed securely through Stripe.",
            },
            {
              question: "Is there a free trial?",
              answer: "Yes! We offer a 14-day free trial on all Professional and Enterprise plans. No credit card required to start.",
            },
            {
              question: "What happens to my data if I cancel?",
              answer: "You can export all your data before canceling. We retain your data for 30 days after cancellation in case you change your mind, then it's permanently deleted.",
            },
            {
              question: "Do you offer discounts for annual billing?",
              answer: "Yes! Save 20% by paying annually on Professional and Enterprise plans. That's like getting 2+ months free.",
            },
            {
              question: "Can I add more sites or devices to my plan?",
              answer: "For Starter and Professional plans, you can upgrade to the next tier. Enterprise customers can add sites and devices with custom pricing.",
            },
          ]}
        />
      </SectionBlock>

      {/* CTA Section */}
      <SectionBlock
        padding="xl"
        background="primary"
        alignment="center"
        fullBleed
        title="Start saving on energy costs today"
        subtitle="Join thousands of businesses optimizing their energy management"
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
