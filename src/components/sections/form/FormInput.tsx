
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps {
  label: string;
  name: keyof FormData;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  type?: string;
  isTextarea?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
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
}) => {
  return (
    <div className="group">
      <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
      {isTextarea ? (
        <Textarea
          placeholder={placeholder}
          className={`w-full p-3 sm:p-4 rounded-lg border-2 ${
            error ? "border-red-500" : "border-coral/20"
          } focus:border-coral focus:ring-coral/30 transition-colors min-h-[100px] sm:min-h-[120px] text-base group-hover:border-coral/40 bg-white`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          className={`w-full p-3 sm:p-4 rounded-lg border-2 ${
            error ? "border-red-500" : "border-coral/20"
          } focus:border-coral focus:ring-coral/30 transition-colors text-base group-hover:border-coral/40 bg-white`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
