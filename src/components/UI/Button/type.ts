export type VariantButton = "primary" | "secondary";

export type TypeButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
 & {
    variant: "primary" | "secondary";
    children: React.ReactNode;
} 