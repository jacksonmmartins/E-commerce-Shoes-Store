import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./pages/contexts/user.context"; /// user.context
import Home from "../src/pages/Home";
import Homeuser from "./pages/Userhome.page";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
 
function App() {
 return (
   <BrowserRouter>
     <UserProvider>
       <Routes>
        <Route exact path="/"  element={<Home/>}/>
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />
         <Route element={<PrivateRoute />}>
           <Route exact path="/userhome" element={<Homeuser />} />
         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
 );
}
 
export default App;