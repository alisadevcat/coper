import React from "react";
import { TextField } from "@mui/material";

export const ImageUpload = () => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            type="file"
            // error={!!error}
            // helperText={error || (file ? `Selected file: ${file.name}` : "Allowed: .jpeg, .jpg, .png, .gif (Max: 3MB)")}
            slotProps={{
                inputLabel: { shrink: true },
            }}
            slots={{
                input: (props) => (
                    <input
                        {...props}
                        type="file"
                        accept=".jpeg, .jpg, .png, .gif"
                        // onChange={handleFileChange}
                    />
                ),
            }}
        />
    );
};
