import React from "react";

export interface InputProps {
  /**
   * Label of the input field
   */
  label?: string;
  /**
   * Placeholder text of the input field
   */
  placeholder?: string;
  /**
   * Type of the input field
   */
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  /**
   * Value of the input field
   */
  value?: string;
  /**
   * Size of the input field
   */
  size?: "small" | "medium" | "large";
  /**
   * State of the input field
   */
  state?: "default" | "error" | "success";
  /**
   * Whether the input field is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Helper text for the input field
   */
  helperText?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Change event handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Focus event handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Blur event handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Reusable Input component
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  size = "medium",
  state = "default",
  disabled = false,
  required = false,
  helperText,
  errorMessage,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const baseClasses = "w-full border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1";

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  const stateClasses = {
    default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    success: "border-green-500 focus:border-green-500 focus:ring-green-500",
  };

  const inputClasses = `${baseClasses} ${sizeClasses[size]} ${stateClasses[state]} ${
    disabled ? "bg-gray-100 cursor-not-allowed opacity-50" : "bg-white"
  }`;

  const displayErrorMessage = state === "error" && errorMessage;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        className={inputClasses}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      {(helperText || displayErrorMessage) && (
        <p className={`mt-1 text-sm ${displayErrorMessage ? "text-red-600" : "text-gray-500"}`}>
          {displayErrorMessage || helperText}
        </p>
      )}
    </div>
  );
};
