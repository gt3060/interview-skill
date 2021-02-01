const imgPreLoader = (url) => {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = url;
        image.onload = () => {
            resolve();
        };
        image.onerror = () => {
            reject();
        }
    })
}
const handlePreLoader = (imgs) => {
    let promiseArr = [];
    for (let img of imgs) {
        promiseArr.push(imgPreLoader(img));
    }
    return Promise.all(promiseArr)
}

export {
    handlePreLoader
}
