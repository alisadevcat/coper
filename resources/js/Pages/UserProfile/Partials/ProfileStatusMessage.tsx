import { usePage } from "@inertiajs/react";
import { Alert, AlertTitle, AlertColor } from "@mui/material";
import { AuthData } from "@/types";

type getMessageType = {
    title: string;
    message: string;
    severity: AlertColor;
};

const ProfileStatusMessage = () => {
    const { auth } = usePage<{ auth: AuthData }>().props;

    const getMessage = (): getMessageType | null => {
        switch (auth.user_status[0]) {
            case "unverified":
                return {
                    title: "Unverified",
                    message:
                        "Your current status is Unverified. Please complete your profile by filling in all required fields, uploading a valid document, and adding a clear profile photo. A complete profile increases your chances of getting verified.",
                    severity: "warning",
                };
            case "pending":
                return {
                    title: "Pending Verification",
                    message:
                        "Your profile is under review and marked as Pending. Our moderators are currently verifying your details. This process may take some time, so please check back later.",
                    severity: "info",
                };
            case "verified":
                return {
                    title: "Verified",
                    message:
                        "Congratulations! Your profile has been Verified. You now have full access to all platform features.",
                    severity: "success",
                };
            default:
                return null;
        }
    };

    const statusMessage = getMessage();
    if (!statusMessage) return null;

    return (
        <Alert severity={statusMessage.severity} sx={{mb: 2}}>
            <AlertTitle>{statusMessage.title}</AlertTitle>
            {statusMessage.message}
        </Alert>
    );
};

export default ProfileStatusMessage;
