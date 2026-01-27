import "./Button.css";

type ButtonProps = {
    readonly buttonText: string;
    readonly onClick?: () => void;
};

export default function Button({ buttonText, onClick }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>
            {buttonText}
        </button>
    );
}
