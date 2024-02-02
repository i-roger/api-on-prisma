Será necessário instalar as depêndencias abaixo!
@types/express
@types/node
prisma
ts-node
typescript
dotenv
express

-> Configuração do TSCONFIG.JSON - Usar a padrão do site do PRISMA

-> Criar o arquivo VERCEL.JSON e fazer as devidas configurações para rodar
a API na VERCEL.




-> Para gerar o modelo que você criou no SCHEMA.PRISMA
npx prisma generate

-> Para enviar todas as modificações feitas no SCHEMA.PRISMA
npx prisma db push

-> Para rodar aplicação localhost: (As alterações serão feitas no DB!!!!)
npx ts-node src/index.ts OU npx ts-node-dev --respawn src/index.ts


DICA! USAR A EXTENSAO THUNDER CLIENT NO VSCODE
PARA FAZER OS TESTES DE API