/**
 * Function changes each element of main diagonal to (i + 1)
 * where (i + 1) is line of 2d array
 *
 * @param {Object[]} input - 2d array
 * @returns {Object[]} input - modificated 2d array
 */

var input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function mapArray(input) {
	for (var i = 0; i < input.length; i++) {
		input[i][i] = 5 * (i + 1);
	}
	return input;
}