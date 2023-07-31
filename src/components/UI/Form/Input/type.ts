import { FormProviderProps } from "react-hook-form";

export type TypeInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string;
    id: string;
    icon?: React.ReactNode;
}

export type TypeInputRoot = & FormProviderProps & Omit<TypeInput, "mask" | "size">