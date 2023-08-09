import { Skeleton, Stack } from "@mui/material";

export default function Skeletons() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={1200} height={240} />
      <Skeleton variant="rounded" width={1200} height={240} />
    </Stack>
  );
}
