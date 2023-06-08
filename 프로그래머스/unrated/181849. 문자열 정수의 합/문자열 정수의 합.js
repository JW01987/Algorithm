function solution(num_str) {
    let answer=[...num_str].reduce((a,b)=>{
        return Number(a)+Number(b)
})
    return answer;
}