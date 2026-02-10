import "./Input.css";

type inputProps = {
    readonly labelText: string;
    readonly placeholderText: string;
    readonly inputName: string;
    readonly value: string | number;
    readonly required: boolean;
    readonly valid: boolean;
    readonly onChange: (value: any) => void;
    readonly inputType?: string;
    readonly minLength?: number;
    readonly minValue?: number;
    readonly multiline?: boolean;
    readonly hasWarning?: boolean;
};

export default function Input({
    labelText,
    placeholderText,
    inputName,
    value,
    onChange,
    valid,
    required,
    inputType,
    minLength,
    minValue = 0,
    multiline,
    hasWarning,
}: inputProps) {
    let initialValue = true;

    return (
        <label className="input-component--label">
            {labelText}
            {!multiline ? (
                <input
                    className="input-component--input-field"
                    type={inputType ? inputType : "text"}
                    minLength={minLength ? minLength : 0}
                    min={minValue}
                    name={inputName}
                    autoComplete="on"
                    required={required}
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
                ></input>
            ) : (
                <textarea
                    className="input-component--textarea-field"
                    minLength={minLength ? minLength : 0}
                    name={inputName}
                    autoComplete="on"
                    required={required}
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
                ></textarea>
            )}
            {!((value || initialValue) && (valid || value) && !hasWarning) && (
                <p className="input-component--invalid-input-message">{`${inputName} is required.`}</p>
            )}
        </label>
    );
}
