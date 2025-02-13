import Grid from "@mui/material/Grid2";
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormLabel,
    InputLabel,
    TextareaAutosize,
    Typography,
} from "@mui/material";
import { PhoneInputField } from "./phone-input";
import { NameInputField } from "./name-input";
import InputError from "@/Components/InputError";

import {
    countries,
    currencies,
} from "@/Layouts/dashboard/config-nav-workspace";

const BorrowerProfileFormFields = ({ data, handleChange, errors }) => {
    const handlePhoneChange = (value:string) => {
        handleChange({ target: { name: "phone", value: value } });
    };
    const handleNameChange = (name:string, value:string) => {
        handleChange({ target: { name: name, value: value } });
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h4" paddingBottom={"1rem"}>
                        Personal Details
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <NameInputField
                        name="first_name"
                        label="First Name"
                        value={data.first_name}
                        handleNameChange={handleNameChange}
                    />
                    {errors.first_name && (
                        <InputError>{errors.first_name}</InputError>
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <NameInputField
                        name="last_name"
                        label="Last Name"
                        value={data.last_name}
                        handleNameChange={handleNameChange}
                    />
                    {errors.last_name && (
                        <InputError>{errors.last_name}</InputError>
                    )}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="gender"
                            value={data.gender}
                            onChange={handleChange}
                        >
                            <MenuItem selected value="male">
                                Male
                            </MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                        {errors.gender && (
                            <InputError>{errors.gender}</InputError>
                        )}
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Birth Date"
                        type="date"
                        name="birth_date"
                        value={data.birth_date}
                        onChange={handleChange}
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        required
                    />
                    {errors.birth_date && (
                        <InputError>{errors.birth_date}</InputError>
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <PhoneInputField
                        value={data.phone}
                        onChange={handlePhoneChange}
                    />
                    {errors.phone && <InputError>{errors.phone}</InputError>}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select
                            name="country"
                            value={data.country}
                            onChange={handleChange}
                        >
                            {countries.map((item) => (
                                <MenuItem value={item.name}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {errors.country && (
                        <InputError>{errors.country}</InputError>
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="State/Region"
                        name="state"
                        value={data.state}
                        onChange={handleChange}
                    />
                    {errors.state && <InputError>{errors.state}</InputError>}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={data.city}
                        onChange={handleChange}
                    />
                    {errors.city && <InputError>{errors.city}</InputError>}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                    />
                    {errors.address && (
                        <InputError>{errors.address}</InputError>
                    )}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Zip Code"
                        name="zip_code"
                        value={data.zip_code}
                        onChange={handleChange}
                    />
                    {errors.zip_code && (
                        <InputError>{errors.zip_code}</InputError>
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Job Title"
                        name="job_title"
                        value={data.job_title}
                        onChange={handleChange}
                    />
                    {errors.job_title && (
                        <InputError>{errors.job_title}</InputError>
                    )}
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth>
                        <FormLabel htmlFor="purpose">Purpose</FormLabel>
                        <TextareaAutosize
                            minRows={3}
                            placeholder="Purpose"
                            name="purpose"
                            value={data.purpose}
                            onChange={handleChange}
                            style={{ width: "100%", padding: 8 }}
                        />
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth>
                        <FormLabel htmlFor="additional-info">
                            Additional Info
                        </FormLabel>
                        <TextareaAutosize
                            minRows={3}
                            placeholder="Additional Info"
                            name="additional_info"
                            value={data.additional_info}
                            onChange={handleChange}
                            style={{ width: "100%", padding: 8 }}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2} paddingY={"1rem"}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h4">
                        Banking & Crypto Details
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Bank Account Number"
                        name="bank_account_number"
                        value={data.bank_account_number}
                        onChange={handleChange}
                        type="number"
                    />
                    {errors.bank_account_number && (
                        <InputError>{errors.bank_account_number}</InputError>
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="IBAN"
                        name="iban"
                        value={data.iban}
                        onChange={handleChange}
                    />
                    {errors.iban && <InputError>{errors.iban}</InputError>}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="SWIFT"
                        name="swift"
                        value={data.swift}
                        onChange={handleChange}
                    />
                    {errors.swift && <InputError>{errors.swift}</InputError>}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Crypto Wallet"
                        name="crypto_wallet"
                        value={data.crypto_wallet}
                        onChange={handleChange}
                    />
                    {errors.crypto_wallet && (
                        <InputError>{errors.crypto_wallet}</InputError>
                    )}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl fullWidth>
                        <InputLabel>Currency</InputLabel>
                        <Select
                            name="currency"
                            value={data.currency}
                            onChange={handleChange}
                        >
                            {currencies.map((item) => (
                                <MenuItem value={item.name}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {errors.currency && (
                        <InputError>{errors.currency}</InputError>
                    )}
                </Grid>
            </Grid>
            {data.status === "rejected" && (
                <Grid size={{ xs: 12 }}>
                    <TextareaAutosize
                        minRows={3}
                        placeholder="Rejection Reason"
                        name="rejection_reason"
                        value={data.rejection_reason}
                        onChange={handleChange}
                        style={{ width: "100%", padding: 8 }}
                    />
                </Grid>
            )}
        </>
    );
};

export default BorrowerProfileFormFields;
