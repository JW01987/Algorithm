function solution(n) {
    let sum=0
    const str = String(n);
    const newArr = Array.from(str)
    newArr.forEach(i=>{
        sum+=Number(i)
    })
    return sum
}