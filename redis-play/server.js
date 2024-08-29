const express = require('express')
const client = require("./client");

const axios = require('axios').default;

const app = express()
app.get('/' , async (req,res) =>{
    const cv = await client.get('todos');
    if (cv) return res.json(JSON.parse(cv))
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    await client.set('todos' , JSON.stringify(data))
    await client.expire('todos' , 20)
    return res.json(data)
})

app.listen(9000)