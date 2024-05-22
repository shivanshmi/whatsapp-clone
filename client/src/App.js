import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./components/Messenger";
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientId =
    "470545916446-qtpj5d7nbvktb4o9ma5hh2qcio9l8eo7.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
