import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { FieldValues, Path, Control } from "react-hook-form";

interface FormFeildProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "file" | "url";
  description?: string;
}

const FormFeild = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  description,
}: FormFeildProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} type={type} {...field} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormFeild;
