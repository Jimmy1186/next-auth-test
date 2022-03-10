import axios from "axios"

export const signup = async ({email,pw})=>{
    try{
        const res = await axios.post(`http://localhost:3000/api/user/signup`,{
            email,
            password:pw
        });
    }catch(error){
        return {
            hasError:true
        }
    }
}