function solution(myString, pat) {
   return myString.replaceAll("A","a").replaceAll("B","b").replaceAll("a","B").replaceAll("b","A").includes(pat)?1:0

}