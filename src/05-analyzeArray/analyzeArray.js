module.exports = function analyzeArray(arr) {
    const length = arr.length;
    if (!length) return {};
    let min = Infinity;
    let max = -Infinity;
    const average = arr.reduce((sum, curr) => {
        if (curr > max) max = curr;
        if (curr < min) min = curr;
        return sum + curr;
    }, 0) / length;

    return {average, min, max, length};
}