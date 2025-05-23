import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFormContext, Controller } from "react-hook-form";
import { savePartialFormData } from "@/services/formService";
import { debounce } from "lodash";

interface FormInputProps {
  label: string;
  name: string;
  placeholder: string;
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
  error,
  disabled = false,
  type = "text",
  isTextarea = false,
  required = true,
  className,
  autoFocus = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { control, formState, watch } = useFormContext();
  const fieldError = error || (formState.errors[name]?.message as string);
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Save form data to localStorage and Firebase whenever it changes
  const fieldValue = watch(name);
  
  // Create a debounced function for saving to Firebase to prevent excessive writes
  const debouncedSaveToFirebase = debounce((name, value) => {
    if (value !== undefined && value !== "") {
      try {
        // Create an object with the updated field
        const fieldUpdate = { [name]: value };
        savePartialFormData(fieldUpdate);
      } catch (error) {
        console.error("Error saving to Firebase:", error);
      }
    }
  }, 1000); // 1 second debounce
  
  useEffect(() => {
    if (fieldValue !== undefined) {
      try {
        // Get existing form data from localStorage
        const storedFormData = localStorage.getItem('contactFormData');
        const formData = storedFormData ? JSON.parse(storedFormData) : {};
        
        // Update the specific field
        formData[name] = fieldValue;
        
        // Save updated form data back to localStorage
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        
        // Save to Firebase with debounce (only if not empty)
        if (fieldValue !== "") {
          debouncedSaveToFirebase(name, fieldValue);
        }
      } catch (error) {
        console.error("Error saving form data:", error);
      }
    }
    
    return () => {
      debouncedSaveToFirebase.cancel();
    };
  }, [fieldValue, name, debouncedSaveToFirebase]);

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
      
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          isTextarea ? (
            <Textarea
              {...field}
              placeholder={placeholder}
              className={cn(
                "w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300",
                fieldError ? "border-red-500" : isFocused ? "border-coral" : "border-coral/20",
                "focus:border-coral focus:ring-coral/30 min-h-[100px] sm:min-h-[120px]",
                "text-base group-hover:border-coral/40 bg-white animate-fade-up"
              )}
              disabled={disabled}
              required={required}
              onFocus={(e) => {
                handleFocus();
                field.onBlur && field.onBlur();
              }}
              onBlur={(e) => {
                handleBlur();
                field.onBlur && field.onBlur();
              }}
              autoFocus={autoFocus}
            />
          ) : (
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className={cn(
                "w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300",
                fieldError ? "border-red-500" : isFocused ? "border-coral" : "border-coral/20",
                "focus:border-coral focus:ring-coral/30 text-base",
                "group-hover:border-coral/40 bg-white animate-fade-up"
              )}
              disabled={disabled}
              required={required}
              onFocus={(e) => {
                handleFocus();
                field.onBlur && field.onBlur();
              }}
              onBlur={(e) => {
                handleBlur();
                field.onBlur && field.onBlur();
              }}
              autoFocus={autoFocus}
            />
          )
        )}
      />
      
      {fieldError && (
        <p className="text-red-500 text-sm mt-1 animate-fade-in">
          {fieldError}
        </p>
      )}
    </div>
  );
};

export default FormInput;
