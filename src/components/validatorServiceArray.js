export function validateArray(array) {
	console.log(array);
    if (typeof array !== 'undefined' && array.length > 0) {
    // the array is defined and has at least one element
        
        return true;
    };
    return false;
}