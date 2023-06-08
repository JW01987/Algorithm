function solution(my_string, index_list) {
    let answer=[]
    index_list.forEach(a=>{
        answer.push(my_string[a])
    })
    return answer.join("")
}