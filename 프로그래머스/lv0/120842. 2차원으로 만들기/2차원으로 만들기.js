function solution(num_list, n) {
     const result = [];

    num_list.map((_, index) => {
        if (index % n === 0) {
            result.push(num_list.slice(index, index + n));
        }
    });

    return result;
}