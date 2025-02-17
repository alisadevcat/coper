<Grid
container
spacing={3}
sx={{ margin: "auto", padding: 3 }}
>
{/* Sidebar */}
<Grid size={{ xs: 12, sm: 4 }}>
    <ImageUploadForm imageData={imageData} />
</Grid>
<Grid size={{ xs: 12, sm: 8 }}>
    {/* Header */}
    <Typography variant="h4" sx={{ mb: 3 }}>
        My Profile
    </Typography>
    <Box display="flex" gap="1rem">
        <Link href="/verify">Verify</Link>
    </Box>
    {/* Tabs */}
    <Card
        sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 2,
            mt: 3,
            padding: 3
        }}
    >
        <Tabs
            value={tabIndex}
            onChange={(e, newIndex) =>
                setTabIndex(newIndex)
            }
        >
            <Tab label="Personal Details" />
            <Tab label="Banking & Crypto Details" />
            <Tab label="Documents" />
        </Tabs>
        <Box sx={{ mt: 3 }}>
            {tabIndex === 0 && (
                <PersonalDetails
                    profileData={profileData}
                />
            )}
            {tabIndex === 1 && (
                <BankingDetails
                    profileData={profileData}
                />
            )}
            {tabIndex === 2 && (
                <DocumentUpload
                    documentData={documentData}
                />
            )}
        </Box>
    </Card>
</Grid>
</Grid>