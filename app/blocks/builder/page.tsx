"use client";

import { useState } from "react";
import { SectionBlock } from "@/components/ui/section-block";
import type { SectionBlockProps } from "@/components/ui/section-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { CopyButton } from "@/components/copy-button";
import {
  ArrowLeft,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Eye,
  Code,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PaddingVariant = "none" | "sm" | "md" | "lg" | "xl";
type BackgroundVariant =
  | "transparent"
  | "muted"
  | "card"
  | "gradient"
  | "primary";
type ContainerVariant = "default" | "wide" | "narrow" | "full";
type AlignmentVariant = "left" | "center" | "right";
type TitleSizeVariant = "sm" | "md" | "lg" | "xl";
type ContentType = "none" | "image" | "accordion" | "grid" | "custom";

interface BlockConfig {
  id: string;
  padding: PaddingVariant;
  background: BackgroundVariant;
  container: ContainerVariant;
  alignment: AlignmentVariant;
  titleSize: TitleSizeVariant;
  fullBleed: boolean;
  contentType: ContentType;
  title: string;
  subtitle: string;
  showTitle: boolean;
  showSubtitle: boolean;
  showCTA1: boolean;
  showCTA2: boolean;
}

export default function BlockBuilderPage() {
  const [blocks, setBlocks] = useState<BlockConfig[]>([
    {
      id: "1",
      padding: "xl",
      background: "transparent",
      container: "default",
      alignment: "center",
      titleSize: "xl",
      fullBleed: false,
      contentType: "none",
      title: "Welcome to Ramp",
      subtitle: "Modern energy management platform",
      showTitle: true,
      showSubtitle: true,
      showCTA1: true,
      showCTA2: true,
    },
  ]);
  const [selectedBlockId, setSelectedBlockId] = useState<string>("1");
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");

  const selectedBlock = blocks.find((b) => b.id === selectedBlockId);

  // Update selected block
  const updateBlock = (updates: Partial<BlockConfig>) => {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === selectedBlockId ? { ...b, ...updates } : b
      )
    );
  };

  // Add new block
  const addBlock = () => {
    const newBlock: BlockConfig = {
      id: Date.now().toString(),
      padding: "lg",
      background: "transparent",
      container: "default",
      alignment: "left",
      titleSize: "lg",
      fullBleed: false,
      contentType: "none",
      title: "New Section",
      subtitle: "Add your content here",
      showTitle: true,
      showSubtitle: true,
      showCTA1: false,
      showCTA2: false,
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  // Delete block
  const deleteBlock = (id: string) => {
    const newBlocks = blocks.filter((b) => b.id !== id);
    setBlocks(newBlocks);
    if (selectedBlockId === id && newBlocks.length > 0) {
      setSelectedBlockId(newBlocks[0].id);
    }
  };

  // Move block up/down
  const moveBlock = (id: string, direction: "up" | "down") => {
    const index = blocks.findIndex((b) => b.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === blocks.length - 1)
    ) {
      return;
    }
    const newBlocks = [...blocks];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[newIndex]] = [
      newBlocks[newIndex],
      newBlocks[index],
    ];
    setBlocks(newBlocks);
  };

  // Render content based on type
  const renderContent = (contentType: ContentType) => {
    switch (contentType) {
      case "image":
        return (
          <div className="mt-8 rounded-lg overflow-hidden border bg-muted/30">
            <div className="w-full aspect-[2/1] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-muted-foreground/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        );

      case "accordion":
        return (
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value="1">
              <AccordionTrigger>What is Ramp?</AccordionTrigger>
              <AccordionContent>
                Ramp is a comprehensive energy management platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Our platform integrates with your existing infrastructure.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );

      case "grid":
        return (
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {[
              { title: "Real-time", desc: "Track energy usage" },
              { title: "Smart AI", desc: "Cost reduction" },
              { title: "Integration", desc: "Connect systems" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-lg border bg-card space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded bg-primary/30" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        );

      case "custom":
        return (
          <div className="mt-8 p-8 rounded-lg border-2 border-dashed border-muted-foreground/20 text-center text-muted-foreground">
            <p className="text-sm">Custom content slot</p>
            <p className="text-xs mt-1">Add your own components here</p>
          </div>
        );

      default:
        return null;
    }
  };

  // Generate code for all blocks
  const generateCode = () => {
    return blocks
      .map((block) => {
        const props = [];
        if (block.padding !== "lg") props.push(`padding="${block.padding}"`);
        if (block.background !== "transparent")
          props.push(`background="${block.background}"`);
        if (block.container !== "default")
          props.push(`container="${block.container}"`);
        if (block.alignment !== "left")
          props.push(`alignment="${block.alignment}"`);
        if (block.titleSize !== "lg")
          props.push(`titleSize="${block.titleSize}"`);
        if (block.fullBleed) props.push(`fullBleed`);
        if (block.showTitle && block.title)
          props.push(`title="${block.title}"`);
        if (block.showSubtitle && block.subtitle)
          props.push(`subtitle="${block.subtitle}"`);
        if (block.showCTA1)
          props.push(`cta1={{ text: "Get Started", variant: "default" }}`);
        if (block.showCTA2)
          props.push(`cta2={{ text: "Learn More", variant: "outline" }}`);

        const propsString =
          props.length > 0 ? "\n  " + props.join("\n  ") + "\n" : "";
        const contentString =
          block.contentType !== "none"
            ? `\n  {/* Add your ${block.contentType} content */}\n`
            : "";

        return `<SectionBlock${propsString}>${contentString}</SectionBlock>`;
      })
      .join("\n\n");
  };

  if (!selectedBlock) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/blocks">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-bold">Page Builder</h1>
                <p className="text-xs text-muted-foreground">
                  Stack blocks and build your page
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "preview" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("preview")}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button
                variant={viewMode === "code" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("code")}
              >
                <Code className="h-4 w-4 mr-2" />
                Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
          {/* Controls Sidebar */}
          <div className="space-y-3">
            {/* Blocks List */}
            <Card className="p-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm">Blocks ({blocks.length})</h3>
                <Button size="sm" variant="outline" onClick={addBlock}>
                  <Plus className="h-3.5 w-3.5 mr-1" />
                  Add
                </Button>
              </div>
              <div className="space-y-1.5">
                {blocks.map((block, index) => (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    className={cn(
                      "p-2 rounded-md border cursor-pointer transition-colors",
                      selectedBlockId === block.id
                        ? "bg-primary/10 border-primary"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">
                          {block.title || `Block ${index + 1}`}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {block.background !== "transparent"
                            ? block.background
                            : "transparent"}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 ml-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            moveBlock(block.id, "up");
                          }}
                          disabled={index === 0}
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            moveBlock(block.id, "down");
                          }}
                          disabled={index === blocks.length - 1}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteBlock(block.id);
                          }}
                          disabled={blocks.length === 1}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Block Settings */}
            <Card className="p-3 space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
              <div>
                <h3 className="font-semibold mb-2 text-sm">Layout</h3>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label className="text-xs">Padding</Label>
                    <Select
                      value={selectedBlock.padding}
                      onValueChange={(v) =>
                        updateBlock({ padding: v as PaddingVariant })
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="md">Medium</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                        <SelectItem value="xl">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Container</Label>
                    <Select
                      value={selectedBlock.container}
                      onValueChange={(v) =>
                        updateBlock({ container: v as ContainerVariant })
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="wide">Wide</SelectItem>
                        <SelectItem value="narrow">Narrow</SelectItem>
                        <SelectItem value="full">Full Width</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2 text-sm">Visual</h3>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label className="text-xs">Background</Label>
                    <Select
                      value={selectedBlock.background}
                      onValueChange={(v) =>
                        updateBlock({ background: v as BackgroundVariant })
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transparent">Transparent</SelectItem>
                        <SelectItem value="muted">Muted</SelectItem>
                        <SelectItem value="card">Card</SelectItem>
                        <SelectItem value="gradient">Gradient</SelectItem>
                        <SelectItem value="primary">Primary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Alignment</Label>
                    <Select
                      value={selectedBlock.alignment}
                      onValueChange={(v) =>
                        updateBlock({ alignment: v as AlignmentVariant })
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="center">Center</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Title Size</Label>
                    <Select
                      value={selectedBlock.titleSize}
                      onValueChange={(v) =>
                        updateBlock({ titleSize: v as TitleSizeVariant })
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="md">Medium</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                        <SelectItem value="xl">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2 text-sm">Content</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Show Title</Label>
                    <Switch
                      checked={selectedBlock.showTitle}
                      onCheckedChange={(checked) =>
                        updateBlock({ showTitle: checked })
                      }
                    />
                  </div>

                  {selectedBlock.showTitle && (
                    <Input
                      value={selectedBlock.title}
                      onChange={(e) => updateBlock({ title: e.target.value })}
                      placeholder="Title"
                      className="h-8 text-xs"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Show Subtitle</Label>
                    <Switch
                      checked={selectedBlock.showSubtitle}
                      onCheckedChange={(checked) =>
                        updateBlock({ showSubtitle: checked })
                      }
                    />
                  </div>

                  {selectedBlock.showSubtitle && (
                    <Input
                      value={selectedBlock.subtitle}
                      onChange={(e) =>
                        updateBlock({ subtitle: e.target.value })
                      }
                      placeholder="Subtitle"
                      className="h-8 text-xs"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Show CTA 1</Label>
                    <Switch
                      checked={selectedBlock.showCTA1}
                      onCheckedChange={(checked) =>
                        updateBlock({ showCTA1: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Show CTA 2</Label>
                    <Switch
                      checked={selectedBlock.showCTA2}
                      onCheckedChange={(checked) =>
                        updateBlock({ showCTA2: checked })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Content Slot</Label>
                    <Select
                      value={selectedBlock.contentType}
                      onValueChange={(v) =>
                        updateBlock({ contentType: v as ContentType })
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="accordion">Accordion</SelectItem>
                        <SelectItem value="grid">Feature Grid</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview/Code Area */}
          <div>
            {viewMode === "preview" ? (
              <div className="border rounded-lg overflow-hidden bg-background">
                {blocks.map((block) => (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    className={cn(
                      "relative cursor-pointer transition-all",
                      selectedBlockId === block.id &&
                        "ring-2 ring-primary ring-inset"
                    )}
                  >
                    {selectedBlockId === block.id && (
                      <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        Selected
                      </div>
                    )}
                    <SectionBlock
                      padding={block.padding}
                      background={block.background}
                      container={block.container}
                      alignment={block.alignment}
                      titleSize={block.titleSize}
                      fullBleed={block.fullBleed}
                      title={block.showTitle ? block.title : undefined}
                      subtitle={
                        block.showSubtitle ? block.subtitle : undefined
                      }
                      cta1={
                        block.showCTA1
                          ? { text: "Get Started", variant: "default" }
                          : undefined
                      }
                      cta2={
                        block.showCTA2
                          ? { text: "Learn More", variant: "outline" }
                          : undefined
                      }
                    >
                      {renderContent(block.contentType)}
                    </SectionBlock>
                  </div>
                ))}
              </div>
            ) : (
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Generated Code</h3>
                  <CopyButton value={generateCode()} />
                </div>
                <pre className="text-xs bg-muted p-4 rounded overflow-x-auto max-h-[calc(100vh-200px)] overflow-y-auto">
                  <code>{generateCode()}</code>
                </pre>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
