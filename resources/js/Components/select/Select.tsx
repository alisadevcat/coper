
import { ChangeEvent } from "react";

type Option = { value: string; label: string };

type SelectProps = {
    options: Option[];
    className?: string;
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, className = "", value, onChange, name }: SelectProps) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`${className}`}
        >
            <option value="" disabled>
                Select an option
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
