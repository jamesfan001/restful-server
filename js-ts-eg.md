Converting a Node.js project to TypeScript involves several steps. Here's a step-by-step guide with code examples:

1. Install Dependencies
bash
npm install typescript @types/node --save-dev
npm install ts-node --save-dev  # For direct execution

2. Initialize TypeScript Configuration
bash
npx tsc --init

3. Configure tsconfig.json
json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

4. Update package.json
json
{
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node-dev src/index.ts"
  }
}

5. Convert Files to TypeScript
Original Node.js (index.js):

javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
Converted TypeScript (src/index.ts):

typescript
import express, { Request, Response, Application } from 'express';

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World');
});

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});

6. Add Type Definitions for External Modules
For Express:

bash
npm install @types/express --save-dev

7. Project Structure
project-root/
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
└── package.json
8. Advanced Example with Interfaces
src/models/user.ts

typescript
export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
}

export type UserRole = 'admin' | 'user' | 'guest';

// Implementation example
export class UserAccount implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: UserRole = 'user'
  ) {}
}

9. Build and Run
bash
npm run build  # Compiles to JavaScript
npm start      # Runs compiled code

# Or for development:
npm install ts-node-dev --save-dev
npm run dev    # Live reload development