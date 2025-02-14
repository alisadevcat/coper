const Select = ({
    options,
    className,
    value,
    onChange,
    name,
    defaultValue,
}) => {
    return (
        <select
            name={name}
            onChange={onChange}
            className={
                "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 " +
                className
            }
        >
            {/* <option value="Choose your role" disabled>
                Select an option
            </option> */}
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    selected={option.value === defaultValue}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
