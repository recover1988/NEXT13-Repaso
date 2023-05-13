This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Next 13

Por default todos los componentes son renderizados desde el servidor (server side rendering). Para indicar que se renderiza desde el cliente podemos usar la etiqueta `"use client"`.
La etiqueta de `"use client"` se usa en los componentes que manejan estados y hook.

## Cuando usar server component y cuando client component

```
https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components
```

To simplify the decision between Server and Client Components, we recommend using Server Components (default in the app directory) until you have a use case for a Client Component.

```
Server Component
- Fetch data.
- Access backend resources (directly)
- Keep sensitive information on the server (access tokens, API keys, etc)
- Keep large dependencies on the server / Reduce client-side JavaScript

Client Component
- Add interactivity and event listeners (onClick(), onChange(), etc).
- Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc).
- Use browser-only APIs.
- Use custom hooks that depend on state, effects, or browser-only APIs.
- Use React Class components.
```

## Rutas

Para crear las rutas NextJS usa el file system y las `page.tsx` para declarar las que es una pagina publica.

