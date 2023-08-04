import Typography from "@material-ui/core/Typography";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Typography variant="h1" color="primary">
        Hello World
      </Typography>
    </>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
