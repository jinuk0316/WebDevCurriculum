function Triangle() {
  const num = parseInt(prompt("삼각형의 줄 수를 입력하세요."), 10);
  for (let i = 1; i <= num; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

Triangle();
