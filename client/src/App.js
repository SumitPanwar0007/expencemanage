import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import { AppContextProvider } from '../src/pages/AppContext';


function App() {
  return (
    <>
      
      <Routes>
        <Route
          path="/"
          element={
            <AppContextProvider>
            <ProtectedRoutes>

              <HomePage />
            </ProtectedRoutes>
            </AppContextProvider>
          }
        />
       
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       

        
      </Routes>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
