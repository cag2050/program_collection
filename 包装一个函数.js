function func(str) {
    console.log(str)
}

function wrapFunc(func) {
    return function () {
        console.log('wrap')
        let _this = this
        let args = arguments
        func.apply(_this, args)
        console.log('wrap')
    }
}


wrapFunc(func('aaa'))