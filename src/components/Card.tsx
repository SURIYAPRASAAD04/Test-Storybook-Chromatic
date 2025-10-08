import React from "react";

export interface CardProps {
  /**
   * Title of the card
   */
  title?: string;
  /**
   * Content of the card
   */
  children: React.ReactNode;
  /**
   * URL of the card's image
   */
  imageUrl?: string;
  /**
   * Alt text for the card's image
   */
  imageAlt?: string;
  /**
   * Shadow style of the card
   */
  shadow?: "none" | "small" | "medium" | "large";
  /**
   * Padding inside the card
   */
  padding?: "small" | "medium" | "large";
  /**
   * Click event handler for the card
   */
  onClick?: () => void;
}

/**
 * Reusable Card component
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  imageUrl,
  imageAlt,
  shadow = "medium",
  padding = "medium",
  onClick,
  ...props
}) => {
  const baseClasses = "bg-white rounded-lg border border-gray-200 overflow-hidden transition-shadow";

  const shadowClasses = {
    none: "",
    small: "shadow-sm hover:shadow-md",
    medium: "shadow-md hover:shadow-lg",
    large: "shadow-lg hover:shadow-xl",
  };

  const paddingClasses = {
    small: "p-3",
    medium: "p-4",
    large: "p-6",
  };

  const classes = `${baseClasses} ${shadowClasses[shadow]} ${onClick ? "cursor-pointer" : ""}`;

  return (
    <div className={classes} onClick={onClick} {...props}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img src={imageUrl} alt={imageAlt || ""} className="w-full h-full object-cover" />
        </div>
      )}
      <div className={paddingClasses[padding]}>
        {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};
