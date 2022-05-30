

export function compile(dir: string) {
  let out = ''
  const files = Deno.readDirSync(dir);

  for(const filePath of files) {
    out += `// ${filePath.name}\n`
    if(filePath.isDirectory) {
      out += compile(dir+"/"+filePath.name)
    } else {
      out += Deno.readTextFileSync(dir+"/"+filePath.name);
    }
    out += '\n'

  }

  return out
}