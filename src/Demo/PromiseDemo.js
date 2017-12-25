class PromiseDemo {
    constructor (){
        this.promise = function (fun) {
            fun(this.promise.resolve , this.promise.reject);
            return this.promise
        };
        this.promise.resolve =  (result) => {
            this.promise.result = result;
            return this.promise
        };
        this.promise.then = (callBack) => {
            this.promise.result = callBack(this.promise.result);
            return this.promise;
        }
    }
    myPromise(){
        (this.promise(function (resolve, reject) {
            console.log(1);
            console.log(resolve , reject);
            // reject('第一次');
            resolve(21);
        })).then(function (result , r) {
            console.log(result , 2);
            console.log(r , 'r 的值');
            return '123132';
        }).then(function (result) {
            console.log(result , 3);
        })
    }
    nativePromise(){
        (new Promise(function (resolve, reject) {
            console.log(1);
            console.log(resolve , reject);
            // reject('第一次');
            resolve(21);
        })).then(function (result , r) {
            console.log(result , 2);
            console.log(r , 'r 的值');
            return '123132';
        }).then(function (result) {
            console.log(result , 3);
        }).catch(function (result, r) {
            console.log(result , r , 4);
        })
    }
}

export default PromiseDemo;