let isItX = true;
let Xcounter = 0;
let Ocounter = 0;
let numberOfSides = 0;
let counter = [];

const isIt = (event) => {
  const $target = $(event.currentTarget);
  if (isItX === true) {
    $target.text("X");
    isItX = false;
  } else if (isItX === false) {
    $target.text("O");
    isItX = true;
  }
  checkWinner(event);
  if (isItX === true) {
    $("#turn").text("X's turn");
  }
  if (isItX === false) {
    $("#turn").text("O's turn");
  }
};

const isFilled = (event) => {
  const $target = $(event.currentTarget);
  if ($target.text() !== "") {
  } else if ($target.text() === "") {
    isIt(event);
  }
};

const checkWinner = (event) => {
  const $target = $(event.currentTarget);
  const result = checkHorizontal(event);
  const result2 = checkVertical(event);
  const result3 = checkDiagonal(event);
  if (result !== "") {
    alert(result);
    render();
  }
  if (result2 !== "") {
    alert(result2);
    render();
  }
  if (result3 !== "") {
    alert(result3);
    render();
  }
  if (checkfull()) {
    alert("Draw, Press Reset");
  }
};

const checkfull = () => {
  let checkcounter = 0;
  for (let i = 1; i < numberOfSides * numberOfSides + 1; i++) {
    if ($(`#${i}`).text() !== "") {
      checkcounter += 1;
    }
  }
  if (checkcounter === numberOfSides * numberOfSides) {
    return true;
  }
  return false;
};

const checkHorizontal = (event) => {
  const $target = $(event.currentTarget);
  const position = $target.attr("id");
  const row = Math.ceil(position / numberOfSides);
  let horizontalCounterX = 0;
  let horizontalCounterO = 0;
  for (let i = 0; i < numberOfSides; i++) {
    if ($(`#${counter[row - 1] + i}`).text() === "X") {
      horizontalCounterX += 1;
    }
    if ($(`#${counter[row - 1] + i}`).text() === "O") {
      horizontalCounterO += 1;
    }
  }

  if (horizontalCounterX === numberOfSides) {
    Xcounter += 1;
    return "X Win!";
  }

  if (horizontalCounterO === numberOfSides) {
    Ocounter += 1;
    return "O Win!";
  }

  return "";
};

const checkVertical = (event) => {
  const $target = $(event.currentTarget);
  const position = $target.attr("id");
  const col =
    position - numberOfSides * (Math.ceil(position / numberOfSides) - 1);
  let verticalCounterX = 0;
  let verticalCounterO = 0;
  for (let i = 0; i < numberOfSides; i++) {
    if ($(`#${col + i * numberOfSides}`).text() === "X") {
      verticalCounterX += 1;
    }
    if ($(`#${col + i * numberOfSides}`).text() === "O") {
      verticalCounterO += 1;
    }
  }
  if (verticalCounterX === numberOfSides) {
    Xcounter += 1;
    return "X Win!";
  }

  if (verticalCounterO === numberOfSides) {
    Ocounter += 1;
    return "O Win!";
  }

  return "";
};

const checkDiagonal = () => {
  let diagonalCounterX1 = 0;
  let diagonalCounterO1 = 0;
  let diagonalCounterXN = 0;
  let diagonalCounterON = 0;
  if ($(`#${counter[0]}`).text() === "X") {
    {
      diagonalCounterX1 += 1;
    }
  }
  if ($(`#${counter[0]}`).text() === "O") {
    {
      diagonalCounterO1 += 1;
    }
  }
  console.log(counter);
  console.log(numberOfSides);
  for (let i = 1; i < numberOfSides; i++) {
    // 1 5 9

    if ($(`#${counter[0] + (numberOfSides + 1) * i}`).text() === "X") {
      diagonalCounterX1 += 1;
    }
    if ($(`#${counter[0] + (numberOfSides + 1) * i}`).text() === "O") {
      diagonalCounterO1 += 1;
    }
  }

  for (let i = 0; i < numberOfSides; i++) {
    // 3 5 7
    if ($(`#${counter[0] + (numberOfSides - 1) * (i + 1)}`).text() === "X") {
      diagonalCounterXN += 1;
    }
    if ($(`#${counter[0] + (numberOfSides - 1) * (i + 1)}`).text() === "O") {
      diagonalCounterON += 1;
    }
  }

  if (
    diagonalCounterX1 === numberOfSides ||
    diagonalCounterXN === numberOfSides
  ) {
    Xcounter += 1;
    return "X Win!";
  }

  if (
    diagonalCounterO1 === numberOfSides ||
    diagonalCounterON === numberOfSides
  ) {
    Ocounter += 1;
    return "O Win!";
  }

  return "";
};

const printX = (event) => {
  const $target = $(event.currentTarget);
  isFilled(event);

  //isIt(event);
  $target.css("font-size", "90px");
  $target.css("text-align", "center");
  $target.css("display", "flex");
  $target.css("align-items", "center");
  $target.css("justify-content", "center");
  $target.css("flex-direction", "column");
  $target.css("overflow", "hidden");
};

const generateBoard = () => {
  const $body = $("body");
  numberOfSides = parseInt($("#input1").val());
  console.log(numberOfSides);
  counter = [];
  for (let i = 0; i < numberOfSides; i++) {
    counter.push(1 + numberOfSides * i);
  }
  console.log(counter);

  for (let i = 300; i < 300 + numberOfSides; i++) {
    const $div = $("<div>");
    $body.append($div.addClass("gameBoard").attr("id", `${i}`));
    for (let j = counter[i - 300]; j < counter[i - 300] + numberOfSides; j++) {
      const $div = $("<div>");
      $(`#${i}`).append(
        $div.addClass("gameBox").on("click", printX).attr("id", j)
      );
    }
  }
};

const render = () => {
  const $body = $("body");
  $body.empty();
  //isItX = true;
  $body.append($("<h1>").text("Tic Tac Toe"));
  $body.append(
    $("<button>")
      .text("Reset Game")
      .on("click", render)
      .css("background-color", "pink")
  );
  $body.append($("<button>").text(`Player X score is ${Xcounter}`));
  $body.append($("<button>").text(`Player O score is ${Ocounter}`));
  $body.append(
    $("<button>").attr("id", "turn").css("background-color", "lightgreen")
  );
  $body.append(
    $("<input>").attr({
      id: "input1",
      type: "number",
      placeholder: "No of sides",
    })
  );
  $body.append(
    $("<button>").attr("id", "input2").text("Sides").on("click", generateBoard)
  );
  if (isItX === true) {
    $("#turn").text("X's turn");
  }
  if (isItX === false) {
    $("#turn").text("O's turn");
  }
};

const main = () => {
  render();
};

$(main);
