import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DocumentUpload from "@/Components/uploads/upload-input";
import { route } from "ziggy-js";
import { usePage } from "@inertiajs/react";
import { AuthData, FlashMessageType } from "@/types";
import { useForm } from "@inertiajs/react";
import BorrowerProfileFormFields from "./form-fields/borrower-form-fields";

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

const BorrowerProfile = ({ profileData }) => {
    const { user } = usePage<{ auth: AuthData }>().props.auth;
    const { flash } = usePage<{ flash: FlashMessageType }>().props;

    const { data, setData, post, patch, processing, errors } = useForm(
        defaultProfileData(user, profileData)
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        patch(route("userprofile.update"), {
            preserveScroll: true,
            data,
            onSuccess: (response) => console.log("Success:", response),
            onError: (errors) => console.error("Errors:", errors),
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <BorrowerProfileFormFields
                        data={data}
                        handleChange={handleChange}
                        errors={errors}
                    />

                    {data.status === "rejected" && (
                        <Grid size={{ xs: 12 }}>{data.rejection_reason}</Grid>
                    )}
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={processing}
                    >
                        Save Changes
                    </Button>
                    {flash.message && <div>{flash.message}</div>}
                </Grid>
            </form>
        </>
    );
};

export default BorrowerProfile;
