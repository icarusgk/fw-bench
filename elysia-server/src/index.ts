import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';

const app = new Elysia();

app.use(cors());

app.get('/test', () => 'Hello Elysia')

app.get("/pokemon/:amount", async ({ params: { amount } })  => {
  return await import(`./data/pokemon-${amount}.json`).then(m => m.default || m)
})

app.listen(8080);

console.log(`🦊 Elysia Pokemon server running on port ${app.server?.port}`);
