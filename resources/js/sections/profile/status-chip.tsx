import { Chip, Stack, Typography } from "@mui/material";

type Status = "verified" | "unverified" | "pending";

const getStatusProps = (status: Status) => {
  switch (status) {
    case "verified":
      return { label: "Verified", color: "success" };
    case "unverified":
      return { label: "Unverified", color: "error" };
    case "pending":
      return { label: "Pending", color: "warning" };
    default:
      return { label: "Unknown", color: "default" };
  }
};

const StatusChip = ({ status }: { status: Status }) => {
  const { label, color } = getStatusProps(status);
  return (
    <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
      {/* <Typography>Your status is:</Typography> */}
      <Chip label={label} color={color as any} />
    </Stack>
  );
};

export default StatusChip;
