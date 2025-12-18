const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const lyrics = [
  { line: "তুমি আসো না —", delay: 120 },
  { line: "মন তো বসে না, চাঁদ ওঠে না ,", delay: 135 },
  { line: "আকাশে,,,,,", delay: 130 },
  { line: "মন যে উতলা আমি একেলা আজ চলেছি,,,", delay: 155 },
  { line: "বাতাসে............", delay: 160 },
  { line: "সুখ তো আসে না আমারই ঘরেতে,,,", delay: 130 },
  { line: "তোমারি ছায়া না ছুলে,,,,,,,,", delay: 140 },
  { line: "আলো তো জ্বলে না আধার এ ঘরেতে,,,,", delay: 120 },
  { line: "তোমারি হাসি না পেলে,,,", delay: 100 },
];

async function typeLine(text, speed) {
  for (const ch of text) {
    process.stdout.write(ch);
    await sleep(speed);
  }
  console.log();
}

async function startLyrics() {
  for (const l of lyrics) {
    await typeLine(l.line, l.delay);
    await sleep(400);
  }
}

startLyrics();
