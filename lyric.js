const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const lyrics = [
  { line: "রসূল নামে কে এলো মদিনায়!", delay: 120 },
  { line: "রাসুল নামে। ,", delay: 135 },
  { line: "ওরে আকাশের চন্দ্র কেড়ে", delay: 130 },
  { line: "ও কে আনল দুনিয়ায়।।", delay: 155 },
  { line: "গলেতে তসবীর মালা", delay: 160 },
  { line: "কে চলে ওই কমলিওয়ালা রে ", delay: 130 },
  { line: "-ওরে আমার বুকের দরজা খোলা", delay: 140 },
  { line: "তাঁরে ডেকে নিয়ে আয়।।", delay: 120 },
  { line: "দেখি নাই শুনি নাই কথা", delay: 100 },
  { line: "মাইনষে নাশে মাইনষের ব্যথা রে ", delay: 100 },
  { line: "-ওরে এমনও দরদীর কথা", delay: 100 },
  { line: "শুনলে পরাণও জুড়ায়।।", delay: 100 },
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
