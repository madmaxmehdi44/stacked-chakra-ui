#!/usr/bin/env zx

import { existsSync, writeFileSync } from "fs";
import path from "path";

const checkEnvFiles = {
  ".env": `DATABASE_URL="${
    process.env.DATABASE_URL ?? "postgresql://root:root@localhost:5432/mydatabase?schema=public"
  }"\nNEXTAUTH_SECRET="${(process.env.NEXTAUTH_SECRET ?? (await quiet($`openssl  rand -base64 32`)))
    .toString()
    .replace("\n", "")}"\nNEXTAUTH_URL="${process.env.NEXTAUTH_URL ?? "http://localhost:3000/"}"`,
  ".env.local": `POSTGRES_USER="root"
POSTGRES_PASSWORD="root"
POSTGRES_DB="mydatabase"`,
};

Object.entries(checkEnvFiles).forEach(([f, value]) => {
  if (!existsSync(path.join(process.cwd(), f))) {
    writeFileSync(path.join(process.cwd(), f), value);
  }
});
