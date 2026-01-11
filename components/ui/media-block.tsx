import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const mediaBlockVariants = cva("w-full", {
  variants: {
    layout: {
      single: "w-full",
      carousel: "flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide",
      grid: "grid gap-4",
      bento: "grid gap-4",
      sideBySide: "grid gap-4",
    },
    columns: {
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
    },
  },
  defaultVariants: {
    layout: "single",
  },
});

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  size?: "sm" | "md" | "lg" | "xl"; // For bento layout
}

export interface MediaBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mediaBlockVariants> {
  items: MediaItem[];
  rounded?: "none" | "sm" | "md" | "lg";
  showBorder?: boolean;
}

const aspectRatioClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

const bentoSizeClasses = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-2 md:row-span-1",
  lg: "md:col-span-2 md:row-span-2",
  xl: "md:col-span-3 md:row-span-2",
};

const MediaBlock = React.forwardRef<HTMLDivElement, MediaBlockProps>(
  (
    {
      className,
      layout,
      columns,
      items,
      rounded = "lg",
      showBorder = false,
      ...props
    },
    ref
  ) => {
    const roundedClass = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    }[rounded];

    const renderMedia = (item: MediaItem, index: number) => {
      const aspectClass = item.aspectRatio
        ? aspectRatioClasses[item.aspectRatio]
        : "aspect-video";
      const bentoSizeClass =
        layout === "bento" && item.size
          ? bentoSizeClasses[item.size]
          : "";

      const containerClasses = cn(
        "relative overflow-hidden bg-muted",
        roundedClass,
        showBorder && "border border-border",
        aspectClass,
        bentoSizeClass,
        layout === "carousel" && "flex-none w-[300px] md:w-[400px] snap-center"
      );

      if (item.type === "video") {
        return (
          <div key={index} className={containerClasses}>
            <video
              src={item.src}
              controls
              className="w-full h-full object-cover"
              aria-label={item.alt}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }

      return (
        <div key={index} className={containerClasses}>
          <img
            src={item.src}
            alt={item.alt || `Media ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      );
    };

    // Apply column classes for grid/sideBySide
    const containerClasses = cn(
      mediaBlockVariants({ layout }),
      layout === "grid" && columns && `md:grid-cols-${columns}`,
      layout === "sideBySide" && "md:grid-cols-2",
      layout === "bento" && "md:grid-cols-3 md:grid-rows-3",
      className
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {items.map((item, index) => renderMedia(item, index))}
      </div>
    );
  }
);

MediaBlock.displayName = "MediaBlock";

export { MediaBlock, mediaBlockVariants };
