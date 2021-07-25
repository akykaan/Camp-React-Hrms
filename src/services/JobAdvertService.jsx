import axios from "axios"

export default class JobAdvertService{
    postJobAdvert(data){        
        return axios.post("http://localhost:8080/api/job_adverts/add",data)
        
    }
    updateJobAdvert(Id){
        
        return axios.put("http://localhost:8080/api/job_adverts/updatebyid/"+Id)
        
    }
    getAllJobAdvert(){
        return axios.get("http://localhost:8080/api/job_adverts/getallbyactive")
    }
    getAllSearchJobAdvert(data){        
        return axios
        .get("http://localhost:8080/api/job_adverts/search?keyword="+data["keyword"]+"&pageNumber="+data["pageNumber"]+"&pageSize="+data["pageSize"]+"")
    }
}