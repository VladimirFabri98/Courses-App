import { useState } from "react";
import "./Input.css";
import { emailValidation } from "@/helpers/validateEmail";

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
    const [initialValue, setInitialValue] = useState(true);

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
                        (value || initialValue) &&
                        (valid || initialValue) &&
                        (inputType === "email" &&
                        !emailValidation(String(value)) &&
                        String(value).length != 0
                            ? false
                            : true)
                            ? { borderColor: "#cfcfcf" }
                            : { borderColor: "#ff0000" }
                    }
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                        initialValue && setInitialValue(false);
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
                        (value || initialValue) && (valid || initialValue)
                            ? { borderColor: "#cfcfcf" }
                            : { borderColor: "#ff0000" }
                    }
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                        initialValue && setInitialValue(false);
                    }}
                ></textarea>
            )}
            {!(
                (value || initialValue) &&
                (valid || initialValue) &&
                !hasWarning
            ) && (
                <p className="input-component--invalid-input-message">
                    {`${inputName} is required`}
                </p>
            )}

            {inputType === "email" &&
                !emailValidation(String(value)) &&
                String(value).length != 0 && (
                    <p className="input-component--invalid-input-message">
                        {`Mandatory format: example@provider.com`}
                    </p>
                )}
        </label>
    );
}
