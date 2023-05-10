# Quest 09. 서버와 클라이언트의 대화

## Introduction

- 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics

- expressJS, fastify
- AJAX, `XMLHttpRequest`, `fetch()`
- REST, CRUD
- CORS

## Resources

- [Express Framework](http://expressjs.com/)
- [Fastify Framework](https://www.fastify.io/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [REST API Tutorial](https://restfulapi.net/)
- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
- [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## **Checklist**

- **비동기 프로그래밍이란 무엇인가요?**

비동기 프로그래밍은 프로그램의 실행 흐름과 관련된 개념으로, 여러 작업이 동시에 실행되도록 하고 작업 완료 시 결과를 처리하는 방식을 말합니다.

전통적인 동기적 프로그래밍에서는 하나의 작업을 처리할 때 해당 작업이 완료될 때까지 기다리고, 다음 작업을 처리합니다. 이러한 방식은 순차적으로 진행되기 때문에 한 작업이 오래 걸릴 경우 전체적인 실행 시간이 길어지는 단점이 있습니다.

반면에 비동기 프로그래밍에서는 작업이 완료될 때까지 기다리지 않고 다른 작업을 수행할 수 있기 때문에, 여러 작업이 동시에 실행될 수 있습니다. 이를 통해 전체적인 실행 시간을 단축할 수 있습니다.

비동기 프로그래밍을 구현하는 방법에는 여러가지가 있습니다. 콜백(callback), 프라미스(promise), async/await 등이 있습니다.

- **콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?**

콜백을 통해 비동기적 작업을 처리할 때 가장 큰 불편함은 콜백 지옥(callback hell)입니다. 콜백 지옥이란, 콜백 함수를 중첩해서 사용하는 코드가 복잡해져서 가독성이 떨어지고 유지보수가 어려워지는 현상을 말합니다.

예를 들어, 서버에서 파일을 읽어와서 처리하는 코드가 있다고 가정해보겠습니다. 다음과 같이 콜백 함수를 중첩해서 사용하면 콜백 지옥에 빠질 가능성이 큽니다.

```
fs.readFile('file1.txt', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    fs.readFile('file2.txt', function(err, data) {
      if (err) {
        console.error(err);
      } else {
        fs.readFile('file3.txt', function(err, data) {
          if (err) {
            console.error(err);
          } else {
            // 파일 처리 로직
          }
        });
      }
    });
  }
});
```

이러한 코드는 읽기가 어렵고 중첩된 콜백 함수가 많아져서 유지보수가 어렵습니다. 이를 개선하기 위해서는 콜백 함수 대신에 프라미스(promise)나 async/await을 사용할 수 있습니다. 이를 통해 코드의 가독성과 유지보수성을 개선할 수 있습니다.

- **자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?**

자바스크립트의 Promise는 비동기적인 작업을 처리하고 그 결과를 반환하기 위한 객체입니다. Promise는 비동기 작업이 완료되면 성공 결과나 실패 결과를 처리하기 위한 메서드를 제공합니다. Promise를 사용하면 콜백 함수를 중첩하지 않고 비동기적인 작업을 처리할 수 있어 코드의 가독성이 향상됩니다.

Promise는 세 가지 상태(state)를 가집니다.

- **대기(pending)**: Promise 객체가 생성되고 비동기 작업이 수행 중인 상태
- **이행(fulfilled)**: 비동기 작업이 성공적으로 완료된 상태
- **거부(rejected)**: 비동기 작업이 실패한 상태

Promise 객체는 **new Promise()** 생성자를 사용하여 생성할 수 있습니다. Promise 객체는 then(), catch() 메서드를 사용하여 비동기 작업이 성공했을 때와 실패했을 때 각각 처리할 로직을 등록할 수 있습니다. 또한 Promise.all(), Promise.race()와 같은 메서드를 사용하여 여러 개의 Promise를 동시에 처리하거나, 가장 먼저 처리된 Promise 결과를 반환할 수 있습니다.

아래는 Promise를 사용한 예시 코드입니다.

```
function fetchData() {
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      resolve(data); // 작업 성공 시 resolve 메서드 호출
      // reject(new Error('Error!')); // 작업 실패 시 reject 메서드 호출
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // 작업 성공 시 실행되는 로직
  })
  .catch((err) => {
    console.error(err); // 작업 실패 시 실행되는 로직
  });
```

위 코드에서 fetchData() 함수는 Promise 객체를 반환합니다. 비동기 작업이 성공하면 resolve 메서드를 호출하여 작업 결과를 전달하고, 실패하면 reject 메서드를 호출하여 에러를 전달합니다. then() 메서드는 작업이 성공했을 때 실행되는 콜백 함수를 등록하고, catch() 메서드는 작업이 실패했을 때 실행되는 콜백 함수를 등록합니다.

- **자바스크립트의 async와 await 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?**

**async**와 **await**는 ES2017(ES8)에서 추가된 자바스크립트의 키워드로, 비동기 처리를 좀 더 간결하게 작성할 수 있도록 해줍니다.

**async** 키워드는 함수 선언 앞에 붙이며, 이를 통해 해당 함수가 비동기적으로 처리됨을 나타내줍니다. **async**가 붙은 함수는 내부에서 **Promise** 객체를 반환하게 됩니다.

**await** 키워드는 **async**가 붙은 함수 내부에서 사용되며, **Promise** 객체의 결과값을 기다린 후에 다음 코드를 실행합니다. 이를 통해 콜백이나 **Promise** 체이닝을 사용하지 않고도 비동기 코드를 동기적으로 작성할 수 있습니다.

**async/await**를 사용하면 비동기 코드를 보다 직관적이고 가독성 높은 방법으로 작성할 수 있습니다. 이를 통해 코드의 복잡도를 낮출 수 있고, 디버깅이나 유지보수를 보다 쉽게 할 수 있습니다.

- **브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?**

브라우저 내 스크립트에서 외부 리소스를 가져오기 위해서는 XMLHttpRequest 객체나 fetch API를 사용할 수 있습니다.

- XMLHttpRequest 객체를 사용하는 방법

```
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data.json');
xhr.onload = () => {
  console.log(xhr.responseText);
};
xhr.send();
```

- fetch API를 사용하는 방법

```
fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

XMLHttpRequest 객체와 fetch API 모두 비동기적으로 데이터를 가져오는 기능을 제공합니다. XMLHttpRequest 객체는 콜백 함수를 사용하여 비동기적으로 처리하는 반면, fetch API는 Promise 기반으로 비동기 처리를 합니다.

- **브라우저의 XMLHttpRequest 객체는 무엇이고 어떻게 동작하나요?**

XMLHttpRequest 객체는 브라우저에서 제공하는 네트워크 통신을 위한 JavaScript 객체입니다. 이 객체를 사용하여 서버로부터 데이터를 비동기적으로 요청하고 받아올 수 있습니다.

XMLHttpRequest 객체의 주요 메소드와 속성은 다음과 같습니다.

- **open(method, url\[, async\[, user\[, password\]\]\])**: 요청의 준비를 위해 초기화합니다. **method**는 HTTP 요청 방식(GET, POST 등)을, **url**은 요청을 보낼 URL을 지정합니다. **async**는 비동기 여부를, user와 password는 인증을 위한 사용자 이름과 암호를 지정합니다.
- **send(\[body\])**: 요청을 서버로 보냅니다. **body**는 요청 본문을 지정하는데 사용됩니다.
- **abort()**: 요청을 취소합니다.
- **setRequestHeader(name, value)**: HTTP 요청 헤더를 설정합니다. **name**은 헤더 이름을, **value**는 헤더 값이 됩니다.
- **onreadystatechange**: 요청 상태가 변경될 때 호출되는 콜백 함수입니다. 요청 상태가 변경될 때마다 호출되며, **readyState**와 **status** 속성을 사용하여 응답 상태를 확인할 수 있습니다.
- **readyState**: 요청 상태를 나타내는 속성입니다. **0**부터 **4**까지의 값이 있으며, 상태 변경 이벤트마다 값을 갱신합니다.
- **status**: 서버로부터 받은 HTTP 응답 상태 코드를 나타내는 속성입니다.

XMLHttpRequest 객체를 사용하여 데이터를 요청할 때는 비동기적으로 요청을 보내므로, **onreadystatechange** 이벤트나 **load** 이벤트 등을 사용하여 요청이 완료된 후에 처리해야 합니다. 또한, CORS (Cross-Origin Resource Sharing) 정책을 준수하여 요청을 보내야 합니다.

- **fetch API는 무엇이고 어떻게 동작하나요?**

Fetch API는 브라우저 내장 API로서, 네트워크를 통해 리소스를 가져오거나 전송하기 위해 사용됩니다. 이 API를 사용하면 AJAX 요청을 보내고, JSON 데이터를 가져오거나 파일 업로드 등을 할 수 있습니다.

Fetch API는 XMLHttpRequest 객체를 대체할 수 있는 비동기적인 HTTP 요청 처리 API로, 프로미스(Promise)를 기반으로 동작합니다. 이는 비동기적인 처리를 더욱 쉽게 다룰 수 있게 해주는 장점이 있습니다.

Fetch API를 사용하기 위해서는 fetch() 함수를 호출하고, 요청에 대한 정보와 옵션을 설정합니다. 그리고 이 함수는 프로미스를 반환하게 되며, 프로미스가 이행(resolve)될 때 결과를 받아올 수 있습니다.

- **REST는 무엇인가요?**

REST는 Representational State Transfer의 약자로, 웹 기반 애플리케이션에서 자주 사용되는 아키텍처 스타일입니다. REST는 클라이언트와 서버 간의 통신 방식으로, 네트워크 상에서 분산되어 있는 리소스들을 표현하고 상호작용하는 데에 적합합니다.

REST는 HTTP 프로토콜을 기반으로 동작하며, URI(Uniform Resource Identifier)를 통해 리소스를 식별하고, HTTP 메소드를 사용하여 해당 리소스에 대한 작업을 수행합니다. 일반적으로, HTTP 메소드 중 GET, POST, PUT, DELETE를 사용하여 리소스를 생성, 조회, 수정, 삭제하는 작업을 수행합니다.

REST는 다음과 같은 특징을 가지고 있습니다.

- **클라이언트/서버 구조**: 서버와 클라이언트가 각각 독립적으로 개발될 수 있도록 하는 구조입니다.
- **상태 없음(Stateless)**: 클라이언트의 상태를 서버에서 유지하지 않으며, 각각의 요청은 독립적으로 처리됩니다.
- **캐시 처리 가능(Cacheable)**: 클라이언트는 서버로부터 받은 응답을 캐시하여 다음에 같은 요청이 올 경우 캐시된 데이터를 반환합니다.
- **계층화(Layered System)**: 클라이언트와 서버 사이에 프록시 서버, 게이트웨이 등 중간 매체를 둘 수 있습니다.
- **인터페이스 일관성(Uniform Interface)**: URI로 식별 가능한 리소스에 대한 표준화된 인터페이스를 사용합니다.

REST를 따르는 웹 서비스는 다양한 클라이언트(브라우저, 앱 등)와 서버 플랫폼에서 사용될 수 있으며, 서비스의 확장성과 재사용성을 높일 수 있습니다.

- **REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?**

REST API는 Representational State Transfer API의 약어로, 웹 서비스에서 자원을 정의하고 자원에 대한 주소를 지정하는 방법론입니다. REST API는 자원을 CRUD(Create, Read, Update, Delete) 기능을 통해 관리할 수 있으며, HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 이를 구현합니다.

REST API의 가장 큰 장점은 플랫폼과 언어에 독립적이라는 점입니다. REST API를 사용하면 서로 다른 플랫폼이나 언어 간의 통신이 가능하며, 이는 웹 서비스의 확장성과 유연성을 높여줍니다. 또한, REST API는 캐싱을 지원하기 때문에 서버의 부하를 줄이고 성능을 향상시킬 수 있습니다.

또한 REST API는 자원에 대한 URI(Uniform Resource Identifier)를 사용하여 자원을 식별하고, HTTP 메서드를 사용하여 해당 자원에 대한 행동을 나타냅니다. 이러한 구조는 API의 가독성과 이해하기 쉬운 설계를 가능하게 합니다. 또한, REST API는 자원의 상태를 표현하기 위해 JSON이나 XML과 같은 표준 데이터 형식을 사용합니다.

- **RESTful한 API 설계의 단점은 무엇인가요?**

- **복잡성**: RESTful한 API 설계는 유연성과 확장성을 제공하며, 다양한 클라이언트와 서버 간의 상호 작용을 지원하기 때문에 상대적으로 복잡합니다. 이에 따라 설계 및 구현 시에 신중한 고려가 필요합니다.
- **캐싱**: RESTful한 API는 HTTP 기반으로 동작하기 때문에 HTTP 캐싱을 지원하고, 이를 이용하여 응답 속도를 높일 수 있습니다. 하지만 API 설계에 따라 캐싱이 어려울 수도 있습니다.
- **보안**: RESTful한 API에서는 보안을 위해 HTTPS를 사용하고, 사용자 인증 등의 보안 기능을 제공해야 합니다. 이러한 보안 기능을 제공하기 위해서는 API 설계 시 보안 취약점을 고려하여야 합니다.
- **서버 부하**: RESTful한 API는 많은 클라이언트와 서버 간의 상호 작용을 지원하기 때문에 서버 부하가 증가할 수 있습니다. 이에 따라 API 설계 및 구현 시 성능을 고려하여야 합니다.
- **문서화**: RESTful한 API 설계는 URI, HTTP 메서드, 헤더 등 다양한 요소를 고려해야 하기 때문에 문서화가 어렵습니다. 이에 따라 API 설계 시 문서화를 고려하여야 하며, Swagger와 같은 API 문서화 도구를 활용할 수 있습니다.

- **CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?**

CORS(Cross-Origin Resource Sharing)란 웹 브라우저에서 실행되는 스크립트에서 다른 출처(origin)의 리소스에 접근할 때 발생하는 보안 정책입니다. 이는 보안상의 이유로 브라우저에서는 다른 출처의 리소스에 접근을 제한하는데, 이 때문에 AJAX를 이용한 API 요청 등에서 다른 도메인의 데이터에 접근할 수 없는 문제가 발생합니다.

CORS 기능을 사용하면 서버가 특정 출처의 리소스에 대한 요청을 허용할 수 있습니다. 이를 통해 API 서버에서는 특정 출처에서 요청이 왔을 때, 허용할 수 있도록 응답해줄 수 있습니다. 이를 통해 다른 출처에서 데이터를 요청하고 받아올 수 있게 됩니다.

CORS는 서버에서 응답 헤더를 이용해 구현됩니다. 서버에서는 **Access-Control-Allow-Origin** 헤더를 설정하여, 허용할 출처를 명시합니다. 이 헤더를 통해 브라우저는 해당 출처에서 온 요청에 대해 응답을 허용할지 여부를 결정하게 됩니다.

또한, 요청의 종류(GET, POST 등)와 같은 다른 정보도 함께 검사합니다. 이는 브라우저가 리소스에 접근하는 방식에 따라 다른 방식으로 동작합니다. 예를 들어, 간단한 GET 요청의 경우 preflight 요청을 보내지 않고 바로 요청을 보낼 수 있지만, 더 복잡한 POST 요청의 경우 preflight 요청을 보내서 요청을 보낼 수 있는지 먼저 확인합니다.

따라서, API를 설계할 때는 CORS를 고려하여 출처를 허용할지 여부를 결정하고, 그에 따라 서버 측 코드를 작성해야 합니다. 또한, 브라우저에서 요청을 보낼 때는 CORS 정책을 준수하도록 해야 합니다.

## Quest

- 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  - 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
- Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  - 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  - 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  - 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    - 서버에 어떤 식으로 저장하는 것이 좋을까요?
  - API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  - Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
- 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
- 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced

- `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
- REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?
