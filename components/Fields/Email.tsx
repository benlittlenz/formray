import clsx from "clsx";
import { MailIcon } from "@heroicons/react/solid";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./Wrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};


export const EmailField = (props: InputFieldProps) => {
  const { label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MailIcon className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className={clsx(
            "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
            className
          )}
          {...registration}
        />
      </div>
    </FieldWrapper>
  );
};
