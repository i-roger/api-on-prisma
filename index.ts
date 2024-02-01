import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

// (async () => {
//     const removed = await prisma.pessoas.delete({
//             where:{
//                 id: 1
//             }
//     })
//     console.log(removed)
// })();


(async () => {
    const users = await prisma.pessoas.create({
        data:{
            nome:"Roger",
            email:"i-roger@mail.com",
            celular: 15
        }
    })
    console.log(users)
})();