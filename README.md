# Export

This was written specifically for writing web libraries. Deno compile wasn't doing the job I needed it to so here we are. All this does is put all of the files in a directory (regardless of type) into one file.

## Usage

Run in current directory

```bash
deno run --allow-read --allow-write --allow-net --allow-env https://deno.land/x/export/cli.ts
```

Run in another directory

```bash
deno run --allow-read --allow-write --allow-net --allow-env https://deno.land/x/export/cli.ts ./test/basic
```

Run in another directory and set out

```bash
deno run --allow-read --allow-write --allow-net --allow-env https://deno.land/x/export/cli.ts ./test/basic ./test/temp/basic.ts
```
