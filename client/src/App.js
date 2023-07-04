

import { GoogleOAuthProvider } from '@react-oauth/google';
//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '297390258961-p7to3s2763dduf48ku5uqqcd9k9crmau.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
