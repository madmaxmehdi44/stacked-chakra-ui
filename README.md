# FullStack Starterpack

Rename the files `.env.example` and `.env.local.example`, by removing the `.example`'from that filename.

Then go and change the desired database setups in those files.

Make sure you have those following ENV variables set:

- `NEXTAUTH_URL` Can be made via  the command `openssl rand -base64 32` (generates a random base64 string with the length of 32 characters)
