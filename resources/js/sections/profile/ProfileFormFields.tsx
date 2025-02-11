import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    TextareaAutosize,
} from "@mui/material";
import DocumentUpload from "@/Components/uploads/upload-input";
import {
    countries,
    currencies,
} from "@/Layouts/dashboard/config-nav-workspace";

export const ProfileFormFields = ({ data, setData, handleChange }) => {
    return (
        <>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="First Name"
                    type="first_name"
                    name="first_name"
                    value={data.first_name}
                    onChange={handleChange}
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Last Name"
                    type="last_name"
                    name="last_name"
                    value={data.last_name}
                    onChange={handleChange}
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                />
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
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                />
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
                            <MenuItem value={item.name}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="State/Region"
                    name="state"
                    value={data.state}
                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Zip Code"
                    name="zip_code"
                    value={data.zip_code}
                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Job Title"
                    name="job_title"
                    value={data.job_title}
                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Bank Account Number"
                    name="bank_account_number"
                    value={data.bank_account_number}
                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="IBAN"
                    name="iban"
                    value={data.iban}
                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="SWIFT"
                    name="swift"
                    value={data.swift}
                    onChange={handleChange}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Crypto Wallet"
                    name="crypto_wallet"
                    value={data.crypto_wallet}
                    onChange={handleChange}
                />
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
                            <MenuItem value={item.name}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
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

            <Grid size={{ xs: 12 }}>
                <TextareaAutosize
                    minRows={3}
                    placeholder="Purpose"
                    name="purpose"
                    value={data.purpose}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8 }}
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextareaAutosize
                    minRows={3}
                    placeholder="Additional Info"
                    name="additional_info"
                    value={data.additional_info}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8 }}
                />
            </Grid>
        </>
    );
};
