function solution(n, control) {
    [...control].forEach(i=>{
     if(i=='w')n+=1
     else if(i=='s') n-=1
     else if(i=='d') n+=10
     else if(i=='a') n-=10
    })
    return n
}