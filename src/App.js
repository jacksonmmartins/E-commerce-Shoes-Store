import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./pages/contexts/user.context"; /// user.context
import Home from "../src/pages/Home";
import Homeuser from "./pages/Userhome.page";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
import Navbar from "./pages/Navbar"

import CreateBook from "./pages/components/CreateBook";
import ShowBookList from "./pages/components/ShowBookList";
import ShowBookDetails from "./pages/components/ShowBookDetails";
import UpdateBookInfo from "./pages/components/UpdateBookInfo";
import Supportus from './pages/Supportus';
import Contact from './pages/Contact';

import ModaVerao from "./pages/CategoriasModa/ModaVerao/ModaVerao";
import ModaInverno from "./pages/CategoriasModa/ModaInverno/ModaInverno";
import VestOutlet from "./pages/CategoriasModa/VestOutlet/VestOutlet";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'

import { Container } from "react-bootstrap";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        
        <Navbar />
        <div class='body'>
        <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/supportus" element={<Supportus />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/modaverao" element={<ModaVerao />} />
          <Route exact path="/modainverno" element={<ModaInverno />} />
          <Route exact path="/vestoutlet" element={<VestOutlet />} />

            <Route element={<PrivateRoute />}>
            <Route exact path="/userhome" element={<Homeuser />} />

            <Route exact path="/create-book" element={<CreateBook />} />
            <Route exact path="/showbooklist" element={<ShowBookList />} />
            <Route exact path="/show-book/:id" element={<ShowBookDetails />} />
            <Route exact path="/edit-book/:id" element={<UpdateBookInfo />} />

          </Route>
        </Routes>
        <Footer />
        </Container>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;