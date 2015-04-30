module.exports = isEqual;


function isEqual(a, b) {
    return !(a !== b && !(a !== a && b !== b));
}
