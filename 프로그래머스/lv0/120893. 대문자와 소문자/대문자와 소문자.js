function solution(my_string) {
    return my_string.split("").map(str=>{
    const strCode = str.charCodeAt(0)
    if(strCode >= 65 && strCode <= 90){
        return str.toLowerCase()
    }else{
        return str.toUpperCase()
    }
    }).join("")
} 