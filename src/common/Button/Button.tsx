import "./Button.css";

type ButtonProps = {
    buttonText: string;
    onClick?: () => void;
};

export default function Button({ buttonText, onClick }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>
            {buttonText}
        </button>
    );
}
