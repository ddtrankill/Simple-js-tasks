/**
 * Function determinates if sum of the first and second couples of number digits is the same
 *
 * @param N input - number
 * @returns {boolean} - true if first and last two digits of number is the same 
 */
function sumOfTwo(N) {
	N = N.toString();
	var sumOfFirstCouple = 0;
	var sumOfSecondCouple = 0;
	
	for (var i = 0; i < N.length; i++) {
		if (i < (N.length / 2)) {
			sumOfFirstCouple += N[i];
		} else {
			sumOfSecondCouple += N[i];
		}
	}
	
	return sumOfFirstCouple == sumOfSecondCouple ? true : false;
}