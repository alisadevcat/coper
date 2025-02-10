import React from "react";
import { TextField } from "@mui/material";

export const FileUpload = () => {
    return (
        <TextField
            type="file"
            // onChange={handleFileChange}
            variant="outlined"
            fullWidth
            slots={{
                input: (props) => (
                    <input
                        {...props}
                        type="file"
                        accept=".pdf, .jpg"
                        // onChange={handleFileChange}
                    />
                ),
            }}
            slotProps={{
                inputLabel: { shrink: true },
            }}
            // helperText={error}
            // error={!!error}
        />
    );
};
