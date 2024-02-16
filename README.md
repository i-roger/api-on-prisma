Será necessário instalar as depêndencias abaixo!

@types/express


@types/node


prisma


ts-node


typescript


dotenv


express

################################################################################


-> Configuração do tsconfig.json - Usar a padrão do site do PRISMA

-> Criar modelo no arquivo schema.prisma

-> Gerar modelo que você criou no schema.prisma
npx prisma generate

-> Para enviar todas as modificações feitas no schema.prisma
npx prisma db push

-> Criar o arquivo vercel.json e fazer as devidas configurações para rodar
a API na VERCEL.

-> Após fazer as configurações no site da Vercel
configure o script em package.json para rodar a API na vercel
 "vercel-build": "npx prisma migrate deploy"

 Em caso de Error -> SERVERLESS FUNCTION FAILED
  "vercel-build": "npx prisma generate deploy"


OBSERVAÇÃO :
-> Para rodar aplicação localhost: (As alterações serão feitas no DB!!!!)
npx ts-node src/index.ts OU npx ts-node-dev --respawn src/index.ts

DICA! USAR A EXTENSAO THUNDER CLIENT NO VSCODE
PARA FAZER OS TESTES DE API

SE VOCÊ RODAR A APLICAÇÃO NA VERCEL ANTES DE USAR npx prisma generate,
VOCÊ TERÁ QUE RODAR NO SCRIPT "vercel-build" o seguinte comando "npx prisma generate deploy"
e subir para vercel.
