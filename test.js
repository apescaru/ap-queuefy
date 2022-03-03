import { apqMap } from "./index.js";

let items = [10, 20, 40, 100];
(async () => {
  let results = await apqMap(items, 2, async function (item) {
    return item - 1;
  });

  console.log(results);
})();
