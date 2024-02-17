# NodeJS Notes

## 1. Global-Object

- Browser မှာရှိတဲ့ Window Object နဲ့တူတယ်

### Directory Name and FileName

```js
console.log(__dirname);
console.log(__filename);
```

---

## 2. Node-Module-System

- js file တေ data share ချင်ရင် module သုံးပီး shareမယ်

### module1.js

```js
const name = "HLO";
const age = 26;
module.exports = {
  name,
  age,
};
```

### module2.js

```js
const obj = require("./module1");
console.log(obj);
```

---

## 3. File System

- file system ကို သုံးဖို့အတွက် အရင်ကြေငြာရမယ်
- file, folder တေကို သုံးတဲ့ method တေက asynchronous ဖစ်တယ်

```js
const fs = require("fs");
```

---

## 4. Stream and Buffer

- stream and buffer က large file တေကို read/write လုပ်တဲ့အခါ သုံးတယ်
- buffer တခုစီအလိုက် ခွဲခွဲလုပ်တယ်

```js
const fs = require("fs");

const readStream = fs.createReadStream("./docs/large.txt");
const writeStream = fs.createWriteStream("./docs/large-write.txt");

// normal way
readStream.on("data", (data) => {
  writeStream.write(data.toString());
  writeStream.write("---chunk---");
});

//PIPE
readStream.pipe(writeStream);
```
