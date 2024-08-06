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

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
 
function App() {
 return (
   <BrowserRouter>
     <UserProvider>
      <Navbar />
       <Routes>
        <Route exact path="/"  element={<Home/>}/>
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />

         <Route element={<PrivateRoute />}>
           <Route exact path="/userhome" element={<Homeuser />} />

           <Route exact path="/create-book" element={<CreateBook />} />
          <Route exact path="/showbooklist" element={<ShowBookList />} />
         <Route exact path="/show-book/:id" element={<ShowBookDetails />} />
         <Route exact path="/edit-book/:id" element={<UpdateBookInfo />} />

         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
 );
}
 
export default App;