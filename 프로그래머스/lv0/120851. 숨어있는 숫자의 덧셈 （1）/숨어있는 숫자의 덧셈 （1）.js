function solution(my_string) {
   const regex = /[^0-9]/g
   let result = my_string.replace(regex, "")
   return [...result].map(Number).reduce((a,b)=>a+b)
    
}