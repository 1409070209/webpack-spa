let a = {
    a: 1
}

function test(...arg) {
    console.log(...arg)
    console.log(this)
    // console.log(this.a)
}
test('bind before')
test.bind(a)('bind after')
Function.prototype.applyExcu = function (obj, arg) {
    let a = Object.assign(obj)
    let key = Math.random()
    a[key] = this
    return a[key](...arg)
}
test.apply(a, ['apply after'])
test.applyExcu(a, ['applyExcu after'])
Function.prototype.bindExcu = function (obj, ...arg) {
    let that = this

    return function (...arg1) {
        let argumentList = arg
        if (arg.length === 0) {
            argumentList = arg1
        }
        return that.apply(obj, argumentList)
    }
}
test.bindExcu(a)('excument after')