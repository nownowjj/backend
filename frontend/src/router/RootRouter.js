import { Route, Routes } from "react-router-dom"; 
import SignUp from "../pages/SignUp";
import Login from '../pages/Login';


const RootRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </div>
    );
}

export default RootRouter;