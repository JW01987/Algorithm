function solution(my_string) {
  const my_set = [...new Set(my_string.split(''))];
  return my_set.join('');
}