function solution(a, b) {
    const ab = Number(String(a)+b)
    const ba = Number(String(b)+a)
    return ab>=ba?ab:ba
}