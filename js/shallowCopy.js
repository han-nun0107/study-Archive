let original = {
  name: "홍길동",
  age: 30,
  family: ["아버지", "어머니"],
};

let shallowCopy1 = { ...original };

/* assign()메서드 = assign(대상,원본) -> 원본의 객체의 속성 들을 대상 객체에 복사 
    대상이 a:1이고 원본이 b:2, c:3 이라면 결과 값은 a:1,b:2,c:3이 된다.*/
let shallowCopy2 = Object.assign({}, original);

shallowCopy1.family.push("나");
/* 배열(참조형 reference) - 객체 배열 함수 날짜 Map/Set 등
    얕은 복사에도 이 배열을 복사하는 것이 아닌 같은 배열 주소를 공유함.
    참조형은 '주소만' 복사해서 둘이 연결되어 있음.*/
console.log("원본:", original);

console.log("얕은 복사본1:", shallowCopy1);
/* 숫자 (primitive 타입) - 숫자 문자열 불리언 null undefiend 심볼 bigint
    얕은 복사를 할 때는 값 자체를 복사해서 새로운 값으로 저장
    기본형은 값 자체를 복사해서 독립적임.*/
shallowCopy1.age = 31;

console.log("원본:", original);

console.log("얕은 복사본1:", shallowCopy1);

/* copy by reference와 비슷한 느낌 */
