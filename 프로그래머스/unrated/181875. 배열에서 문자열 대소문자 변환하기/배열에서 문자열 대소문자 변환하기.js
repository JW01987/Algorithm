function solution(strArr) {
    return strArr.map((data,index)=>{
        if(index%2!=0) return data.toUpperCase()
        else return data.toLowerCase()
    })
}