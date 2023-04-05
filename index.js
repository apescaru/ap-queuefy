async function apqMap(items, concurrency, callback) {
    if(typeof items != "object" || !items.length) throw new TypeError("First parameter is a non-empty array");
    if(typeof concurrency != "number" || concurrency === 0) throw new TypeError("Second parameter is a non-zero positive integer");
    if(typeof callback != "function") throw new TypeError("Third parameter is a function with one parameter");

    let queue = [];
    let singleQueue = [];
    let now = 0;
    items.forEach((item, index) => {
        now++;
        singleQueue.push(item);
        if(now === concurrency || index === items.length - 1) {
            queue.push(singleQueue);
            now = 0;
            singleQueue = [];
        }
    });

    let ret = [];
    for(const que of queue) {
        const currentRes = await Promise.all(que.map(async (q) => {
            return await callback(q);
        }));
        ret.push(...currentRes);
    }
    return ret;
}

module.exports = apqMap;