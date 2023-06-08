function solution(num_list) {
    let answer = num_list.findIndex(a=> a<0)
    return answer==undefined?-1:answer
}