/* 호이스팅과TDZ(Temporal Dead Zone) */

/* TDZ란 let과 const로 선언된 변수가 실제 선언되기 전에 접근 할 경우 발생하는 구역이다. */

console.log(x);
var x = 10;
/* 이 경우 console에 undefined라는 값이 생성이 된다. */
/* 이유로는 호이스팅이 되어 그런 것인데 저 것을 풀어서 써보면 이렇다. */

var x;
console.log(x); //undefined
x = 10;
/* 이렇게 선언되기 때문에 undefined가 출력이 되는 것이다. */

/* let과 const의 경우 호이스팅은 되지만 TDZ로 인해 호이스팅이 안되는 것 처럼 보인다. */
console.log(b);
let b = 10;
/* 여기서 어떻게 호이스팅이 되었는지 알 수 있냐?라고 할 수 있는데 에러 코드를 보면 ReferenceError : Cannot access 'b'라는 것을 볼 수 있는데  */
/* 이 에러의 뜻은 변수 b에 접근을 하려 했지만 해당 변수가 초기화 되지 않는 상태임을 나타낸다. 따라서 호이스팅이 되지만 TDZ가 발생 했다는 것을 알 수 있다. */

console.log(c);
const c = 10;
/* 위에 있는 let과 마찬가지로 똑같은 오류가 발생하게 된다. 따라서 const 또한 호이스팅은 되지만 TDZ가 발생 했다는 것을 알 수 있다. */

/* 여기서 let과 const의 차이점으로는 초기화 시점과 재할당 가능성이 있다. */
/* let
    선언 후 나중에 값을 할당할 수 있다.
    let으로 선언한 변수는 나중에 값을 변경할 수 있다. */
/* const
    선언과 동시에 반드시 초기화 되어야 한다.
    const로 선언한 변수는 재할당이 불가능하다. */

/* 즉 const는 선언 즉시 초기화가 필요하고 이후 재할당이 불가능하다는 점에서 차이가 있다. */

/* 따라서 const의 경우 선언 즉시 초기화가 필요하기 때문에 let과 달리 비교적 TDZ에 대해서 신경을 덜 쓸 수 있다. */
