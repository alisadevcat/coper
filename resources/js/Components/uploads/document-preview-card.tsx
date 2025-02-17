import { memo } from "react";
import { Typography, IconButton, Card, CardContent } from "@mui/material";
import { Iconify } from "@/Components/iconify";

export const PreviewCard = memo(({ preview, onRemove }) => {
    return (
        <Card sx={{ margin: "10px", position: "relative" }}>
            <CardContent>
                <Iconify width={40} icon="mdi:file-outline" />
                <Typography noWrap>{preview}</Typography>
                <IconButton
                    size="small"
                    onClick={() => onRemove()}
                    sx={{ position: "absolute", top: 5, right: 5 }}
                >
                    <Iconify icon="material-symbols:close" />
                </IconButton>
            </CardContent>
        </Card>
    );
});
