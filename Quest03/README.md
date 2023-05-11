# Quest 03. 자바스크립트와 DOM

## Introduction

- 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics

- 자바스크립트의 역사
- 기본 자바스크립트 문법
- DOM API
  - `document` 객체
  - `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  - 기타 DOM 조작을 위한 함수와 속성들
- 변수의 스코프
  - `var`, `let`, `const`

## Resources

- [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
- [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
- [Just JavaScript](https://justjavascript.com/)

## **Checklist**

- **자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?**

자바스크립트는 초기 버전부터 지금까지 지속적으로 발전해 왔습니다.

이전 버전들은 새로운 기능이 추가되고 기존 기능들이 개선되면서 현재의 모습으로 이어졌습니다.

- **1995년**에 최초로 발표된 자바스크립트는 브라우저에서 동적으로 웹 페이지를 제어하는 데 사용되었습니다. 그러나 초기 버전은 기능이 제한되어 있었습니다.
- **1997년**에는 ECMAScript 1 (ES1)이 발표되어 자바스크립트의 첫 번째 표준 규격으로 채택되었습니다. 이 버전에서는 for-in 루프, try-catch문, 함수 호출시 인자 전달 등과 같은 기능이 추가되었습니다. 그 후 ECMAScript 2 (ES2)와 ECMAScript 3 (ES3)이 발표되었는데, ES3은 지금까지 가장 많이 사용되는 버전 중 하나입니다. ES3에서는 정규 표현식, JSON (JavaScript Object Notation), strict 모드 등과 같은 많은 기능들이 추가되었습니다
- **2009년**에는 ECMAScript 5 (ES5)가 발표되어 자바스크립트의 기능이 크게 개선되었습니다. 이 버전에서는 새로운 배열 메서드, JSON 지원, 엄격 모드 등과 같은 기능들이 추가되었습니다.
- **2015년**에는 ECMAScript 6 (ES6, 또는 ECMAScript 2015)가 발표되어 더욱 큰 변화가 있었습니다. 이 버전에서는 화살표 함수, 클래스, 모듈, Promise, let과 const 키워드 등과 같은 많은 기능들이 추가되었습니다. 또한 ES6부터는 매년 새로운 버전이 발표되는데, 이러한 버전들은 ECMAScript Next라고 불리며 ES7, ES8, ES9, ES10 등이 있습니다. 최신 버전인 ECMAScript 2022 (ES2022)에서는 매우 유용한 기능들이 추가되었습니다. 이 버전에서는 메서드 파이프라인 연산자, null 병합 연산자, 공백 문자열 함수, Promise.allSettled 등과 같은 기능들이 추가되었습니다.

자바스크립트는 버전별로 지속적으로 발전해 왔으며, 새로운 기능들이 추가됨에 따라 개발자들은 더욱 쉽게 코드를 작성할 수 있게 되었습니다.

- **자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?**

ES5, ES6, ES2016, ES2017 등은 ECMAScript의 버전을 가리키는 용어입니다.

ECMAScript는 자바스크립트를 포함하는 스크립트 언어의 규격을 정의하는 표준화 기구입니다.

ES5는 2009년에 발표된 ECMAScript 5라는 버전을 가리킵니다.

이 버전에서는 객체 프로퍼티 정의, 엄격 모드, JSON 지원 등과 같은 기능들이 추가되었습니다.

ES6는 2015년에 발표된 ECMAScript 6라는 버전을 가리킵니다.

이 버전에서는 클래스, 화살표 함수, let/const 키워드, Promise 등과 같은 많은 기능들이 추가되었습니다.

ES2016, ES2017 등은 ES6 이후의 버전을 가리키는 용어입니다.

ES2016에서는 지수 연산자, 배열 includes 메소드 등과 같은 기능이 추가되었고, ES2017에서는 async/await 키워드, Object.values/Object.entries 메소드 등과 같은 기능이 추가되었습니다.

- **자바스크립트의 표준은 어떻게 제정될까요?**

자바스크립트의 표준은 ECMA International에서 제정됩니다.

ECMA International은 정보통신 기술 표준을 제정하는 비영리 표준화 기구입니다.

ECMA International은 ECMAScript라는 이름으로 자바스크립트 언어의 표준 규격을 제정합니다.

ECMAScript 표준은 보통 ECMA-262라는 이름으로 불리며, 이 규격은 자바스크립트 엔진 개발자들에게 중요한 지침을 제공합니다.

ECMA-262는 년도별로 번호가 붙은 버전으로 발표됩니다. 각 버전은 ECMAScript의 새로운 기능을 포함하고 있으며, 이전 버전의 기능들을 보완하거나 개선하기도 합니다. 예를 들어, ECMAScript 2015(또는 ES6)에서는 let/const, 화살표 함수, 클래스 등과 같은 새로운 기능들이 추가되었습니다.

ECMA-262 표준은 ECMA Technical Committee 39에서 관리합니다. 이 위원회는 자바스크립트 언어의 표준화를 총괄적으로 담당하며, 새로운 기능을 제안하고 기존 기능의 수정/개선에 대한 의견을 제시합니다. 표준화 과정에서는 다양한 이해관계자들의 의견을 수렴하며, 이를 바탕으로 규격을 개정합니다.

- **자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?**

자바스크립트는 C, Java, Python 등과 같은 다른 프로그래밍 언어와 비교했을 때 몇 가지 특징적인 문법적 특징이 있습니다.

- **동적 타입 지정 언어**: 자바스크립트는 동적 타입 지정 언어입니다. 변수의 타입을 미리 선언하지 않고, 실행 시간에 변수가 가지는 값의 타입에 따라 자동으로 타입이 지정됩니다. 이로 인해 유연하게 코드를 작성할 수 있습니다.
- **프로토타입 기반 객체 지향 언어**: 자바스크립트는 객체 지향 언어이며, 다른 언어와는 달리 클래스가 없이 프로토타입 기반 객체 지향 언어입니다. 객체를 만들기 위해 클래스를 먼저 정의하지 않고, 이미 존재하는 객체를 기반으로 새로운 객체를 생성할 수 있습니다.
- **함수가 일급 객체**: 자바스크립트에서 함수는 일급 객체입니다. 즉, 변수에 할당할 수 있고, 함수의 인자로 전달하거나, 함수의 반환 값으로 사용할 수 있습니다.
- **콜백** **함수**: 자바스크립트에서는 함수를 다른 함수의 인자로 전달할 수 있는데, 이를 콜백 함수라고 합니다. 이를 활용하면 비동기 처리를 효과적으로 할 수 있습니다.
- **간결한** **문법**: 자바스크립트는 다른 언어에 비해 문법이 간결합니다. 변수를 선언할 때 var, let, const와 같은 키워드를 사용하고, 함수를 정의할 때 function 키워드를 사용합니다. 이러한 문법적 특징은 코드를 더욱 간결하고 읽기 쉽게 만들어 줍니다.
- **느슨한 문법** **규칙**: 자바스크립트는 다른 언어에 비해 문법 규칙이 느슨합니다. 세미콜론(;)을 사용하지 않아도 코드가 동작하며, 중괄호({})의 위치 등도 유연하게 처리됩니다. 이는 유연성을 제공하지만, 오타나 실수로 인한 버그를 발생시키기 쉽기도 합니다. 따라서 자바스크립트 개발자들은 코딩 스타일을 통일하여 코드 가독성을 높이는 것이 중요합니다.

- **자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?**

자바스크립트에서 반복문을 돌리는 방법으로는 크게 for 문, while 문, do-while 문, for...in 문, for...of 문이 있습니다

\- **for** **문**: 특정한 조건을 만족하는 동안 일련의 문장들을 반복 실행합니다. 일반적으로 배열이나 리스트 등의 자료구조를 반복 처리할 때 많이 사용됩니다.

```
for (초기식; 조건식; 증감식) {
  // 반복 실행할 문장들
}
```

\- **while** **문**: 조건식이 참인 동안 일련의 문장들을 반복 실행합니다. 조건식이 거짓이 되면 반복문이 종료됩니다.

```
while (조건식) {
  // 반복 실행할 문장들
}
```

\- **do-while** **문**: 일련의 문장들을 먼저 한 번 실행한 후, 조건식이 참인 동안 반복 실행합니다. 조건식이 거짓이 되면 반복문이 종료됩니다.

```
do {
  // 반복 실행할 문장들
} while (조건식);
```

\- **for...in** **문**: 객체의 프로퍼티를 반복 처리할 때 사용됩니다. 객체의 프로퍼티 이름을 변수에 할당하여 반복문을 실행합니다.

```
for (변수 in 객체) {
  // 반복 실행할 문장들
}
```

\- **for...of** **문**: 배열 등의 iterable 객체의 요소를 반복 처리할 때 사용됩니다. 배열의 요소를 변수에 할당하여 반복문을 실행합니다.

```
for (변수 of 배열) {
  // 반복 실행할 문장들
}
```

이 외에도 forEach(), map(), reduce() 등의 배열 메서드를 활용하여 반복 처리할 수도 있습니다. 이러한 배열 메서드들은 ES6부터 추가되었으며, 코드를 더욱 간결하고 가독성 높게 작성할 수 있도록 도와줍니다.

- **자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?**

DOM 객체에 CSS Class를 주거나 없애는 방법에는 여러 가지가 있지만, 가장 일반적으로 사용되는 방법은 **'classList'** 속성을 활용하는 것입니다.

\- **CSS Class** **추가하기**: DOM 객체에 CSS Class를 추가하려면 **classList.add()** 메서드를 사용합니다.

```
const element = document.querySelector('.example');
element.classList.add('new-class');
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에 **new-class** 클래스를 추가하고 있습니다.

\- **CSS Class 제거하기**: DOM 객체에서 CSS Class를 제거하려면 **classList.remove()** 메서드를 사용합니다.

```
const element = document.querySelector('.example');
element.classList.remove('old-class');
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에서 **old-class** 클래스를 제거하고 있습니다.

\- **CSS Class 토글하기**: DOM 객체에서 CSS Class를 토글(추가/제거)하려면 classList.toggle() 메서드를 사용합니다.

```
const element = document.querySelector('.example');
element.classList.toggle('active');
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에서 **active** 클래스를 토글합니다. 즉, **active** 클래스가 없으면 추가하고, 있으면 제거합니다.

\- **CSS Class 존재 여부 확인하기**: DOM 객체에 특정 CSS Class가 존재하는지 여부를 확인하려면 **classList.contains()** 메서드를 사용합니다.

```
const element = document.querySelector('.example');
if (element.classList.contains('active')) {
  // active 클래스가 존재하는 경우
}
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에서 **active** 클래스가 존재하는지 여부를 확인하고 있습니다.

- **IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?**

IE9나 그 이전의 옛날 브라우저들에서는 **'\*\***classList'\*\* 속성이 지원되지 않으므로 다른 방법을 사용해야 합니다.

\- **CSS Class 추가하기**: DOM 객체에 CSS Class를 추가하려면 className 속성을 사용합니다.

```
const element = document.querySelector('.example');
element.className += ' new-class';
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에 **new-class** 클래스를 추가하고 있습니다. **className** 속성은 문자열 형태로 현재 CSS 클래스들을 반환하며, 새로운 클래스를 추가하기 위해서는 문자열 연결 연산자 **+=** 를 사용합니다.

\- **CSS Class 제거하기**: DOM 객체에서 CSS Class를 제거하려면 **className** 속성을 사용합니다.

```
const element = document.querySelector('.example');
element.className = element.className.replace('old-class', '');
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에서 **old-class** 클래스를 제거하고 있습니다. **className** 속성에는 문자열이 저장되어 있으며, **replace()** 메서드를 사용하여 삭제할 클래스 이름을 제거합니다.

\- **CSS Class 토글하기**: DOM 객체에서 CSS Class를 토글하려면 className 속성을 사용합니다.

```
const element = document.querySelector('.example');
const classNames = element.className.split(' ');
const index = classNames.indexOf('active');
if (index >= 0) {
  classNames.splice(index, 1);
} else {
  classNames.push('active');
}
element.className = classNames.join(' ');
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에서 **active** 클래스를 토글하고 있습니다. **className** 속성은 문자열 형태로 현재 CSS 클래스들을 반환하며, 문자열 처리 메서드를 사용하여 CSS 클래스를 추가/제거합니다.

\- **CSS Class 존재 여부 확인하기**: DOM 객체에 특정 CSS Class가 존재하는지 여부를 확인하려면 **className** 속성을 사용합니다.

```
const element = document.querySelector('.example');
if (element.className.indexOf('active') >= 0) {
  // active 클래스가 존재하는 경우
}
```

위의 코드에서는 **.example** 클래스를 가진 DOM 객체에서 **active** 클래스가 존재하는지 여부를 확인하고 있습니다. **className** 속성은 문자열 형태로 현재 CSS 클래스들을 반환하며, **indexOf()** 메서드를 사용하여 CSS 클래스가 존재하는지 여부를 확인합니다.

- **자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?**

자바스크립트의 변수 범위(scope)는 변수가 선언된 위치와 관련이 있습니다. 변수 범위는 전역 범위와 지역 범위 두 가지가 있습니다.

- **전역 범위\*\***(Global Scope)**: 전역 범위에서 선언된 변수는 어느 곳에서나 접근이 가능합니다. 전역 범위에서 변수를 선언할 때는 **var\*\* 키워드를 사용합니다.

```
var globalVariable = 'I am a global variable';
function foo() {
  console.log(globalVariable); // 'I am a global variable'
}
foo();
```

- **지역 범위\*\***(Local Scope)**: 지역 범위에서 선언된 변수는 해당 지역 내에서만 접근이 가능합니다. 지역 범위에서 변수를 선언할 때는 **let** 키워드나 **const\*\* 키워드를 사용합니다.

```
function foo() {
  var localVariable = 'I am a local variable';
  console.log(localVariable); // 'I am a local variable'
}
foo();
console.log(localVariable); // ReferenceError: localVariable is not defined
```

위의 코드에서는 함수 내부에서 **var** 키워드를 사용하여 **localVariable** 변수를 선언하고 있습니다. **localVariable** 변수는 함수 내부에서만 접근이 가능합니다. 함수 외부에서 **localVariable** 변수를 참조하면 **ReferenceError**가 발생합니다.

- **블록 범위\*\***(Block Scope)\*\*: ES6에서는 let 키워드나 const 키워드를 사용하여 블록 범위의 변수를 선언할 수 있습니다. 블록 범위에서 선언된 변수는 해당 블록 내부에서만 접근이 가능합니다.

```
if (true) {
  let blockVariable = 'I am a block-scoped variable';
  console.log(blockVariable); // 'I am a block-scoped variable'
}
console.log(blockVariable); // ReferenceError: blockVariable is not defined
```

위의 예제에서는 **if** 블록 내에서 **let** 키워드를 사용하여 **blockVariable** 변수를 선언하고 있습니다. **blockVariable** 변수는 해당 블록 내부에서만 접근이 가능합니다. 블록 외부에서 **blockVariable** 변수를 참조하면 **ReferenceError**가 발생합니다.

- **var과 let으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?**

**var**과 **let**은 모두 변수를 선언하는 방법입니다. 하지만 이 둘은 동작 방식이 다르기 때문에 몇 가지 차이점이 있습니다.

- **변수의 유효 범위\*\***(scope)**: **var**로 선언된 변수는 함수 범위(Function Scope)를 가지고, **let\*\*으로 선언된 변수는 블록 범위(Block Scope)를 가집니다. 함수 범위는 해당 함수 내에서만 유효한 범위이며, 블록 범위는 해당 블록 내에서만 유효한 범위입니다.

```
function foo() {
  var x = 1;
  let y = 2;
  if (true) {
    var x = 3; // 이미 선언된 x 변수에 대해 값을 변경함
    let y = 4; // 새로운 y 변수를 선언함
    console.log(x); // 3
    console.log(y); // 4
  }
  console.log(x); // 3
  console.log(y); // 2
}
foo();
```

- **변수의 호이스팅\*\***(Hoisting)**: **var**로 선언된 변수는 함수나 전역 범위에서 변수 선언 코드 이전에도 변수를 사용할 수 있습니다. 하지만 선언과 초기화가 분리되어 있을 때 변수의 값은 **undefined**입니다. **let\*\*으로 선언된 변수는 호이스팅이 발생하지 않습니다.

```
function foo() {
  console.log(x); // undefined
  var x = 1;
  console.log(y); // ReferenceError: y is not defined
  let y = 2;
}
foo();
```

- **변수의 중복 선언**: **var**로 선언된 변수는 같은 이름의 변수를 여러 번 선언해도 오류가 발생하지 않습니다. 하지만 **let**으로 선언된 변수는 같은 이름의 변수를 중복 선언하면 오류가 발생합니다.

```
var x = 1;
var x = 2; // 오류가 발생하지 않음
let y = 3;
let y = 4; // SyntaxError: Identifier 'y' has already been declared
```

- **자바스크립트의 익명 함수는 무엇인가요?**

JavaScript에서 익명 함수란, 이름이 없는 함수를 의미합니다.

즉, 함수 표현식을 사용하여 함수를 정의하고 변수에 할당할 때 함수 이름을 지정하지 않는 것입니다.

예를 들어, 다음과 같이 함수 표현식을 사용하여 익명 함수를 정의하고 변수 **foo**에 할당할 수 있습니다.

```
var foo = function() {
  console.log("Hello, world!");
};
```

위의 코드에서 **foo** 변수에 할당된 함수는 이름이 없으며, 이를 익명 함수라고 합니다. 이렇게 변수에 할당된 함수는 나중에 호출할 때 변수 이름을 사용하여 호출할 수 있습니다.

익명 함수는 다음과 같은 장점이 있습니다.

- 콜백 함수로 사용하기 쉬움: 익명 함수는 다른 함수의 인자로 쉽게 전달할 수 있습니다. 예를 들어, 다음과 같은 코드에서 **setTimeout** 함수의 인자로 익명 함수를 전달하고 있습니다.

```
setTimeout(function() {
  console.log("Hello, world!");
}, 1000);
```

위의 코드에서 **setTimeout** 함수는 1초 후에 전달된 익명 함수를 호출합니다.

- 코드의 가독성을 높임: 함수 이름을 지정하지 않으면 함수의 역할이 더욱 명확해집니다. 함수의 이름이 없기 때문에 함수가 수행하는 일에 따라 변수의 이름을 지정하여 함수를 더욱 명확하게 할 수 있습니다.
- 전역 네임스페이스 오염을 방지함: 전역 네임스페이스에 함수 이름을 추가하면 다른 라이브러리나 모듈에서 함수 이름이 충돌할 수 있습니다. 익명 함수를 사용하면 이러한 충돌을 방지할 수 있습니다.

- **자바스크립트의 Arrow function은 무엇일까요?**

JavaScript에서 Arrow function(화살표 함수)는 함수 표현식의 간단한 문법적 변형으로, 함수를 정의하는 또 다른 방법입니다. ES6(ES2015)에서 도입되었습니다.

Arrow function은 **function** 키워드 대신 **\=>** 기호를 사용하여 함수를 정의합니다. Arrow function의 가장 큰 특징은 함수 내부에서 **this** 값을 유지한다는 것입니다. 일반 함수의 경우 함수가 호출될 때마다 **this** 값이 바뀔 수 있지만, Arrow function에서는 함수가 정의될 때의 **this** 값이 유지됩니다.

Arrow function은 다음과 같은 문법으로 정의합니다.

```
// 매개변수가 없는 경우
() => {
  // 함수 본문
};

// 매개변수가 하나인 경우
param => {
  // 함수 본문
};

// 매개변수가 여러 개인 경우
(param1, param2) => {
  // 함수 본문
};
```

Arrow function은 다른 함수와 마찬가지로 변수에 할당하거나, 객체의 메서드로 사용할 수 있습니다. 예를 들어, 다음과 같이 변수 **square**에 함수를 할당하는 것이 가능합니다.

```
// 일반 함수를 사용한 예
var square = function(x) {
  return x * x;
};

// Arrow function을 사용한 예
var square = x => x * x;
```

Arrow function은 간결한 문법으로 인해 코드를 더욱 짧고 가독성 있게 만들 수 있습니다. 특히, 배열이나 객체를 다룰 때 유용합니다. 예를 들어, 다음과 같은 코드에서 **map** 함수와 Arrow function을 함께 사용하여 배열의 각 요소를 제곱할 수 있습니다.

```
var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

하지만, Arrow function은 함수 내부에서 **this**를 사용할 때 주의가 필요합니다. Arrow function에서 **this**를 사용할 경우, 함수가 정의된 위치에서 **this** 값을 가져오게 됩니다. 이 때문에, Arrow function에서는 일반 함수의 경우와는 다르게 **this** 값을 동적으로 변경하는 것이 불가능합니다.

## Quest

- (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  - [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    - 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  - `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  - 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  - 출력은 `console.log()` 함수를 통해 할 수 있습니다.
    > quest03-1.js참고
- (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  - 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
    > 네
  - 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
    > 해결
- 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.
  > 네

## Advanced

- Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
- Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
