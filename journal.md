https://www.typescripttutorial.net/typescript-express/setup-express-with-typescript/
npm init -y
npm install --save express@latest
npm i -D @types/express @types/node
npm install cors
npm install dotenv
add   "type": "module" in package.json
 "scripts": {
    "start": "npx tsx --env-file=.env --watch  src/index.ts"
  },
create src folder
create index.ts
Create an .env file in the project directory and set the port to 3000:
create a .gitignore -> .env node_modulex
