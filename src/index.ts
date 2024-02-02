import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = express()
app.use(express.json())

const port = process.env.PORT

app.get("/", async (request, response) => {
    const users = await prisma.pessoas.findMany()
    console.log(users)
    return response.json(users)
})

// (async () => {
//     const removed = await prisma.pessoas.delete({
//             where:{
//                 id: 1
//             }
//     })
//     console.log(removed)
// })();


// (async () => {
//     const users = await prisma.pessoas.create({
//         data:{
//             nome:"not easy 4ever",
//             email:"noteasy@mail.com",
//             celular: "2192452256"
//         }
//     })
//     console.log(users)
// })();

// (async () => {
//     const users = await prisma.pessoas.count()
//     console.log(users)
// })();

// (async () => {
//     const users = await prisma.pessoas.findMany()
//     console.log(users)
// })();

app.listen(port, ()=>{console.log("Server is running on " + port)})