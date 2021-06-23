import axios from "axios"

export default class HrmsStaffService{
    getAllUnconfirmedJobAdverts(){
        return axios.get("http://localhost:8080/api/job_adverts/getallbyactive");
    }
}