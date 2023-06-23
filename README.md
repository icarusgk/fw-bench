# fw-bench

Steps for running the benchmark

1. Install [oha](https://github.com/hatoo/oha)

2. Start the Elysia Server

```bash
cd elysia-server
bun install
bun run dev
```

2. The base Next (app, pages) and Nuxt dirs contain only

```html
<main>Hello World!</main>
```

3. The other dirs have the following routes

```ruby <~ For better syntax highlighting, ignore --> 
/pokemon/:amount # => 100|200|500|1000|1500
/tags/:n # => any n amount of tags you want rendered
```

4. build and start the apps

I've been running 
- Nuxt on port 3000
- Nextjs (app) on port 3001
- Nextjs (pages) on port 3002

```bash
# Nextjs app dir
pnpm run build && pnpm run start --port 3001

# Nextjs pages dir
pnpm run build && pnpm run start --port 3002

# Nuxt 3
pnpm run build && pnpm run preview
```


5. Run oha
```zsh
oha -z 10s {url}
```

6. Document your results