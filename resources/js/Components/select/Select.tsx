// import { ChangeEventHandler } from "react";

// type Option = { value: string; label: string };
// type SelectProps = {
//     options: Option[];
//     className: string;
//     value: string;
//     name: string;
//     onChange: ChangeEventHandler<HTMLSelectElement>;
//     defaultValue?: string;
// };

// const Select = ({
//     options,
//     className,
//     value,
//     onChange,
//     name,
//     defaultValue,
// }: SelectProps) => {
//     return (
//         <select
//             name={name}
//             // value={defaultValue}
//             onChange={onChange}
//             className={"select-role-input " +
//                 className
//             }
//         >
//             {/* <option value="Choose your role" disabled>
//                 Select an option
//             </option> */}
//             {options.map((option) => (
//                 <option
//                     key={option.value}
//                     value={option.value}
//                     selected={option.value === defaultValue}
//                 >
//                     {option.label}
//                 </option>
//             ))}
//         </select>
//     );
// };

// export default Select;


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
