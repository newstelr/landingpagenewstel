
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  type?: string;
  isTextarea?: boolean;
  required?: boolean;
  className?: string;
  autoFocus?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  type = "text",
  isTextarea = false,
  required = true,
  className,
  autoFocus = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div 
      className={cn(
        "group transition-all duration-300 transform",
        isFocused ? "scale-[1.02]" : "",
        className
      )}
    >
      <label 
        className={cn(
          "text-sm font-medium mb-1 block transition-colors duration-300",
          isFocused ? "text-coral" : "text-gray-700"
        )}
      >
        {label}
        {required && <span className="text-coral ml-1">*</span>}
      </label>
      
      {isTextarea ? (
        <Textarea
          placeholder={placeholder}
          className={cn(
            "w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300",
            error ? "border-red-500" : isFocused ? "border-coral" : "border-coral/20",
            "focus:border-coral focus:ring-coral/30 min-h-[100px] sm:min-h-[120px]",
            "text-base group-hover:border-coral/40 bg-white animate-fade-up"
          )}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          className={cn(
            "w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300",
            error ? "border-red-500" : isFocused ? "border-coral" : "border-coral/20",
            "focus:border-coral focus:ring-coral/30 text-base",
            "group-hover:border-coral/40 bg-white animate-fade-up"
          )}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
        />
      )}
      
      {error && (
        <p className="text-red-500 text-sm mt-1 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
