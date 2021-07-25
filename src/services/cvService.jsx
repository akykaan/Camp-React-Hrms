import axios from "axios"

export default class CvService{
    getAllCv(){
        return axios.get("bütün cvleri getir.")
    }

    postCvLink(data){
        return axios.post("http://localhost:8080/api/cv/add",data)
    }
    postcvWithJobExperience(data){
        return axios.post("http://localhost:8080/api/job_experience/addjobexperienceforcandidatecv",data)
    }                                           
    postcvWithLanguage(data){
        return axios.post("http://localhost:8080/api/language/addlanguageforcandidatecv",data)
    }
    postcvWithProgrammingLanguage(data){
        return axios.post("http://localhost:8080/api/programming_language/addprogrammingLanguageforcandidatecv",data)
    }
    postcvWithSchool(data){
        console.log(data)
        return axios.post("http://localhost:8080/api/school/addschoolforcandidatecv",data)
    }
    updateCv(data){
        return axios.post("http://localhost:8080/api/job_experience/addjobexperienceforcandidatecv",data)
    }
}