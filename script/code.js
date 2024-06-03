function addUp(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('addUp() expects an array as input');
    }

    return array.reduce(function(total, value) {
        if (typeof value !== 'number') {
            throw new TypeError('addUp() expects all elements to be numbers');
        }

        return total + value;
    }, 0);
}
