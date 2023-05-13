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
Para crera rutas dinamicas simplemente usamos los corchetes `[algunID]` con el nombre del param. luego se puede usar:

```
import React from "react";

const page = ({ params }: { params: { postId: string } }) => {
    return <div>{params.postId}</div>;
};

export default page;
```

Definimos el params.

## page.tsx

Para definir una ruta publica solamente agregamos el archivo `page.tsx`

```
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>;
}
```

```
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>;
}
```

## layout.tsx

Definimos en este componenet una capa que sera usada por las demas rutas que compartan de esta. Se define una interfaz que se compartira entre las rutas hijas.

```
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
```

## loading.tsx

Se puede agregar una UI adentro de este loading incluido un esqueleto o un component loading normal.

```
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />;
}
```

## error.tsx

Para manejar errores que pueda ocurrir podemos usar este archivos e indicar que se puede resetear para re renderizar el componente mediante un boton.

```
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

## DATA FETCHING

Hay 3 formas en nextjs:

1. Server Side Rendering (SSR)
2. Static Site Generation (SSG)
3. Incremental Static Generation (ISR)

## SEO & metadata

Se puede generar de forma estatica o dinamica:

### Estatica

simplemente en la `page.tsx` exportamos una constante llamada metadata:

```
export const metadata = {
  title: 'Home'
}
```

Y seria algo asi

```
<head>
  <title>Home</title>
</head>
```

### Dinamica

```
export async function generateMetadata({params, searchParams}){
  const product = await getProduct(params.id);
  return {title: product.title};
}
```
