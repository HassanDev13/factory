![1](https://github.com/HassanDev13/factory/assets/48941486/21a1f449-b756-4c1a-b5d3-ff4ab63da73b)
![2](https://github.com/HassanDev13/factory/assets/48941486/61271a77-2ab1-46aa-882c-4b6279ed5be0)
# How to start the project

open the project and run

```bash
pnpm install
```

we need to run supabase local**l**y , run 

```bash
pnpm supabase start
```

This takes time on your first run because the CLI needs to download the **Docker images** to your local machine. The CLI includes the entire Supabase toolset, and a few additional images that are useful for local development (like a local **SMTP** server and a database diff tool).

The local development environment includes Supabase Studio, a graphical interface for working with your database, running by default on [localhost:54323](http://localhost:54323/).

then you will see 

![Screenshot from 2024-02-11 19-32-43](https://github.com/HassanDev13/factory/assets/48941486/fb8a8064-5d16-4223-9e54-413514a44202)

then create env.local file and replace it with your own

```bash
NEXT_PUBLIC_SUPABASE_URL=*****DB URL HERE******

NEXT_PUBLIC_SUPABASE_ANON_KEY=*****ANON KEY HERE*****
```

Run migrations and seeders

```bash
pnpm supabase db reset
```

To stop supabase 

When you are finished working on your supabase project, you can stop the stack with:

```bash
pnpm supabase stop
```

Resources

[Local Development | Supabase Docs](https://supabase.com/docs/guides/cli/local-development)
