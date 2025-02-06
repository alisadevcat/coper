
import { Typography } from "@mui/material";

export default function InputError({ children }: { children: string} ) {
    return children ? (
        <Typography sx={{ fontSize: "14px", color: "red", marginBottom: "10px" }} className="error-message">{children}</Typography>
    ) : null;
}
