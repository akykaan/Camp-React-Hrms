import axios from "axios"

export default class EmployeeService{
    getAllUnconfirmedJobAdverts(){
        return axios.get("http://localhost:8080/api/job_adverts/getallbynotactive");
    }

    updateById(data){               
        return axios.put("http://localhost:8080/api/employees/updatebyid/"+data["id"],data);
    }
}