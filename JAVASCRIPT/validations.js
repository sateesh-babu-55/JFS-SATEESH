let register = ()=>{
    
    let fname = document.forms["regForm"]["fname"].value;
    let arr1 = [];
    if(/^$/.test(fname)){
        arr1.push("first name can't be left blank");
    }else if(!/^[a-zA-Z0-9]{4,8}$/.test(fname)){
        arr1.push("please follow rules and regulations");
    }
    document.getElementById("fname_errors").innerHTML = arr1.join("");

    //     /^$/
    //     /^[a-zA-Z0-9]{4,8}$/
    //     /^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,8}$/
    //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
    //     /^[0-9]{10}$/

  
    return false;
}