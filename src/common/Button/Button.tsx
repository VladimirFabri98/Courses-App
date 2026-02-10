import { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
    readonly children: ReactNode;
    readonly type?: "submit" | "button" | "reset";
    readonly form?: string;
    readonly onClick?: (value?: any) => void;
};

export default function Button({
    children,
    type = "button",
    form,
    onClick,
}: ButtonProps) {
    return (
        <button className="button" type={type} form={form} onClick={onClick}>
            {children}
        </button>
    );
}
