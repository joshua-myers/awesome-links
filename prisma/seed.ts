import { PrismaClient } from '@prisma/client'
import { links } from '../data/links'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: `testemail@gmail.com`,
            role: 'ADMIN',
        },
    })

    links.map(link => prisma.link.create({ data: link }));
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })