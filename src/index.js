import readline from "readline";
import findPairs from "./components/findPairs/index";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const q = [
  `insert the numbers as follows: [#,#,#,#] : `,
  `insert the number you want to find as a result : `,
];

const AskQuestion = (rl, question) => {
  return new Promise((resolve, rej) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const Ask = (questions) => {
  return new Promise(async (resolve) => {
    let results = [];
    for (let i = 0; i < questions.length; i++) {
      const result = await AskQuestion(rl, questions[i]);
      results = [...results, result];
    }
    rl.close();
    resolve(results);
  });
};

Ask(q).then((q) => {
  const numbers = JSON.parse(q[0]);
  const target = Number(q[1]);
  const pairs = findPairs(numbers, target);
  console.log(q[0]);
  for (const pair of pairs) {
    console.log(`+ ${pair[0]}, ${pair[1]}`);
  }
});
