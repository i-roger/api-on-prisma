-> Para gerar o modelo que você criou no SCHEMA.PRISMA
npx prisma generate

-> Para enviar todas as modificações feitas no SCHEMA.PRISMA
npx prisma db push

-> Para rodar aplicação:
npx ts-node-dev --respawn index.ts