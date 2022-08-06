import { Route, Routes } from "react-router-dom"; 
import Join from "../pages/Join";
import Login from '../pages/Login';


const RootRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/join" element={<Join />}></Route>
            </Routes>
        </div>
    );
}

export default RootRouter;