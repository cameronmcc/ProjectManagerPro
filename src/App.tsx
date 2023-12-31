import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Appbar from "./components/Appbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Box from "@mui/material/Box";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Appbar />
          <BrowserRouter>
            <Routes>
              <Route path="/app" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ApolloProvider>
    </>
  );
}

export default App;
