/* copy by value */
let original = "original";
let copy = "original";

console.log(original);
console.log(copy);
console.log(original === copy);
console.log("----------------------------------");

copy += "copy";
console.log(original);
console.log(copy);
console.log(original === copy);
/* copy by value란 기본형 데이터(Number, String, Bollean, Undefined, Null, Symbol, Bigint)을 변수에 할당 할 때, 그 값 자체가 복사되어 저장 */
/* 변수끼리 값이 독립적으로 존재하기 때문에 변수의 값을 변경해도 다른 변수에 영향을 주지 않음 */
/* 위 코드에서 copy에 문자열을 추가해도 original은 변하지 않는 이유가 이 때문이다. */

/* copy by reference */
let originalObj = {
  name: "name",
  value: "value",
};
let copyObj = originalObj;

console.log(originalObj);
console.log(copyObj);
console.log(originalObj === copyObj);

originalObj["team"] = "team";
console.log(originalObj);
console.log(copyObj);
console.log(originalObj === copyObj);
/* copy by reference의 경우 객체는 값 자체가 복사되는 것이 아닌 객체의 주소가 복사가 된다. */
/* 하나의 객체를 여러 번수에 할당하면 모든 변수는 같은 객체를 참조하게 되어 어느 한 쪽에서 객체의 값을 변경하게 되면 다른 쪽에서도 내용이 바뀌게 된다. */
