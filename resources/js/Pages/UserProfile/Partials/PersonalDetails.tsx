import { Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Transition } from "@headlessui/react";
import { route } from "ziggy-js";
import { usePage } from "@inertiajs/react";
import { AuthData, FlashMessageType } from "@/types";
import { useForm } from "@inertiajs/react";
import PersonalDetailsFields from "./form-fields/PersonalDetailsFields";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";


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
        job_title: profileData?.job_title || "",
        company_name: profileData?.company_name || "",
        additional_info: profileData?.additional_info || "",
    };
};

const PersonalDetails = ({ profileData }) => {
    const { user } = usePage<{ auth: AuthData }>().props.auth;
    const { flash } = usePage<{ flash: FlashMessageType }>().props;

    const { data, setData, patch, processing, errors, recentlySuccessful } =
        useForm(defaultProfileData(user, profileData));

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
                    <PersonalDetailsFields
                        data={data}
                        handleChange={handleChange}
                        errors={errors}
                    />

                    <Grid container justifyContent="flex-end" size={{ xs: 12 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: 4,
                            }}
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={processing}
                            >
                                Save Changes
                            </Button>
                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p>Profile data updated successfully.</p>
                            </Transition>
                        </Box>
                    </Grid>
                </form>
        </>
    );
};

export default PersonalDetails;
