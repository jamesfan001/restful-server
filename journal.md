01/26/2026
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

git remote set-url origin git@github.com:jamesfan001/restful-server.git
git branch -M main
git push -u origin main

git fetch  // fetch changes in main branch

//setup type script configuration
npx tsc --init
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "resolveJsonModule": true,
    "baseUrl": ".",
    "paths": {
      "": ["node_modules/", "src/types/*"]
    }
  },
  "include": ["src//*"],
  "exclude": ["node_modules"]
}

