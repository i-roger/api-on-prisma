-> Para gerar o modelo que você criou no SCHEMA.PRISMA
npx prisma generate

-> Para enviar todas as modificações feitas no SCHEMA.PRISMA
npx prisma db push

-> Para rodar aplicação localhost: (As alterações serão feitas no DB!!!!)
*Instalei apenas o ts-node : npx ts-node src/index.ts
npx ts-node-dev --respawn index.ts