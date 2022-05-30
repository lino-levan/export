import { emit } from "https://deno.land/x/emit@0.2.0/mod.ts";

import { compile } from "./mod.ts";

let readDir = './'
let outFile = './out.ts'

if(Deno.args[0]) {
  readDir = Deno.args[0]
}

if(Deno.args[1]) {
  outFile = Deno.args[1]
}

let out = compile(readDir)

await Deno.writeTextFile(outFile, out);

// transpile ts to js
if(outFile.endsWith('js')) {
  const temp = './temp.ts'
  await Deno.writeTextFile(temp, out);
  const result = await emit(temp);
  await Deno.remove(temp);

  out = Object.values(result)[0]

  await Deno.writeTextFile(outFile, out);
}
