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
                              type="submit"
                              variant="contained"
                              color="primary"
                              disabled={processing}
                              sx={{ mt: 2 }}
                          >
                              Save changes
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
            )}
            {tabIndex === 1 && (
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