# Quest 13. 웹 API의 응용과 GraphQL

## Introduction

- 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics

- GraphQL
  - Schema
  - Resolver
  - DataLoader
- Apollo

## Resources

- [GraphQL](https://graphql.org/)
- [GraphQL.js](http://graphql.org/graphql-js/)
- [DataLoader](https://github.com/facebook/dataloader)
- [Apollo](https://www.apollographql.com/)

## **Checklist**

- **GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?**

GraphQL API는 데이터 쿼리 및 조작을 위한 새로운 방식을 제공하는 웹 API입니다. REST API와 마찬가지로 클라이언트와 서버 간의 통신을 위한 인터페이스를 제공하지만, GraphQL은 REST API와는 다른 방식으로 작동합니다.

REST API는 URL 경로 및 HTTP 동사를 사용하여 리소스에 대한 요청을 전송하고, 서버는 JSON 또는 XML과 같은 형식으로 응답합니다. 이와 달리 GraphQL API는 하나의 엔드포인트에서 복수의 데이터 소스에 대한 질의를 한 번에 보낼 수 있습니다. 클라이언트는 필요한 데이터 필드와 관련된 쿼리를 보내고, 서버는 해당 필드에 대한 데이터만 응답합니다. 이렇게 함으로써 클라이언트는 서버로부터 불필요한 데이터를 받지 않고, 필요한 데이터만 받아 처리할 수 있습니다.

GraphQL API는 REST API의 몇 가지 단점을 보완합니다. 첫째, REST API에서는 여러 요청을 보내야 하는 경우가 많아 비효율적일 수 있습니다. 둘째, REST API에서는 데이터가 계층적으로 구성되어 있을 때 중첩된 요청을 보내야 합니다. 이는 클라이언트와 서버 간에 불필요한 통신을 발생시킬 수 있습니다. 반면, GraphQL API는 클라이언트가 필요로 하는 데이터만 요청할 수 있으므로 효율적인 통신이 가능합니다.

또한 GraphQL API는 클라이언트와 서버 간의 계약에 대한 명확한 정의를 제공합니다. GraphQL 스키마는 API에서 사용 가능한 모든 쿼리와 데이터 모델을 정의하므로 클라이언트와 서버 간의 커뮤니케이션이 쉽고 일관성 있습니다. 이는 API의 유지 보수와 업데이트를 용이하게 합니다.

- **GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?**

GraphQL 스키마는 GraphQL API에서 사용 가능한 모든 쿼리, 뮤테이션 및 데이터 모델을 정의하는 중요한 구성 요소입니다. 스키마는 GraphQL API의 계약에 대한 명확한 정의를 제공합니다. 즉, 클라이언트는 스키마를 기반으로 어떤 데이터를 요청할 수 있는지, 그리고 서버가 어떤 데이터를 반환할 수 있는지 미리 알 수 있습니다.

GraphQL 스키마는 대부분 SDL (Schema Definition Language)라는 언어를 사용하여 정의됩니다. 스키마는 크게 두 부분으로 나뉩니다.

첫째, 데이터 모델을 정의하는 타입 정의 부분이 있습니다. 둘째, API에서 사용 가능한 쿼리 및 뮤테이션을 정의하는 루트 타입 정의 부분이 있습니다.

타입 정의 부분에서는 객체 타입, 인터페이스 타입, 스칼라 타입, 열거형 타입 등을 정의할 수 있습니다. 예를 들어, "User"라는 객체 타입은 사용자의 정보를 포함하는 "id", "name", "email"과 같은 필드를 가질 수 있습니다. 인터페이스 타입은 공통 필드를 정의하는 추상적인 타입입니다. 스칼라 타입은 GraphQL에서 기본적으로 제공되는 문자열, 정수, 부동 소수점, 부울 등의 타입입니다. 열거형 타입은 특정한 값의 집합을 나타내며, 예를 들어, "Gender"라는 열거형 타입은 "MALE", "FEMALE", "OTHER"와 같은 값을 가질 수 있습니다.

루트 타입 정의 부분에서는 API에서 사용 가능한 쿼리 및 뮤테이션을 정의합니다. GraphQL API에서는 "query"라는 이름의 특별한 루트 타입이 있습니다. "query" 루트 타입에서는 API에서 사용 가능한 쿼리를 정의합니다. 또한, "mutation"이라는 루트 타입에서는 데이터의 생성, 수정 및 삭제와 같은 뮤테이션을 정의합니다.

GraphQL 스키마는 API의 계약에 대한 명확한 정의를 제공하므로, API의 개발과 유지 보수를 용이하게 합니다. 또한, 스키마는 GraphQL API의 장점 중 하나인 자동 문서화를 가능하게 합니다.

- **GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?**

GraphQL 리졸버는 GraphQL 스키마에서 정의한 필드에 대한 실제 데이터 조회 및 처리 로직을 담당하는 함수입니다. 즉, 클라이언트가 요청한 쿼리나 뮤테이션에 대한 결과를 생성하는 역할을 합니다.

GraphQL 리졸버는 스키마의 타입 정의 부분에서 정의된 필드와 연결됩니다. 각각의 필드는 하나 이상의 리졸버 함수를 가질 수 있으며, 리졸버 함수는 해당 필드에서 반환될 데이터를 제공합니다. 예를 들어, "User" 객체 타입의 "name" 필드에 대한 리졸버 함수는 해당 사용자의 이름 데이터를 반환합니다.

GraphQL 리졸버는 일반적으로 객체로 구성된 Resolver Map이라는 구조체로 정의됩니다. Resolver Map은 스키마의 각 필드와 해당 필드에 대한 리졸버 함수를 매핑하는 데 사용됩니다. 예를 들어, 다음과 같은 Resolver Map이 있다면:

```
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    posts: () => getAllPosts(),
  },
  User: {
    name: (parent) => parent.name,
    email: (parent) => parent.email,
    posts: (parent) => getPostsByUserId(parent.id),
  },
  Post: {
    author: (parent) => getUserById(parent.authorId),
  },
};
```

위 코드에서는 "Query" 루트 타입의 "user" 필드와 "posts" 필드에 대한 리졸버 함수를 정의합니다. "User" 객체 타입의 "name", "email", "posts" 필드와 "Post" 객체 타입의 "author" 필드에 대한 리졸버 함수도 정의합니다.

GraphQL 리졸버는 데이터베이스에서 데이터를 조회하거나 외부 API와의 통신 등을 수행하여 데이터를 반환할 수 있습니다. 또한, 비즈니스 로직을 수행하여 데이터를 가공하거나 필터링할 수도 있습니다. 따라서, 리졸버 함수는 GraphQL API의 가장 핵심적인 부분 중 하나입니다.

- **GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?**

DataLoader는 GraphQL API에서 자주 사용되는 N+1 문제를 해결하기 위한 유틸리티 라이브러리입니다. N+1 문제란, 데이터를 조회할 때 하나의 객체에 대한 조회가 여러 번 발생하는 현상을 말합니다. 예를 들어, 사용자 목록을 조회하고 각 사용자에 대한 포스트 목록을 조회하는 쿼리를 실행할 때, N+1 문제가 발생하면 사용자 수만큼 데이터베이스 조회가 발생하여 성능에 부담이 될 수 있습니다.

DataLoader는 이러한 문제를 해결하기 위해 데이터를 일괄적으로 조회하여 캐시에 저장하고, 중복된 데이터를 제거하여 성능을 최적화합니다. DataLoader를 사용하면 한 번의 요청으로 여러 개의 데이터를 조회하고, 필요한 데이터만 가져올 수 있습니다.

DataLoader를 사용하려면, 먼저 DataLoader 패키지를 설치하고, DataLoader 인스턴스를 생성합니다. 그리고 각각의 리졸버 함수에서 데이터를 조회할 때, DataLoader 인스턴스를 사용하여 데이터를 일괄적으로 조회합니다. 이렇게 하면, 중복된 데이터를 캐시에 저장하고, 여러 번의 데이터베이스 조회를 최소화할 수 있습니다.

예를 들어, 다음과 같이 DataLoader 인스턴스를 생성하고, 데이터를 조회할 때 DataLoader를 사용할 수 있습니다:

```
const { DataLoader } = require('dataloader');

const batchGetUsersByIds = async (ids) => {
  // 데이터베이스에서 사용자 데이터를 일괄적으로 조회하는 비동기 함수
  const users = await getUsersByIds(ids);
  // 조회된 사용자 데이터를 ID를 기준으로 매핑
  const usersByIds = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  // 요청한 ID 순서에 맞게 사용자 데이터 반환
  return ids.map((id) => usersByIds[id]);
};

const userLoader = new DataLoader(batchGetUsersByIds);

const resolvers = {
  Query: {
    user: (_, { id }) => userLoader.load(id),
  },
  User: {
    posts: (user) => getPostsByUserId(user.id),
  },
};
```

위 코드에서는 **batchGetUsersByIds** 함수에서 데이터베이스에서 사용자 데이터를 일괄적으로 조회하고, DataLoader 인스턴스를 생성합니다. 그리고 **user** 필드에 대한 리졸버 함수에서 **userLoader.load(id)**를 사용하여 데이터를 조회합니다. 이렇게 하면, 중복된 데이터를 캐시에 저장하고, 여러 번의 데이터베이스 조회를 최소화할 수 있습니다.

따라서, DataLoader를 사용하면 N+1 문제를 해결하고 성능을 최적화할 수 있으며, GraphQL API의 성능을 향상시킬 수 있습니다.

- **클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?**

- HTTP POST 요청: GraphQL API는 HTTP POST 요청을 지원합니다. 클라이언트에서는 HTTP POST 요청을 보내고, 요청 본문에 GraphQL 쿼리를 포함시키면 됩니다. 요청 본문은 JSON 형식으로 작성되어야 하며, query 필드에 쿼리문을 작성할 수 있습니다. 예를 들어, 다음과 같이 요청을 보낼 수 있습니다.

**POST /graphql HTTP/1.1**  
**Content-Type: application/json**

**{**  
  **"query": "query { hello }"**  
**}**

- HTTP GET 요청: GraphQL API는 HTTP GET 요청도 지원합니다. 클라이언트에서는 HTTP GET 요청을 보내고, 요청 URL에 GraphQL 쿼리를 포함시키면 됩니다. 쿼리는 URL 인코딩되어야 하며, query 매개변수에 쿼리문을 작성할 수 있습니다. 예를 들어, 다음과 같이 요청을 보낼 수 있습니다.

**GET /graphql?query=query%20%7B%20hello%20%7D HTTP/1.1**

- GraphQL 클라이언트 라이브러리 사용: GraphQL 클라이언트 라이브러리를 사용하면, GraphQL API와 상호작용하는 데 필요한 기능을 제공합니다. 클라이언트에서는 GraphQL 쿼리를 작성하고, 라이브러리를 사용하여 GraphQL API에 요청을 보내고, 응답을 처리할 수 있습니다. 대표적인 GraphQL 클라이언트 라이브러리로는 Apollo Client, Relay 등이 있습니다.

예를 들어, Apollo Client를 사용하여 GraphQL API에 요청을 보내는 코드는 다음과 같이 작성할 수 있습니다.

```
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query {
      hello
    }
  `,
})
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

위 코드에서는 Apollo Client를 생성하고, **query** 메서드를 사용하여 GraphQL API에 요청을 보냅니다. 요청 본문은 GraphQL 쿼리 객체로 작성되며, 응답 데이터는 Promise 객체로 반환됩니다. 이렇게 하면, 클라이언트에서 GraphQL API와 상호작용할 수 있습니다.

- **Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?**

1.  강력한 GraphQL 지원: Apollo는 GraphQL을 지원하는 데 매우 강력한 기능을 제공합니다. GraphQL 스키마를 정의하고, 데이터 소스를 연결하고, 데이터를 검색하고, 결과를 반환하는 데 필요한 모든 기능을 제공합니다. 또한, Apollo는 클라이언트 측에서도 GraphQL을 지원하므로, 클라이언트 측에서도 강력한 GraphQL 기능을 사용할 수 있습니다.
2.  데이터 관리: Apollo는 클라이언트 측에서도 데이터 관리를 지원합니다. 클라이언트 측에서는 캐시를 사용하여 데이터를 저장하고, 쿼리 결과를 저장하여 성능을 향상시킬 수 있습니다. 또한, 클라이언트 측에서는 데이터 변경 사항을 감지하고, 변경된 데이터를 서버에 동기화할 수 있습니다.
3.  성능: Apollo는 성능 향상을 위해 많은 기능을 제공합니다. Apollo는 데이터 캐싱과 배치 처리를 통해 쿼리 결과를 빠르게 반환할 수 있습니다. 또한, Apollo는 HTTP/2와 WebSocket 같은 최신 기술을 지원하여 네트워크 통신의 성능을 향상시킬 수 있습니다.
4.  커뮤니티: Apollo는 매우 활발한 개발자 커뮤니티를 가지고 있습니다. 커뮤니티에서는 다양한 플러그인과 라이브러리를 제공하며, 이를 사용하여 개발자는 Apollo를 더욱 쉽게 사용할 수 있습니다.
5.  유연성: Apollo는 매우 유연한 프레임워크입니다. 개발자는 필요에 따라 Apollo의 다양한 기능을 사용하거나 사용하지 않을 수 있습니다. 또한, Apollo는 다양한 데이터 소스와 통합할 수 있으며, 이를 통해 다양한 데이터 소스를 효율적으로 활용할 수 있습니다.

- **Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?**

다음과 같은 단계를 거치면 가능합니다.

- HTTP 클라이언트 라이브러리 설치: GraphQL 요청을 보내기 위해서는 HTTP 클라이언트 라이브러리가 필요합니다. 예를 들어, Axios, Fetch API 등의 라이브러리를 사용할 수 있습니다.
- GraphQL 서버의 URL 가져오기: GraphQL 요청을 보내기 위해서는 GraphQL 서버의 URL이 필요합니다. GraphQL 서버의 URL은 보통 /graphql과 같은 경로에 위치합니다.
- GraphQL 쿼리 작성: GraphQL 쿼리는 문자열 형태로 작성되며, 서버에서 사용하는 GraphQL 스키마에 따라 작성해야 합니다. 예를 들어, 다음과 같이 GraphQL 쿼리를 작성할 수 있습니다.

```
const query = `
  query {
    users {
      id
      name
      email
    }
  }
`;
```

- HTTP 클라이언트 라이브러리로 GraphQL 요청 보내기: 작성한 GraphQL 쿼리와 GraphQL 서버의 URL을 사용하여 HTTP 클라이언트 라이브러리를 사용하여 GraphQL 요청을 보냅니다. 다음은 Fetch API를 사용하여 GraphQL 요청을 보내는 예시입니다.

```
fetch('/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

위 코드에서는 **fetch** 함수를 사용하여 GraphQL 서버의 URL과 작성한 GraphQL 쿼리를 POST 요청으로 보내고, 결과를 JSON 형태로 파싱하여 출력합니다.

이렇게 작성한 코드를 브라우저나 Node.js 환경에서 실행하면, GraphQL 서버로부터 반환된 데이터를 받아 볼 수 있습니다.

- **GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?**

GraphQL 기반의 API를 만들 때 에러 처리와 HTTP 상태 코드를 다루는 방법은 REST API와 유사합니다. 하지만 GraphQL API는 보통 하나의 엔드포인트를 사용하고, 클라이언트 측에서 필요한 데이터만 요청하므로, 일반적인 REST API와는 다른 에러 처리 방식을 사용합니다.

다음은 GraphQL API에서 에러 처리와 HTTP 상태 코드를 다루는 방법입니다.

- GraphQL Errors: GraphQL API에서 발생하는 에러는 GraphQL Errors라고 합니다. GraphQL Errors는 다음과 같은 형태를 가집니다.

```
{
  "errors": [
    {
      "message": "Invalid input",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "createUser"
      ]
    }
  ],
  "data": null
}
```

위 예시에서 errors 배열은 GraphQL API에서 발생한 모든 에러를 담고 있습니다. 각각의 에러는 message, locations, path 등의 속성을 가지고 있습니다.

- message: 에러 메시지
- locations: 에러가 발생한 코드의 위치 정보
- path: 에러가 발생한 필드의 경로

- HTTP 상태 코드: GraphQL API에서 발생하는 HTTP 상태 코드는 주로 다음과 같습니다.

- 200 OK: GraphQL API 요청이 성공하고, 데이터를 반환하는 경우
- 400 Bad Request: GraphQL API 요청이 올바르지 않은 경우
- 401 Unauthorized: GraphQL API 요청에 인증이 필요한 경우
- 403 Forbidden: GraphQL API 요청에 대한 권한이 없는 경우
- 404 Not Found: GraphQL API 요청에 대한 결과가 없는 경우
- 500 Internal Server Error: GraphQL API 요청을 처리하는 동안 서버에서 오류가 발생한 경우

- 예외 처리: GraphQL API에서 예외 처리는 일반적으로 GraphQL Errors 객체를 사용하여 처리합니다. GraphQL API에서 발생하는 예외를 처리하는 방법은 다음과 같습니다.

- GraphQL Errors 객체를 사용하여 예외를 생성합니다.
- **throw** 문을 사용하여 예외를 발생시킵니다.
- 예외 처리 미들웨어를 사용하여 예외를 처리합니다.

예를 들어, GraphQL API에서 입력 값이 잘못된 경우, 다음과 같이 GraphQL Errors 객체를 사용하여 예외를 생성할 수 있습니다.

```
if (!isValidInput(input)) {
  throw new GraphQLError('Invalid input');
}
```

위 코드에서 **GraphQLError**는 GraphQL Errors 객체를 생성하는 클래스입니다.

- HTTP 상태 코드 반환: GraphQL API에서 HTTP 상태 코드를 반환하는 방법은 다음과 같습니다.

- GraphQL Errors 객체에서 HTTP 상태 코드를 추출합니다.
- GraphQL API 요청을 처리하는 동안 발생한 예외에서 HTTP 상태 코드를 추출합니다.

예를 들어, GraphQL API에서 입력 값이 잘못된 경우, 다음과 같이 **GraphQLError** 클래스의 **statusCode** 속성을 사용하여 HTTP 상태 코드를 반환할 수 있습니다.

```
if (!isValidInput(input)) {
  const error = new GraphQLError('Invalid input');
  error.statusCode = 400;
  throw error;
}
```

위 코드에서 statusCode 속성은 HTTP 상태 코드를 나타내며, 400은 "Bad Request"를 나타냅니다. 이렇게 HTTP 상태 코드를 반환하면 클라이언트 측에서 해당 요청에 대한 적절한 처리를 할 수 있습니다.

- GraphQL Middleware: GraphQL Middleware를 사용하면 GraphQL API에서 발생하는 예외를 쉽게 처리할 수 있습니다. GraphQL Middleware는 GraphQL API 요청을 처리하기 전에 실행되며, 요청에 대한 처리를 수정하거나 예외 처리를 수행할 수 있습니다. 예를 들어, 다음과 같이 express-graphql 패키지를 사용하여 GraphQL Middleware를 생성할 수 있습니다.

```
const { graphqlHTTP } = require('express-graphql');

const errorHandler = (err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
};

const schema = ... // GraphQL 스키마 정의

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (err) => {
      err.statusCode = err.originalError?.statusCode;
      return err;
    },
  })
);

app.use(errorHandler);
```

위 코드에서 **errorHandler**는 GraphQL Errors 객체에서 HTTP 상태 코드를 추출하여 적절한 HTTP 상태 코드와 메시지를 반환하는 미들웨어입니다. **customFormatErrorFn**은 **graphqlHTTP** 함수에서 발생하는 GraphQL Errors 객체를 수정하는 데 사용되는 함수입니다. 이렇게 생성된 GraphQL Middleware를 사용하면, GraphQL API에서 발생하는 예외를 쉽게 처리할 수 있습니다.

## Quest

- 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced

- GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
- GraphQL의 경쟁자에는 어떤 것이 있을까요?
