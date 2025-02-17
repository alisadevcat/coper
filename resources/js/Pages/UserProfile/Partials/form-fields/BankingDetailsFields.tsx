import Grid from "@mui/material/Grid2";
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
} from "@mui/material";

import InputError from "@/Components/InputError";

import {
    countries,
    currencies,
} from "@/Layouts/dashboard/config-nav-workspace";

const BankingDetailsFields = ({ data, handleChange, errors }) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Bank Account Number"
                        name="bank_account_number"
                        value={data.bank_account_number}
                        slotProps={{ inputLabel: { shrink: true } }}
                        onChange={handleChange}
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
                        slotProps={{ inputLabel: { shrink: true } }}
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
                        slotProps={{ inputLabel: { shrink: true } }}
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
                        slotProps={{ inputLabel: { shrink: true } }}
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
        </>
    );
};

export default BankingDetailsFields;
