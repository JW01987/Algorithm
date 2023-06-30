function solution(str_list, ex) {
    var new_list=str_list.map(str=>{
        if(!str.includes(ex)){
            return str
        }
        return ""
    })
    return new_list.join('')

}