import { TextField } from "@mui/material";

export const NameInputField = ({ name, label, value, handleNameChange }) => {

    const onNamesChange = (e) => {
        const newValue = e.target.value;
        const filteredValue = newValue.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ'’ -]/g, ""); // Remove non-Latin characters
        handleNameChange(name, filteredValue);
    };

    return (
        <TextField
            fullWidth
            id={name}
            name={name}
            label={label}
            value={value}
            slotProps={{ inputLabel: { shrink: true } }}
            sx={{ mb: 3, backgroundColor: "transparent" }}
            onChange={onNamesChange}
            autoComplete={name}
            required
        />
    );
};
