let creditNumber;

do {
  creditNumber = parseInt(prompt("Enter your credit number: "));
} while (creditNumber <= 0);

function credit(creditNumber) {
  let creditString = creditNumber.toString();
  let length = creditString.length;

  if (length !== 15 && length !== 16 && length !== 13) {
    return "Invalid";
  }

  let firstTwoDigits = Number(creditString.slice(0, 2));
  let firstDigit = Number(creditString[0]);

  if (
    firstTwoDigits !== 34 &&
    firstTwoDigits !== 37 &&
    firstTwoDigits !== 51 &&
    firstTwoDigits !== 52 &&
    firstTwoDigits !== 53 &&
    firstTwoDigits !== 54 &&
    firstTwoDigits !== 55 &&
    firstDigit !== 4
  ) {
    return "INVALID";
  }

  let checkSum = 0;

  while (creditNumber > 0) {
    let digit = Math.floor((creditNumber % 100) / 10);
    let product = digit * 2;

    if (product >= 10) {
      product = (product % 10) + Math.floor(product / 10);
    }
    checkSum += product;

    let remainedDigit = creditNumber % 10;
    checkSum += remainedDigit;

    creditNumber = Math.floor(creditNumber / 100);
  }

  if (checkSum % 10 !== 0) {
    return "INVALID";
  }

  if (length === 15 && (firstTwoDigits === 34 || firstTwoDigits === 37)) {
    return "AMEX";
  } else if (
    length === 16 &&
    (firstTwoDigits === 51 ||
      firstTwoDigits === 52 ||
      firstTwoDigits === 53 ||
      firstTwoDigits === 54 ||
      firstTwoDigits === 55)
  ) {
    return "MASTERCARD";
  } else if ((length === 13 || length === 16) && firstDigit === 4) {
    return "VISA";
  } else {
    return "INVALID";
  }
}

console.log(credit(creditNumber));

// 378282246310005 -> AMEX
// 371449635398431 -> AMEX
// 5555555555554444 -> MASTERCARD
// 5105105105105100 -> MASTERCARD
// 4111111111111111 -> VISA
// 4012888888881881 -> VISA
// 5673598276138003 -> INVALID
// 3400000000000620 -> INVALID
