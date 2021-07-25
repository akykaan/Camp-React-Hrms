import axios from "axios"

export default class LoginService{
    postCandidate(data){
        return axios.post("http://localhost:8080/api/users/login",data)
    }
    loginEmployer(data){
        return axios.post("http://localhost:8080/api/employers/login",data)
    }
}