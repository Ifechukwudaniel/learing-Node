//console.log(process.argv)

// const user = process.argv.indexOf("--user")

// console.log( user+1)

// console.log( process.argv[user+1] )

process.stdout.write(" ask me a quetion : ")

process.stdin.on("data",(answer)=>{
    console.log(answer.toString().trim())
    process.exit();
} )