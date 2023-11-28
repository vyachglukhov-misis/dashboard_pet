function wait(time) {
    const promise = new Promise((res, rej)=> {
        setTimeout(() => {
            res()
        }, time);
    })
    return promise 
}
