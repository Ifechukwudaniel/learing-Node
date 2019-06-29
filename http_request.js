const https = require("https")
const fs = require("fs")

const url = "https://jsonplaceholder.typicode.com/posts"

https.get(url,res=>{
    res.setEncoding("utf8")

    let body = ""

    res.on("data",data=>{
        body+= data
    })

    res.on("end" , ()=>{
        fs.writeFile("data.json",body,err=>{
            if(err) return err
            console.log("writing file")
            body = JSON.parse(body)
            for (const element of body) {
                console.log(`Title : ${element.title}`)
                console.log(`Body: ${element.body} \n`) 
            }
               
        })

    })
})