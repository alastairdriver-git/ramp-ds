import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FAQItem[];
  type?: "single" | "multiple";
  defaultOpen?: string | string[];
  maxWidth?: "default" | "wide" | "narrow" | "full";
}

const maxWidthClasses = {
  default: "max-w-3xl",
  wide: "max-w-5xl",
  narrow: "max-w-2xl",
  full: "max-w-none",
};

const FAQBlock = React.forwardRef<HTMLDivElement, FAQBlockProps>(
  (
    {
      className,
      items,
      type = "single",
      defaultOpen,
      maxWidth = "default",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("w-full mx-auto", maxWidthClasses[maxWidth], className)}
        {...props}
      >
        <Accordion
          type={type}
          collapsible={type === "single"}
          defaultValue={defaultOpen}
          className="w-full"
        >
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
);

FAQBlock.displayName = "FAQBlock";

export { FAQBlock };
