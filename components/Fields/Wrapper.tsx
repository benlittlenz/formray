import clsx from "clsx";
import * as React from "react";
import { FieldError } from "react-hook-form";
import { CogIcon, ArrowsExpandIcon } from "@heroicons/react/solid";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  "className" | "children"
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const { label, className, error, children } = props;
  return (
    <div
      className="flex items-center py-4 px-4 hover:bg-gray-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center mt-5">
        {isHovering ? (
          <>
            <ArrowsExpandIcon className="h-4 w-4 text-gray-600" />
            <CogIcon className="h-4 w-4 text-gray-600" />
          </>
        ) : <div className="ml-8"></div>}
      </div>

      <div className="w-full ml-2">
        <label
          className={clsx("block text-sm font-medium text-gray-700", className)}
        >
          {label}
          <div className="mt-1">{children}</div>
        </label>
        {error?.message && (
          <div
            role="alert"
            aria-label={error.message}
            className="text-sm font-semibold text-red-500"
          >
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};
