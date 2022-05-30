import { compile } from "./mod.ts";

let readDir = './'
let outFile = './out.ts'

if(Deno.args[0]) {
  readDir = Deno.args[0]
}

if(Deno.args[1]) {
  outFile = Deno.args[1]
}


const out = compile(readDir)

await Deno.writeTextFile(outFile, out);
