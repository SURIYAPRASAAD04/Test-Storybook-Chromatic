import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large"],
    },
    padding: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    title: {
      control: { type: "text" },
    },
    imageUrl: {
      control: { type: "text" },
    },
    imageAlt: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: "This is the content of the card. You can display various information here.",
  },
};

export const WithImage: Story = {
  args: {
    title: "Card with Image",
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop",
    imageAlt: "Beautiful landscape",
    children: "This card is displayed with an image. The image appears at the top of the card.",
  },
};

export const NoShadow: Story = {
  args: {
    title: "Card without Shadow",
    shadow: "none",
    children: "A simple card without shadow.",
  },
};

export const LargeShadow: Story = {
  args: {
    title: "Card with Large Shadow",
    shadow: "large",
    children: "A card highlighted with a large shadow.",
  },
};

export const SmallPadding: Story = {
  args: {
    title: "Small Padding",
    padding: "small",
    children: "A compact card with small padding.",
  },
};

export const LargePadding: Story = {
  args: {
    title: "Large Padding",
    padding: "large",
    children: "A card with large padding for a spacious feel.",
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    children: "This card can be clicked. Try hovering your mouse!",
  },
};
