function solution(num_list) {
    let index=Number(num_list.length)-1 
    if(num_list[index] > num_list[index-1]){
        num_list.push(num_list[index]-num_list[index-1])
    }else  num_list.push(num_list[index]*2)
    return num_list
}