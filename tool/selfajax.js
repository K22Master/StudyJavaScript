function resoleData(data) {
    let arr = [];
    for (let key in data) {
        let str = key + '=' + data[key];
        arr.push(str);
    }
    return arr.join('&');
}
