# Web FullStack Starterpack

## TL-DR;
This is a starterpack which includes [ReactJs](https://reactjs.org/), [tRPC](https://trpc.io/), [Prisma](https://www.prisma.io/), [NextJs](https://nextjs.org/), [Next-Auth](https://next-auth.js.org/), [Next-SEO](https://github.com/garmeeh/next-seo) & [Chakra-UI](https://chakra-ui.com/).

## Deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foezguerisbert%2Fweb-fullstack-starter&env=NEXTAUTH_URL,DATABASE_URL&demo-title=Web-FullStack-Starter&demo-description=This%20is%20a%20starterpack%20with%20ReactJs%2C%20tRPC%2C%20Prisma%2C%20NextJs%2C%20Next-Auth%2C%20Next-SEO%20%26%20Chakra-UI&skippable-integrations=1)

## Requirements

- Please install [Yarn](https://yarnpkg.com/getting-started/install) as the package manager.
- Make sure you have these following [Environtment](./example.env) variables set:
  - `NEXTAUTH_URL` Can be made via the command `openssl  rand -base64 32` (generates a random base64 string with the length of 32 characters)
  - `DATABASE_URL`

### Local development

- Make sure [Docker](https://www.docker.com/get-started/) and [Docker-Compose](https://docs.docker.com/compose/install/) is installed.
- Make sure you have these following [Environtment](./example.env.local) variables set:
  - `POSTGRES_USER`
  - `POSTGRES_PASSWORD`
  - `POSTGRES_DB`

## How to use the template?

1. Click the `Use this template` button, create a repository with it.
2. Clone the repository, and run the command `yarn`.
    - This will install all necessary dependencies.
3. Setup [tRPC](https://trpc.io/) routes on the [src/server/routers/merge.ts](./src/server/routers/merge.ts) file (via `.merge`)