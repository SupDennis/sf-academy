import React, { useState, FC} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage, { LoginPageProps,UserState } from './pages/login-page';
import NotFoundPage from './pages/not-found-page';
import AdministratorDashboard from './pages/administrator-page';

interface AppProps {}

const App: FC = () => {
  const [token, setToken] = useState<string>();

  if(!token) {
    return <LoginPage setToken={setToken} />
  }
  
  return (
      <Routes>
        <Route path="/dashboard" element={<AdministratorDashboard/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
  );
};

export default App;
