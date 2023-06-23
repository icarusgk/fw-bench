# fw-bench
![Benchmark](https://github.com/icarusgk/fw-bench/assets/38413630/31508750-f497-4ccb-ab48-99b2d8343962)

Steps for running the benchmark

1. Install [oha](https://github.com/hatoo/oha)

2. (optional if testing dynamic pages) Start the Elysia Server

```bash
cd elysia-server
bun install
bun run dev
```

2. The base Next (app, pages) and Nuxt dirs contains only

```html
<main>Hello World!</main>
```

3. The other dirs have the following dynamic routes

```ruby <~ For better syntax highlighting, ignore --> 
/pokemon/:amount # => 100|200|500|1000|1500
/tags/:n # => any n amount of tags you want rendered
```

4. Build and start the apps

I've been running 
- Nuxt 3 on port `3000`
- Next.js 13 `app dir` on port `3001`
- Next.js 13 `pages dir` on port `3002`

```bash
# Nextjs app dir
pnpm run build && pnpm run start --port 3001

# Nextjs pages dir
pnpm run build && pnpm run start --port 3002

# Nuxt 3
pnpm run build && pnpm run preview
```


5. Run oha
```bash
oha -z 10s <url>
```

6. Document your results
