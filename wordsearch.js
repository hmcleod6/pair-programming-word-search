const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n');
    }
};


const transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let ans = [];
    for (var i = 0; i < cols; i++) { // ! i => row
        ans[i] = [];
        for (var j = 0; j < rows; j++) { // ! j => col
            ans[i][j] = matrix[j][i];
        }
    };
    return ans;
};


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word))
            return true;
    };

    const transposedWords = transpose(letters);

    const verticalJoin = transposedWords.map(ls => ls.join(''));
    console.log(verticalJoin);
    for (l of verticalJoin) {
        if (l.includes(word))
            return true;
    };
    return false;
};

module.exports = wordSearch;