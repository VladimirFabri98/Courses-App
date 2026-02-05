import "./Input.css";

type inputProps = {
    readonly labelText: string;
    readonly placeholderText: string;
    readonly inputName: string;
    readonly inputType?: string;
    readonly value: string;
    readonly valid: boolean;
    readonly onChange: (value: string) => void;
};

export default function Input({
    labelText,
    placeholderText,
    inputName,
    inputType,
    value,
    valid,
    onChange,
}: inputProps) {
    let initialValue = true;

    return (
        <label className="input-component--label">
            {labelText}
            <input
                className="input-component--input-field"
                type={inputType ? inputType : "text"}
                name={inputName}
                autoComplete="on"
                required
                placeholder={placeholderText}
                style={
                    (value || initialValue) && (valid || value)
                        ? { borderColor: "#cfcfcf" }
                        : { borderColor: "#ff0000" }
                }
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    initialValue && (initialValue = false);
                }}
            />
            <p
                className="input-component--invalid-input-message"
                style={
                    (value || initialValue) && (valid || value)
                        ? { display: "none" }
                        : { display: "block" }
                }
            >{`${inputName} is required.`}</p>
        </label>
    );
}
