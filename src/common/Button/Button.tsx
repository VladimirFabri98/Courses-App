import "./Button.css";

type ButtonProps = {
    readonly buttonText: string;
    readonly type?: string;
    readonly form?: string;
    readonly onClick?: () => void;
};

export default function Button({
    buttonText,
    type,
    form,
    onClick,
}: ButtonProps) {
    return (
        <button
            className="button"
            type={type == "submit" ? type : "button"}
            form={form && form}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}
