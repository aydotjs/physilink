"use client";
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
import { Control } from "react-hook-form";
import { FormFieldType } from "./Forms/PatientForm";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
}
const CustomFormField = ({ control, fieldType, name }: CustomProps) => {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX &&
            label(<FormLabel>{label}</FormLabel>)}
        </FormItem>
        // <FormItem>
        //   <FormLabel>Full Name</FormLabel>
        //   <FormControl>
        //     <Input placeholder="Ciroma Adekunle" {...field} />
        //   </FormControl>
        //   <FormDescription>This is your public display name.</FormDescription>
        //   <FormMessage />
        // </FormItem>
      )}
    />
  );
};

export default CustomFormField;