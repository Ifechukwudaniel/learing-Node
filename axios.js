const axios = require("axios")
const username = "CodesDaniel"

axios.get(`https://api.github.com/users/${username}`).then(res=>{
  console.log(res.data.name)
}).catch((err)=>{
    console.log(err)
})