import { DashboardLayout } from "@/Layouts/dashboard";
import { Head } from "@inertiajs/react";
import { DashboardContent } from "@/Layouts/dashboard";
import {
    Typography,
    Box,
    Button} from "@mui/material";
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
    }
};

// ----------------------------------------------------------------------

export default function Page({ profileData, photoPath, documentPath }) {
    console.log(profileData, photoPath, documentPath, "ewrger");

    const { user } = usePage<{ auth: AuthData }>().props.auth;

    const { data, setData, post, put, processing, errors } = useForm(
        defaultProfileData(user, profileData, photoPath )
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
            <Head>
                <title>Coper finance</title>
                <meta name="description" content="Your page description" />
            </Head>
            <DashboardLayout>
                <DashboardContent maxWidth="xl">
                    <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                        My Profile
                    </Typography>
                    <Box
                        sx={{
                            margin: "auto",
                            padding: 3,
                            backgroundColor: "var(--palette-background-paper)",
                            borderRadius: 2,
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 4 }}>
                                <StatusChip status={profileData.status} />
                                    {/* <ImageUpload data={data} setData={setData} handleImageChange={handleImageChange}/> */}
                                    <ImageUploadForm/>

                                </Grid>
                                <Grid
                                    size={{ xs: 12, sm: 8 }}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
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
                                    <Grid>
                                        <DocumentUpload
                                            documentPath={documentPath}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            Save Changes
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="First Name"
//     type="first_name"
//     name="first_name"
//     value={data.first_name}
//     onChange={handleChange}
//     slotProps={{
//         inputLabel: {
//             shrink: true,
//         },
//     }}
// />
// </Grid>
// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Last Name"
//     type="last_name"
//     name="last_name"
//     value={data.last_name}
//     onChange={handleChange}
//     slotProps={{
//         inputLabel: {
//             shrink: true,
//         },
//     }}
// />
// </Grid>
// <Grid size={{ xs: 12, md: 6 }}>
// <FormControl fullWidth>
//     <InputLabel>Gender</InputLabel>
//     <Select
//         name="gender"
//         value={data.gender}
//         onChange={handleChange}
//     >
//         <MenuItem
//             selected
//             value="male"
//         >
//             Male
//         </MenuItem>
//         <MenuItem value="female">
//             Female
//         </MenuItem>
//         <MenuItem value="other">
//             Other
//         </MenuItem>
//     </Select>
// </FormControl>
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Birth Date"
//     type="date"
//     name="birth_date"
//     value={data.birth_date}
//     onChange={handleChange}
//     slotProps={{
//         inputLabel: {
//             shrink: true,
//         },
//     }}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Phone Number"
//     name="phone"
//     value={data.phone}
//     onChange={handleChange}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <FormControl fullWidth>
//     <InputLabel>Country</InputLabel>
//     <Select
//         name="country"
//         value={data.country}
//         onChange={(e) =>
//             setData(
//                 "country",
//                 e.target.value
//             )
//         }
//     >
//         {countries.map((item) => (
//             <MenuItem
//                 value={item.name}
//             >
//                 {item.name}
//             </MenuItem>
//         ))}
//     </Select>
// </FormControl>
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="State/Region"
//     name="state"
//     value={data.state}
//     onChange={handleChange}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="City"
//     name="city"
//     value={data.city}
//     onChange={handleChange}
// />
// </Grid>
// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Address"
//     name="address"
//     value={data.address}
//     onChange={handleChange}
// />
// </Grid>
// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Zip Code"
//     name="zip_code"
//     value={data.zip_code}
//     onChange={handleChange}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Job Title"
//     name="job_title"
//     value={data.job_title}
//     onChange={handleChange}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Bank Account Number"
//     name="bank_account_number"
//     value={data.bank_account_number}
//     onChange={handleChange}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="IBAN"
//     name="iban"
//     value={data.iban}
//     onChange={handleChange}
// />
// </Grid>

// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="SWIFT"
//     name="swift"
//     value={data.swift}
//     onChange={handleChange}
// />
// </Grid>
// <Grid size={{ xs: 12, md: 6 }}>
// <TextField
//     fullWidth
//     label="Crypto Wallet"
//     name="crypto_wallet"
//     value={data.crypto_wallet}
//     onChange={handleChange}
// />
// </Grid>
// <Grid size={{ xs: 12, md: 6 }}>
// <FormControl fullWidth>
//     <InputLabel>
//         Currency
//     </InputLabel>
//     <Select
//         name="currency"
//         value={data.currency}
//         onChange={(e) =>
//             setData(
//                 "currency",
//                 e.target.value
//             )
//         }
//     >
//         {currencies.map((item) => (
//             <MenuItem
//                 value={item.name}
//             >
//                 {item.name}
//             </MenuItem>
//         ))}
//     </Select>
// </FormControl>
// </Grid>

// <Grid size={{ xs: 12 }}>
// <TextareaAutosize
//     minRows={3}
//     placeholder="Purpose"
//     name="purpose"
//     value={data.purpose}
//     onChange={handleChange}
//     style={{
//         width: "100%",
//         padding: 8,
//     }}
// />
// </Grid>

// <Grid size={{ xs: 12 }}>
// <TextareaAutosize
//     minRows={3}
//     placeholder="Additional Info"
//     name="additional_info"
//     value={data.additional_info}
//     onChange={handleChange}
//     style={{
//         width: "100%",
//         padding: 8,
//     }}
// />
// </Grid>
