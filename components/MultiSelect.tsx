"use client";
import { X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";

interface MultiSelectProps {
  options: { value: string; label: string }[];
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const MultiSelect = ({
  options,
  name,
  placeholder = "Select options",
  required = false,
  disabled = false,
  value = [],
  onChange,
  error,
}: MultiSelectProps) => {
  return (
    <div className="flex-1">
      <Label htmlFor={name} className="text-gray-500">
        {placeholder} {required && <span className="text-red-500">*</span>}
      </Label>
      <Select
        onValueChange={(selectedValue) => {
          if (!value.includes(selectedValue)) {
            onChange([...value, selectedValue]);
          }
        }}
        disabled={disabled}
      >
        <SelectTrigger className="w-full mt-1 bg-[#F2F2F2] h-[53px] rounded-2xl border-none text-[#868C98]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Hidden inputs to store selected values for form submission */}
      {value.map((val) => (
        <input key={val} type="hidden" name={name} value={val} />
      ))}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {value.map((option) => (
            <div
              key={option}
              className="bg-[#EFFDF3] text-main-text px-2 py-1 rounded-2xl text-xs flex items-center gap-2 cursor-pointer"
            >
              {options.find((opt) => opt.value === option)?.label || option}
              <X
                onClick={() => onChange(value.filter((c) => c !== option))}
                className="w-4 h-4"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
