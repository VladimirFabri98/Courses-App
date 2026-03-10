import { useState } from "react";
import "./Input.css";
import { emailValidation } from "@/helpers/validateEmail";
import TextArea from "./TextArea/TextArea";

type inputProps = {
    readonly labelText: string;
    readonly placeholderText: string;
    readonly inputName: string;
    readonly value: string | number;
    readonly required: boolean;
    readonly valid: boolean;
    readonly formvalid?: boolean;
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
    formvalid = true,
    required,
    inputType,
    minLength,
    minValue = 0,
    multiline,
    hasWarning = true,
}: inputProps) {
    const [initialValue, setInitialValue] = useState(true);
    const emailCheck =
        inputType === "email" &&
        !emailValidation(String(value)) &&
        String(value).length != 0;

    const textErrorCondition = !(
        (value || initialValue) &&
        (valid || initialValue) &&
        (valid || formvalid)
    );

    const colorErrorCondition =
        (value || initialValue) &&
        (valid || initialValue) &&
        (valid || formvalid);

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
                        !hasWarning
                            ? { borderColor: "#cfcfcf" }
                            : colorErrorCondition && !emailCheck
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
                <TextArea
                    value={value}
                    colorErrorCondition={colorErrorCondition}
                    initialValue={initialValue}
                    inputName={inputName}
                    minLength={minLength}
                    placeholderText={placeholderText}
                    required={required}
                    onChange={onChange}
                    handleInitialValueChange={setInitialValue}
                />
            )}
            {hasWarning && textErrorCondition && (
                <p className="input-component--invalid-input-message">
                    {`${inputName} is required`}
                </p>
            )}

            {emailCheck && (
                <p className="input-component--invalid-input-message">
                    {`Mandatory format: example@provider.com`}
                </p>
            )}
        </label>
    );
}
