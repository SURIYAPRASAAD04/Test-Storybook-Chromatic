import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "example@email.com",
    required: true,
    helperText: "Please enter a valid email address",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    state: "error",
    errorMessage: "Password must be at least 8 characters",
    required: true,
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    state: "success",
    helperText: "This username is available",
  },
};

export const Small: Story = {
  args: {
    label: "Small Input Field",
    size: "small",
    placeholder: "Small size",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input Field",
    size: "large",
    placeholder: "Large size",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Cannot be edited",
    disabled: true,
    value: "Disabled value",
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    helperText: "Numbers only",
  },
};
