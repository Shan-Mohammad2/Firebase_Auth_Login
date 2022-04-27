import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Signin from './components/Signin';
import Login from './components/Login';
import { Col, Container, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
             <Route  path="/Home" element={< ProtectedRoute>
               <Home /> 
              </ProtectedRoute>} /> 
            <Route  path="/" element={<Login />} />
            <Route path="/Signin" element={<Signin />} />
          </Routes>
        </UserAuthContextProvider>
          
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
