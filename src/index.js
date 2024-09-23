/* Ебусь тут со стеком. А решение гораздо проще оказалось
function check(str, bracketsConfig) {
  let openBrackets = bracketsConfig.map((el) => el[0]);
  let closeBrackets = bracketsConfig.map((el) => el[1]);
  let stack = [];
  let arr = str.split("");
  let i = -1;
  arr.forEach((el) => {
    if (openBrackets.includes(el)) stack.push(el);
    else {
      if (closeBrackets.includes(el)) {
        if (stack[stack.length - 1] === openBrackets[closeBrackets.indexOf(el)])
          stack.pop();
      }
    }
  });
  return !stack.length ? true : false;
} */

module.exports = function check(str, bracketsConfig) {
  //слепили попарно "скобки"
  let b = bracketsConfig
    .map((el) => el.join("")) //склеиваем попарно скобки
    .some((el) => {
      //ищем хоть одну пару в строке
      if (str.includes(el)) {
        //если есть пара
        str = str.replace(el, ""); //удалеем ее
        return true; //возвращаем истину
      }
      return false; //нет пары, возвращаем ложь
    });
  //если строка пустая, значит все пары найдены, возвращаем истину,
  //если в строке что то осталось, проходим по ней еще раз
  return str.length == 0 ? true : b ? check(str, bracketsConfig) : false;
};
/* 
const config1 = [["(", ")"]];
const config2 = [
  ["(", ")"],
  ["[", "]"],
];
const config3 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const config4 = [["|", "|"]];
const config5 = [
  ["(", ")"],
  ["|", "|"],
];
const config6 = [
  ["1", "2"],
  ["3", "4"],
  ["5", "6"],
  ["7", "7"],
  ["8", "8"],
];
const config7 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
  ["|", "|"],
];

console.log(1, check("()", config1), true); // true

console.log(2, check("((()))()", config1), true); // true

console.log(3, check("())(", config1), false); // false

console.log(4, check("([{}])", config3), true); // true

console.log(5, check("[(])", config2), false); // false

console.log(6, check("[]()", config2), true); // true

console.log(7, check("[]()(", config2), false); // false

console.log(8, check("||", config4), true); // true

console.log(9, check("|()|", config5), true); // true

console.log(10, check("|(|)", config5), false); // false

console.log(11, check("|()|(||)||", config5), true); // true

console.log(
  12,
  check(
    "111115611111111222288888822225577877778775555666677777777776622222",
    config6
  ),
  true
); // true

console.log(
  13,
  check(
    "5555512575557777777555566667888888667661133833448441111222233333444442266666",
    config6
  ),
  false
); // false

console.log(
  14,
  check(
    "8888877878887777777888888887777777887887788788887887777777788888888887788888",
    config6
  ),
  false
); // false

console.log(
  15,
  check(
    "111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222",
    config6
  ),
  true
); // true

console.log(16, check("[]][[]", config3), false); // false

console.log(17, check("[]][[]", config2), false); // false

console.log(
  18,
  check(
    "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()",
    config7
  ),
  false
); // false

console.log(
  19,
  check(
    "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())",
    config7
  ),
  true
); // true

console.log(
  20,
  check(
    "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))",
    config7
  ),
  true
); // true
 */
