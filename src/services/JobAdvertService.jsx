import axios from "axios"

export default class JobAdvertService{
    postJobAdvert(data){
        
        return axios.post("http://localhost:8080/api/job_adverts/add",data)
        
    }
    updateJobAdvert(Id){
        console.log("updateJobAdvert: ",Id)
        return axios.put("http://localhost:8080/api/job_adverts/updatebyid/"+Id)
        
    }
}