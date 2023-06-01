function solution(num_list) {
    let sum =(num_list.reduce((a,b)=>a+b))**2
    let mul = num_list.reduce((a,b)=>a*b)
    return sum>mul?1:0
}