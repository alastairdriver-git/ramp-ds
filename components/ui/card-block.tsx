"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardBlockVariants = cva("w-full", {
  variants: {
    layout: {
      single: "max-w-md mx-auto",
      carousel: "flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide",
      grid: "grid gap-4",
      bento: "grid gap-4",
      sideBySide: "grid gap-4 md:grid-cols-2",
    },
    columns: {
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
    },
  },
  defaultVariants: {
    layout: "grid",
    columns: 3,
  },
});

export interface CardItem {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  size?: "sm" | "md" | "lg"; // For bento layout
}

export interface CardBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardBlockVariants> {
  items: CardItem[];
}

const bentoSizeClasses = {
  sm: "md:col-span-1",
  md: "md:col-span-2",
  lg: "md:col-span-3",
};

// Intelligent bento sizing
const getBentoCardSize = (index: number, totalItems: number): string => {
  if (totalItems <= 2) return "md:col-span-1";
  if (totalItems === 3) {
    if (index === 0) return "md:col-span-2";
    return "md:col-span-1";
  }
  if (totalItems >= 4) {
    if (index === 0) return "md:col-span-2";
    if (index === 3) return "md:col-span-2";
    return "md:col-span-1";
  }
  return "md:col-span-1";
};

const CardBlock = React.forwardRef<HTMLDivElement, CardBlockProps>(
  ({ className, layout, columns, items, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Carousel navigation
    const scrollToIndex = (index: number) => {
      if (!scrollRef.current) return;
      const cardElement = scrollRef.current.children[index] as HTMLElement;
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        setCurrentIndex(index);
      }
    };

    const handlePrev = () => {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      scrollToIndex(newIndex);
    };

    const handleNext = () => {
      const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      scrollToIndex(newIndex);
    };

    const renderCard = (item: CardItem, index: number) => {
      const bentoSizeClass = layout === "bento"
        ? getBentoCardSize(index, items.length)
        : "";

      return (
        <Card
          key={index}
          className={cn(
            layout === "carousel" && "flex-none w-[300px] md:w-[350px]",
            bentoSizeClass
          )}
        >
          <CardHeader>
            {item.icon && (
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                {item.icon}
              </div>
            )}
            <CardTitle>{item.title}</CardTitle>
            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}
          </CardHeader>
          {item.content && <CardContent>{item.content}</CardContent>}
          {(item.footer || item.cta) && (
            <CardFooter>
              {item.footer || (
                item.cta && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={item.cta.onClick}
                    asChild={!!item.cta.href}
                  >
                    {item.cta.href ? (
                      <a href={item.cta.href}>{item.cta.text}</a>
                    ) : (
                      item.cta.text
                    )}
                  </Button>
                )
              )}
            </CardFooter>
          )}
        </Card>
      );
    };

    // Carousel layout
    if (layout === "carousel") {
      return (
        <div ref={ref} className={cn("relative", className)} {...props}>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {items.map((item, index) => (
              <div key={index} className="snap-start">
                {renderCard(item, index)}
              </div>
            ))}
          </div>

          {items.length > 1 && (
            <>
              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm z-10"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm z-10"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      );
    }

    // Grid/Bento/SideBySide/Single layouts
    const containerClasses = cn(
      cardBlockVariants({ layout }),
      layout === "grid" && columns && `md:grid-cols-${columns}`,
      layout === "bento" && "md:grid-cols-3",
      className
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {items.map((item, index) => renderCard(item, index))}
      </div>
    );
  }
);

CardBlock.displayName = "CardBlock";

export { CardBlock, cardBlockVariants };
