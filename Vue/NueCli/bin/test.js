function demo(a) {
    return function (b) {
        return a + b;
    };
}
const res = demo(1)(2);
console.log(res);
