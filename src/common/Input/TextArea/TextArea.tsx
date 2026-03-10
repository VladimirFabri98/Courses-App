import "../Input.css";

type TextAreaProps = {
    readonly minLength?: number;
    readonly inputName: string;
    readonly required: boolean;
    readonly placeholderText: string;
    readonly value: string | number;
    readonly initialValue: boolean;
    readonly onChange: (value: any) => void;
    readonly colorErrorCondition: string | number | boolean;
    readonly handleInitialValueChange: (value: boolean) => void;
};

export default function TextArea({
    minLength,
    inputName,
    required,
    placeholderText,
    value,
    initialValue,
    onChange,
    handleInitialValueChange,
    colorErrorCondition,
}: TextAreaProps) {
    return (
        <textarea
            className="input-component--textarea-field"
            minLength={minLength ? minLength : 0}
            name={inputName}
            autoComplete="on"
            required={required}
            placeholder={placeholderText}
            style={
                colorErrorCondition
                    ? { borderColor: "#cfcfcf" }
                    : { borderColor: "#ff0000" }
            }
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
                initialValue && handleInitialValueChange(false);
            }}
        ></textarea>
    );
}
