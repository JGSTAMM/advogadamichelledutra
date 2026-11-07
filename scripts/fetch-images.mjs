import fs from "node:fs";
import https from "node:https";

fs.mkdirSync("public/images", { recursive: true });
const files = [
  "brasao-michelle-dutra.png",
  "dra-michelle-apresentacao.png",
  "dra-michelle-dutra.png",
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on("finish", () => stream.close(resolve));
    }).on("error", reject);
  });
}

for (const file of files) {
  const dest = `public/images/${file}`;
  if (!fs.existsSync(dest)) {
    await download(
      `https://raw.githubusercontent.com/JGSTAMM/advogadamichelledutra/main/public/images/${file}`,
      dest
    );
    console.log(`Downloaded ${dest}`);
  }
}
