# AP QUEUEFY

## v1.0.0

## aqpMap

### Usage

#### aqpMap takes 3 parameters

#### - items: Array = default array of items

#### - concurrency: Integer = number of concurrent promises to be resolved

#### - callback: Function = callback function with 1 parameter that modifies one item at a time

### Example

```Javascript
    import { apqMap } from "ap-queuefy";

    let items = [10, 20, 40, 100];
    (async () => {
        let results = await apqMap(items, 2, async function(item) {
            return item - 1;
        });

        console.log(results);
    })();
```
