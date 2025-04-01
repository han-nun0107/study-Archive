/* 예시 1 */
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj1을 obj2에 복사

obj2.name = "Bob"; // obj2를 수정

console.log(obj1.name); // 결과: "Bob"

/* 예시 2 */
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr1를 arr2에 복사

arr2.push(4); // arr2에 4를 푸시

console.log(arr1); // 결과: [1, 2, 3, 4]

/* 결과롤 봤을 때 copy by value의 경우 각 각 다른 메모리를 사용하여 복사한 값에 값을 추가해도 복사한 곳만 바뀌게 되지만
copy by reference의 경우 다른 메모리를 사용하는 것이 아닌 값이 아예 다른 메모리로 빠져있고 변수가 그 값을 참조하는 것이라 obj1이나 obj의 값을 바꾸면 둘 다 바뀌게 된다. */
/* copy by reference의 경우 원시타입을 제외한 모든 값 즉 객체 타입에 대해서 일어난다.
    ex) object, array, function, map, set ,date 등 */
