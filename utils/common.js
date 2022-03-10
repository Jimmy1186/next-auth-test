const errorHandler = (msg,res)=>{
    res.status(400).json({
        hasError:true,
        errorMessage:msg
    })
}


const validHandler = (fields)=>{
    for(let key in fields){
        if(fields[key].trim()===""){
            throw `${key} require`
        }
    }
}

export {errorHandler,validHandler}