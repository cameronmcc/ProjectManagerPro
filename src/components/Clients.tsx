import { useQuery } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { GET_CLIENTS } from "../queries/clientQueries";
// import ClientRow from "./ClientRow";
import Skeletons from "./Skeleton";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Skeletons />;
  if (error) return <Skeletons />;

  return (
    <>
      {!loading && !error && (
        <>
          <Typography variant="h4"> Clients</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.clients.map((client: any) => (
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
