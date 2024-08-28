const client = require("./client")
async function init(){
const res1 = await client.lpush('bikes:repairs', 'bike:1');
console.log(res1);  // 1

const res2 = await client.lpush('bikes:repairs', 'bike:2');
console.log(res2);  // 2

const res3 = await client.rpop('bikes:repairs');
console.log(res3);  // bike:1
}
init();