import Input from "../../../common/Input/Input";
import getCourseDuration from "../../../helpers/getCourseDuration";
import "./Duration.css";

type DurationProps = {
    readonly formValid: boolean;
    readonly duration: number;
    readonly handleDurationChange: (value: number) => void;
};

export default function Duration({
    formValid,
    duration,
    handleDurationChange,
}: DurationProps) {
    const formattedTimeString = getCourseDuration(duration);

    return (
        <>
            <h4 className="duration-title">Duration</h4>
            <div className="duration-container">
                <Input
                    labelText="Duration"
                    inputName="Duration"
                    placeholderText="Input text"
                    required={true}
                    valid={formValid}
                    formvalid={formValid}
                    value={duration}
                    onChange={handleDurationChange}
                    inputType="number"
                />
                <p className="duration-hours">
                    <strong>{formattedTimeString.split(" ")[0]}</strong>{" "}
                    {formattedTimeString.split(" ")[1]}
                </p>
            </div>
        </>
    );
}
