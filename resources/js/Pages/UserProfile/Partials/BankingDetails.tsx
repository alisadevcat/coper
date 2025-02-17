import { Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Transition } from "@headlessui/react";
import { route } from "ziggy-js";
import { usePage } from "@inertiajs/react";
import { AuthData, FlashMessageType } from "@/types";
import { useForm } from "@inertiajs/react";
import BorrowerProfileFormFields from "./form-fields/borrower-form-fields";
import PersonalDetailsFields from "./form-fields/PersonalDetailsFields";
import BankingDetailsFields from "./form-fields/BankingDetailsFields";

export const defaultProfileData = (user, profileData) => {
    return {
        crypto_wallet: profileData?.crypto_wallet || "",
        currency: profileData?.currency || "",
        bank_account_number: profileData?.bank_account_number || "",
        iban: profileData?.iban || "",
        swift: profileData?.swift || "",
    };
};

const BankingDetails = ({ profileData }) => {
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

        patch(route("update.banking_details"), {
            preserveScroll: true,
            data,
            onSuccess: (response) => console.log("Success:", response),
            onError: (errors) => console.error("Errors:", errors),
        });
    };

    return (
        <>
            <Grid container spacing={2} size={{ xs: 12 }}>
                <form onSubmit={handleSubmit}>
                    <BankingDetailsFields
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
                                <p>Banking details updated successfully.</p>
                            </Transition>
                        </Box>
                    </Grid>
                </form>
            </Grid>
        </>
    );
};

export default BankingDetails;
