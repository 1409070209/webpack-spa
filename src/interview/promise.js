function MyPromise(fun) {
    this.status = 'p'
    this.resolveList = []
    this.value = null
    let that = this

    function res(value) {
        that.value = value
        that.status = 'resolve'
        for (let i = 0; i < that.resolveList.length; i++) {
            let item = that.resolveList[i]
            setTimeout(() => that.value = item(that.value), 0)
        }
        return that
    }
    function rej(value) {
        that.status = 'reject'
        that.value = value
        return that
    }
    fun(res, rej)
    return that
}
MyPromise.prototype.then = function (f) {
    this.resolveList.push(f)
    console.log(this.resolveList.length)
    return this
}


new MyPromise(function (res, rej) {
    setTimeout(function () {
        res('this is a value')
    }, 1000)
}).then(function (value) {
    console.log('value: ' + value)
    return 'value: ' + value
}).then(function (va) {
    console.log("value: " + va)
})
