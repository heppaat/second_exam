/* function getRealName(username) {
  let part = "";
  let array = [];
  for (let i = 0; i < username.length; i++) {
    if (username[i] !== ".") {
      part += username[i];
    } else {
      array = [...array, part];
      part = "";
    }
  }
  array = [...array, part];

  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      result += array[i][0].toUpperCase() + array[i].slice(1) + " ";
    } else {
      result += array[i][0].toUpperCase() + array[i].slice(1);
    }
  }
  return result;
} */

function getRealName(str) {
  const swap = (char) => {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < abc.length; i++) {
      if (char === abc[i]) {
        return ABC[i];
      }
    }
    return char;
  };

  let part = "";
  let array = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ".") {
      part += str[i];
    } else {
      array = [...array, part];
      part = "";
    }
  }
  array = [...array, part];

  let result = "";

  for (let i = 0; i < array.length; i++) {
    let capitalizedPart = "";

    if (array[i][0] >= "a" && array[i][0] <= "z") {
      capitalizedPart += swap(array[i][0]);
    } else {
      capitalizedPart += array[i][0];
    }

    for (let j = 1; j < array[i].length; j++) {
      capitalizedPart += array[i][j];
    }

    if (i !== array.length - 1) {
      result += capitalizedPart + "*";
    } else {
      result += capitalizedPart;
    }
  }

  return result;
}

let input = "john.doe.adams";

//console.log(input);
console.log(getRealName(input));

/* let number = 34451201239;

const swap = (char) => {
  const input1 = "0341";
  const output = "OEAl";

  for (let i = 0; i < input1.length; i++) {
    if (input1[i] === char) {
      return output[i];
    }
  }
  return char;
};

function encrypt(number) {
  number = "" + number;
  let result = "";
  for (let i = 0; i < number.length; i++) {
    if (i !== number.length - 1) {
      result += swap(number[i]) + " ";
    } else {
      result += swap(number[i]);
    }
  }
  console.log(result);
}

encrypt(number); */

/* number = number.toString();
  let result = "";
  for (let i = 0; i < number.length; i++) {
    if (i !== number.length - 1) {
      if (number[i] === "0") {
        result += "O" + " ";
      } else if (number[i] === "3") {
        result += "E" + " ";
      } else if (number[i] === "4") {
        result += "A" + " ";
      } else if (number[i] === "1") {
        result += "l" + " ";
      } else result += number[i] + " ";
    } else {
      if (number[i] === "0") {
        result += "O";
      } else if (number[i] === "3") {
        result += "E";
      } else if (number[i] === "4") {
        result += "A";
      } else if (number[i] === "1") {
        result += "l";
      } else result += number[i];
    }
  }
  console.log(result); */

/* let users = [
  { id: 1, name: "Kovacs Bela" },
  { id: 2, name: "Kovacs Lajos" },
  { id: 3, name: "Kovacs Kazmer" },
];

let transactions = [
  { userId: 1, type: "deposit", amount: 100 },
  { userId: 1, type: "deposit", amount: 200 },
  { userId: 1, type: "withdraw", amount: 300 },
  { userId: 2, type: "deposit", amount: 400 },
  { userId: 2, type: "withdraw", amount: 300 },
  { userId: 3, type: "withdraw", amount: 200 },
  { userId: 3, type: "deposit", amount: 100 },
];

let userName = "Kovacs Bela";

const getAllDeposit = (users, transactions, userName) => {
  let result = 0;
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < transactions.length; j++) {
      if (users[i].name === userName) {
        if (
          users[i].id === transactions[j].userId &&
          transactions[j].type === "deposit"
        ) {
          result += transactions[j].amount;
        }
      }
    }
  }
  console.log(result);
};

getAllDeposit(users, transactions, "Kovacs Bela"); */
