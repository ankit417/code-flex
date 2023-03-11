/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var romans = s.split("");
  var nums = [];
  var result = 0;
  var LI = 0;
  while (LI < romans.length) {
    if ("IXCLDMV".includes(romans[LI])) {
      switch (romans[LI]) {
        case "I":
          if ("VX".includes(romans[LI + 1])) {
            if (romans[LI + 1] === "V") {
              nums.push(4);
            } else {
              nums.push(9);
            }
            LI += 2;
          } else {
            nums.push(1);
            LI++;
          }
          break;
        case "X":
          if ("LC".includes(romans[LI + 1])) {
            if (romans[LI + 1] === "L") {
              nums.push(40);
            } else {
              nums.push(90);
            }
            LI += 2;
          } else {
            nums.push(10);
            LI++;
          }
          break;
        case "C":
          if ("DM".includes(romans[LI + 1])) {
            if (romans[LI + 1] === "D") {
              nums.push(400);
            } else {
              nums.push(900);
            }
            LI += 2;
          } else {
            nums.push(100);
            LI++;
          }
          break;
        case "V":
          nums.push(5);
          LI++;
          break;
        case "L":
          nums.push(50);
          LI++;
          break;
        case "D":
          nums.push(500);
          LI++;
          break;
        case "M":
          nums.push(1000);
          LI++;
          break;
        default:
          return 0;
      }
    }
  }
  console.log("nums", nums);
  nums.map((item) => {
    result += item;
  });
  return result;
};

console.log(romanToInt("MCMXCIV"));
