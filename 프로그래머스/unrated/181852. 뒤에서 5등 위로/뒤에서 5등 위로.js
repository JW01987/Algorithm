function solution(num_list) {
   return num_list.sort((a,b)=>a-b).filter((param,index) => index>=5);
}