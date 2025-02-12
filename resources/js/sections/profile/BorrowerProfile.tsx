import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ProfileFormFields } from "@/sections/profile/ProfileFormFields";
import { ImageUpload } from "@/sections/profile/image-upload";
import DocumentUpload from "@/Components/uploads/upload-input";
import StatusChip from "@/sections/profile/status-chip";
import { route } from "ziggy-js";
import { usePage } from "@inertiajs/react";
import { AuthData } from "@/types";
import { useForm } from "@inertiajs/react";
import ImageUploadForm from "@/sections/profile/image-upload-form";

export const defaultProfileData = (user, profileData) => {
    return {
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        gender: profileData?.gender || "male",
        country: profileData?.country || "",
        city: profileData?.city,
        state: profileData?.state,
        zip_code: profileData?.zip_code,
        address: profileData?.address || "",
        birth_date: profileData?.birth_date || "",
        phone: profileData?.phone || "",
        crypto_wallet: profileData?.crypto_wallet || "",
        currency: profileData?.currency || "",
        bank_account_number: profileData?.bank_account_number || "",
        iban: profileData?.iban || "",
        swift: profileData?.swift || "",
        job_title: profileData?.job_title || "",
        purpose: profileData?.purpose || "",
        additional_info: profileData?.additional_info || "",
        status: profileData?.status || "not verified",
        rejection_reason: profileData?.rejection_reason || "",
    };
};

const BorrowerProfile = ({ profileData, photoPath, documentPath }) => {
    const { user } = usePage<{ auth: AuthData }>().props.auth;
    const { data, setData, post, put, processing, errors } = useForm(
        defaultProfileData(user, profileData, photoPath)
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        put(route("profile.update"), {
            onSuccess: () => {
                // Success handler if needed
            },
            onError: () => {
                // Error handler if needed
            },
        });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <StatusChip status={profileData.status} />
                    {/* <ImageUpload data={data} setData={setData} handleImageChange={handleImageChange}/> */}
                    <ImageUploadForm />
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 8 }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <ProfileFormFields
                                data={data}
                                setData={setData}
                                handleChange={handleChange}
                            />

                            {data.status === "rejected" && (
                                <Grid size={{ xs: 12 }}>
                                    {data.rejection_reason}
                                </Grid>
                            )}
                        </Grid>
                        {/* <Grid>
                <DocumentUpload
                    documentPath={documentPath}
                />
            </Grid> */}
                        <Grid size={{ xs: 12 }}>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={processing}
                            >
                                Save Changes
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default BorrowerProfile;
