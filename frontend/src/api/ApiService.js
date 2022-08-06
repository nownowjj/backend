import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8989/api";
const USER_ADD_URL = "/user/insert"

class ApiService {
    addUser(user) {
        return axios.post(USER_API_BASE_URL + USER_ADD_URL, user);
    }
}

export default new ApiService();