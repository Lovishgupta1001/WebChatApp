

import { GoogleOAuthProvider } from '@react-oauth/google';
//components
import Messenger from "./components/Messenger";


function App() {
  const clientId = '297390258961-p7to3s2763dduf48ku5uqqcd9k9crmau.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
