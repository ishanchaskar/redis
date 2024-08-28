const client = require("./client")

async function init(){
     await client.set("user:4" , "new");
    const result2 = await client.get("user:4")
    console.log(result2)
}
init();