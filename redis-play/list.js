const client = require("./client");

async function init() {
  // LPUSH operations
  const res1 = await client.lpush('bikes:repairs', 'bike:1');
  console.log(res1);  // 1

  const res2 = await client.lpush('bikes:repairs', 'bike:2');
  console.log(res2);  // 2

  // RPOP operation
  const res3 = await client.rpop('bikes:repairs');
  console.log(res3);  // bike:1

  // ZADD operations
  const res4 = await client.zadd('racer_scores', 10, 'Norem');
  console.log(res4);  // 1

  const res5 = await client.zadd('racer_scores', 12, 'Castilla');
  console.log(res5);  // 1
}

init();
