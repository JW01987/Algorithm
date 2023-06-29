function solution(num_list) {
    let even=""
    let odd =""
    num_list.forEach((num)=>{
        if(num%2!=0){
            odd += String(num)
        }else{
            even+=String(num)
        }
    })
    return Number(even)+Number(odd)
}