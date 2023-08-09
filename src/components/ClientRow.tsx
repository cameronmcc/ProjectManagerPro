import DeleteIcon from "@mui/icons-material/Delete";
import { TableCell, TableRow, Button, Box } from "@mui/material";

// interface client {
//   id: string;
//   name?: string;
//   email?: string;
//   phone?: string;
// }

export default function ClientRow(client: any) {
  return (
    <TableRow
      key={client.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="client">
        {client.name}
      </TableCell>
      <TableCell align="left">{client.email}</TableCell>
      <TableCell align="left">{client.phone}</TableCell>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
          minWidth: "100%",
        }}
      >
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Box>
    </TableRow>
  );
}
