import { FormProviderProps } from "react-hook-form";

export type TypeCheckbox = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string;
    id: string;
    label?: React.ReactNode;
}

export type TypeCheckboxRoot = & FormProviderProps & Omit<TypeCheckbox, "mask" | "size">