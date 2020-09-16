const quiz = [
  {
    question:
      "2020年9月の「PYPL PopularitY of Programming Language」で公開されているプログラミング言語の人気ランキング1位はなんでしょう？",
    answers: ["Javascript", "Go", "Python", "Java"],
    correct: "Python",
  },
  {
    question:
      "1995年に誕生し、Webサイト上でのバナー広告表示や写真のスライドなど、Webページに動きをつける際に使用されるプログラミング言語はなんでしょう？",
    answers: ["Ruby", "Javascript", "Swift", "PHP"],
    correct: "Javascript",
  },
  {
    question:
      "2009年にGoogleがソフトウェア開発の生産性や拡張性向上を目的として開発したプログラミング言語はなんでしょう？",
    answers: ["Kotlin", "C/C++", "Go", "GooglePro"],
    correct: "Go",
  },
  {
    question: "Javascriptのフレームワークのうち、正しいのはどれでしょう？",
    answers: ["Avg.js", "Pan.js", "Node.js", "Mmo.js"],
    correct: "Node.js",
  },
  {
    question:
      "2020年9月現在、プログラミングスクール「TECH CAMP」で学習できる主なプログラミング言語はどれでしょう？",
    answers: ["Python", "PHP", "Java", "Ruby,Ruby on Rails"],
    correct: "Ruby,Ruby on Rails",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert("正解！");
    score++;
  } else {
    alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
