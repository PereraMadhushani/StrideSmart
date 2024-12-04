function Validation(values){
    let errors ={}
    const user_name_pattern = /^[a-zA-Z0-9._-]{3,20}$/;
    const password_pattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.user_name ===''){
        errors.user_name ="User name should not be empty"
    }
    else if(!user_name_pattern.test(values.user_name)){
        errors.user_name="Invalid user name format"
    }
    else{
        errors.user_name=""

    }
    if(values.password ===""){
        errors.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        errors.password = "Password must contain at least 8 characters, including uppercase, lowercase, and a number"
    }
    else{
        errors.password=""
    }
    return errors;

}

export default Validation;