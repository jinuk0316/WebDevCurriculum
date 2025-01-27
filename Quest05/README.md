# Quest 05. OOP 특훈

## Introduction

- 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍을 조금 더 훈련해 보겠습니다.

## Topics

- Separation of Concerns
- 객체지향의 설계 원칙
  - SOLID 원칙
- Local Storage

## Resources

- [Separation of concerns](https://jonbellah.com/articles/separation-of-concerns/)
- [SOLID](https://en.wikipedia.org/wiki/SOLID)
- [객체지향 설계 5원칙](https://webdoli.tistory.com/210)
- [MDN - Local Storage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

## **Checklist**

- **관심사의 분리 원칙이란 무엇인가요? 웹에서는 이러한 원칙이 어떻게 적용되나요?**

관심사의 분리(Separation of Concerns) 원칙은 소프트웨어 공학에서 사용되는 개념으로, 시스템을 작은 단위로 분할하여 각 단위가 서로 다른 관심사를 처리하도록 하는 디자인 원칙입니다. 각 단위는 다른 단위와 독립적으로 존재하며, 변경이 발생할 때 다른 단위에 영향을 미치지 않도록 구현됩니다.

예를 들어, 웹 개발에서는 프론트엔드와 백엔드를 분리함으로써 관심사의 분리 원칙을 적용할 수 있습니다. 프론트엔드는 사용자 인터페이스(UI)와 관련된 코드를 처리하고, 백엔드는 데이터베이스와 상호 작용하며 로직을 처리합니다. 이렇게 분리함으로써, 더 나은 유지 보수성, 확장성, 테스트 용이성 등의 이점을 얻을 수 있습니다.

또 다른 예로는 CSS와 JavaScript를 분리하는 것이 있습니다. CSS는 디자인과 레이아웃과 같은 시각적인 요소를 처리하고, JavaScript는 동적인 요소와 상호 작용하는 코드를 처리합니다. 이렇게 분리함으로써, 디자인 변경과 로직 변경을 쉽게 구분할 수 있으며, 유지 보수가 용이해집니다.

웹 개발에서는 또한 Model-View-Controller(MVC) 패턴과 같은 디자인 패턴을 사용하여 관심사의 분리를 적용합니다. MVC는 애플리케이션을 모델(Model), 뷰(View), 컨트롤러(Controller) 세 가지 요소로 나누어서 관심사의 분리를 적용합니다. 이를 통해 각 요소는 독립적으로 작동할 수 있으며, 변경이 발생할 때 다른 요소에 영향을 미치지 않도록 구현됩니다.

따라서, 관심사의 분리 원칙은 웹 개발에서도 중요한 원칙 중 하나이며, 코드의 유지 보수성과 확장성을 향상시키는 데 큰 역할을 합니다.

- **객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?**

SOLID는 객체지향 프로그래밍에서 유지보수 가능하고 확장 가능한 소프트웨어를 설계하기 위한 원칙의 앞 글자를 따서 만들어진 약어입니다. SOLID 원칙은 아래와 같습니다.

- **단일 책임 원칙 (Single Responsibility Principle, SRP)**
- **개방-폐쇄 원칙 (Open-Closed Principle, OCP)**
- **리스코프 치환 원칙 (Liskov Substitution Principle, LSP)**
- **인터페이스 분리 원칙 (Interface Segregation Principle, ISP)**
- **의존 역전 원칙 (Dependency Inversion Principle, DIP)**

1.  **SRP**: 단일 책임 원칙은 클래스는 하나의 책임만 가져야 한다는 것을 의미합니다. 클래스가 여러 가지 책임을 가지게 되면 코드의 복잡도가 증가하고 유지보수성이 떨어지게 됩니다. 예를 들어, 사용자 정보를 저장하고 출력하는 클래스는 두 가지 책임을 가지고 있기 때문에 SRP 원칙을 위반합니다. 이 경우에는 사용자 정보를 저장하는 클래스와 출력하는 클래스로 분리하는 것이 바람직합니다.
2.  **OCP**: 개방\-폐쇄 원칙은 소프트웨어 엔티티(클래스, 모듈, 함수 등)는 확장에는 열려 있어야 하고 변경에는 닫혀 있어야 한다는 것을 의미합니다. 즉, 기존의 코드를 변경하지 않고도 새로운 기능을 추가할 수 있도록 설계해야 합니다. 예를 들어, 계산기 클래스에 새로운 연산을 추가할 때 계산기 클래스의 코드를 변경하지 않고, 새로운 클래스를 만들어 계산기 클래스에 추가하는 것이 바람직합니다.
3.  **LSP**: 리스코프 치환 원칙은 서브 타입은 언제나 자신의 기반 타입으로 대체할 수 있어야 한다는 것을 의미합니다. 즉, 부모 클래스의 인스턴스를 자식 클래스의 인스턴스로 대체해도 프로그램의 정확성이 보장되어야 합니다. 예를 들어, 삼각형 클래스와 사각형 클래스가 있을 때, 이 두 클래스가 모두 도형 클래스의 서브 타입이라면, 도형 클래스의 인스턴스를 삼각형 클래스나 사각형 클래스의 인스턴스로 대체해도 프로그램의 동작이 변하지 않아야 합니다.
4.  **ISP**: 인터페이스 분리 원칙은 클라이언트는 자신이 사용하지 않는 메서드에 의존 관계를 맺으면 안 된다는 것을 의미합니다. 즉, 인터페이스를 작게 분리해서 클라이언트가 필요한 메서드만 사용할 수 있도록 해야 합니다. 예를 들어, 동물 클래스가 있을 때, 특정 동물만 날 수 있는 fly() 메서드가 있으면, 모든 동물 클래스가 fly() 메서드를 구현해야 하는데, 이는 ISP를 위반하는 것입니다. 이 경우에는 날 수 있는 동물 클래스와 날 수 없는 동물 클래스로 분리하여, 날 수 있는 동물 클래스만 fly() 메서드를 구현하도록 하는 것이 바람직합니다.
5.  **DIP**: 의존 역전 원칙은 추상화된 것은 구체적인 것에 의존하면 안 된다는 것을 의미합니다. 즉, 고수준 모듈은 저수준 모듈에 의존하면 안 되고, 추상화된 인터페이스에 의존해야 합니다. 예를 들어, 텍스트 에디터 클래스가 있을 때, 텍스트 파일을 저장하는 기능을 구현하기 위해 파일 시스템 클래스에 직접 의존하면 DIP를 위반하는 것입니다. 이 경우에는 파일 시스템 인터페이스를 만들고, 텍스트 에디터 클래스는 이 인터페이스에 의존하도록 해야 합니다.

- **로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?**

로컬 스토리지는 웹 브라우저에 저장되는 클라이언트 사이드 데이터 저장소입니다. 이것은 브라우저를 닫거나 페이지를 새로 고침해도

데이터가 유지될 수 있도록 합니다. 로컬 스토리지는 HTML5의 웹 스토리지 API를 사용하여 구현됩니다.

로컬 스토리지의 내용을 확인하려면 브라우저의 개발자 도구를 사용하면 됩니다. 대부분의 브라우저에서는 F12 키를 눌러 개발자 도구를 열고, "Application" 탭을 선택하면 로컬 스토리지에 저장된 데이터를 확인할 수 있습니다. "Local Storage" 섹션을 선택하면, 로컬 스토리지에 저장된 키-값 쌍의 목록이 표시됩니다. 값을 확인하려면 해당 키를 선택하면 됩니다.

JavaScript를 사용하여 로컬 스토리지에 데이터를 저장하고 검색할 수도 있습니다. 이를 위해서는 "localStorage" 객체를 사용하여 로컬 스토리지에 데이터를 저장하고 검색할 수 있습니다. 예를 들어, 다음과 같은 코드를 사용하여 "myKey"라는 키와 연결된 값을

로컬 스토리지에 저장할 수 있습니다.

```
localStorage.setItem("myKey", "myValue");
```

그리고 다음과 같은 코드를 사용하여 "myKey"라는 키에 연결된 값을 가져올 수 있습니다.

```
var myValue = localStorage.getItem("myKey");
```

로컬 스토리지는 쿠키보다 더 많은 데이터를 저장할 수 있고, HTTP 요청 시에 서버로 전송되지 않기 때문에 보안성이 더 높습니다. 하지만 로컬 스토리지에 저장된 데이터는 브라우저에서 삭제하거나 초기화하지 않는 한 계속해서 유지됩니다. 따라서 보안에 민감한 정보를 저장하기에는 적합하지 않습니다.

## Quest

- 외부 라이브러리나 프레임워크를 사용하지 않고, 자바스크립트를 이용하여 간단한 웹브라우저 기반의 텍스트 에디터를 만들어 보겠습니다.
  - 기본적으로 VSCode와 같이 탭을 이용해 여러 개의 파일을 동시에 편집할 수 있습니다.
  - 탭을 눌러 열려 있는 다른 파일을 편집할 수 있으며 탭을 언제든지 닫을 수 있습니다.
  - VSCode와 같이 새 파일, 로드, 저장, 다른 이름으로 저장 등의 기능을 가집니다. 저장은 웹 브라우저의 로컬 스토리지를 이용합니다.
  - VSCode와 같이 탭이 수정되었는데 저장되기 이전일 경우 이를 알려주는 인디케이터가 작동합니다.
  - 같은 이름의 파일을 저장할 경우 에러를 표시해야 합니다.
- 이번 퀘스트의 결과물은 앞으로의 많은 퀘스트에서 재사용되게 되니, 주의깊게 코드를 작성해 보세요!

## Advanced

- 웹 프론트엔드 개발에서 이러한 방식의 패턴을 더 일반화해서 정리할 수 있을까요? 이 퀘스트에서 각각의 클래스들이 공통적으로 수행하게 되는 일들에는 무엇이 있을까요?
