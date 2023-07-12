function solution(arr, n) {
    var myArr=[]
    if(arr.length%2===0){
        myArr=arr.map((a,index)=>{
            if(index%2==1){
                return a+n
            }else return a
        })
    }else{
         myArr=arr.map((a,index)=>{
            if(index%2==0){
                return a+n
            }else return a
        })
    }
    return myArr
}