let original = {
  name: "홍길동",
  age: 30,
  family: ["아버지", "어머니"],
  address: {
    city: "서울",
    zipcode: "12345",
  },
};

/* JSON으로 변환했다가 다시 객체로 되돌리기 
    깊은 복사 방법
    안에 있는 배열, 객체까지 전부 새로 만들어 줌
    따라서 원본과 복사본이 서로 영향을 주지 않음*/
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.family.push("나");
deepCopy.address.city = "부산";

console.log("원본:", original);

console.log("깊은 복사본:", deepCopy);

/* copy by value와 비슷한 느낌 */
