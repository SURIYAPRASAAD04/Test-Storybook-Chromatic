import React from "react";

export interface ButtonProps {
  /**
   * Main content of the button
   */
  children: React.ReactNode;
  /**
   * Visual style of the button
   */
  variant?: "primary" | "secondary" | "danger";
  /**
   * Size of the button
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Click event handler
   */
  onClick?: () => void;
}

/**
 * Reusable Button component
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300",
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  }`;

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
