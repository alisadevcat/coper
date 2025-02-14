import { Typography, IconButton, Card, CardContent } from "@mui/material";
import { Iconify } from "../iconify";

export const PreviewCard = ({ file, index, onRemove }) => (
    <Card sx={{ margin: "10px", position: "relative" }}>
        <CardContent>
            {file.preview ? (
                <img src={file.preview} alt={file.file.name} style={{ width: "100%", height: 140, objectFit: "cover" }} />
            ) : (
                <Iconify width={40} icon="mdi:file-outline" />
            )}
            <Typography noWrap>{file.file.name}</Typography>
            <Typography variant="caption" color="textSecondary">
                {(file.file.size / (1024 * 1024)).toFixed(2)} MB
            </Typography>
            <IconButton size="small" onClick={() => onRemove(index)} sx={{ position: "absolute", top: 5, right: 5 }}>
                <Iconify icon="material-symbols:close" />
            </IconButton>
        </CardContent>
    </Card>
);