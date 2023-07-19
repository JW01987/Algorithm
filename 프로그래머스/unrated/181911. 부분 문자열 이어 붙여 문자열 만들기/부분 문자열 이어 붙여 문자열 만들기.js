function solution(my_strings, parts) {
  const result = my_strings.map((str, index) => {
    const [start, end] = parts[index];
    return  str.slice(start, end + 1)
  
  });
return  result.join("")
}