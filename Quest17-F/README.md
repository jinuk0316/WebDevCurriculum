# Quest 17-F. 번들링과 빌드 시스템

## Introduction

- 이번 퀘스트에서는 현대적 웹 클라이언트 개발에 핵심적인 번들러와 빌드 시스템의 구조와 사용 방법에 대해 알아보겠습니다.

## Topics

- Webpack
- Bundling
  - Data URL
- Transpiling
  - Source Map
- Hot Module Replacement

## Resources

- [Webpack](https://webpack.js.org/)
- [Webpack 101: An introduction to Webpack](https://medium.com/hootsuite-engineering/webpack-101-an-introduction-to-webpack-3f59d21edeba)

## Checklist

- **여러 개로 나뉘어진 자바스크립트나 이미지, 컴포넌트 파일 등을 하나로 합치는 작업을 하는 것은 성능상에서 어떤 이점이 있을까요?**

여러 개로 나뉘어진 자바스크립트, 이미지, 컴포넌트 파일 등을 하나로 합치는 것은 웹 애플리케이션의 성능 향상에 도움이 될 수 있습니다.

- **감소된 HTTP 요청 수**: 파일을 하나로 합치면 브라우저가 서버에 보내는 HTTP 요청 수가 줄어듭니다. HTTP 요청은 웹 페이지 로딩 시간의 주요 원인 중 하나이므로 이를 줄이는 것은 로딩 속도를 빠르게 할 수 있습니다.
- **캐싱의 용이성**: 하나의 파일로 합치면 브라우저에서 캐싱하기가 더 쉬워집니다. 브라우저는 동일한 URL을 가진 파일을 캐시하므로, 파일을 하나로 합치면 브라우저에서 한 번 캐시한 파일을 계속해서 사용할 수 있습니다. 이를 통해 로딩 시간을 줄이고 서버의 부하를 줄일 수 있습니다.
- **파일 압축의 용이성**: 파일을 하나로 합치면 파일 압축을 적용하기 쉬워집니다. 파일 압축은 파일 크기를 줄여서 전송 시간을 줄이는 데 도움이 되므로, 하나로 합친 파일을 압축할 수 있다면 로딩 속도를 더욱 빠르게 할 수 있습니다.
- **코드 최적화**: 하나로 합친 파일을 통해 코드 최적화 작업을 수행하기 쉬워집니다. 여러 개의 파일이 있을 때는 코드의 중복이나 불필요한 부분이 발생할 수 있습니다. 하나로 합친 파일에서는 이를 쉽게 파악하여 코드 최적화 작업을 수행할 수 있습니다.
- **모듈화의 용이성**: 파일을 하나로 합치면 모듈화하기 쉬워집니다. 모듈화는 큰 프로젝트에서 필수적인 기능 중 하나입니다. 파일을 하나로 합치면 코드를 모듈화하기 쉬워지므로, 유지보수와 코드의 재사용성을 높일 수 있습니다.

- **이미지를 Data URL로 바꾸어 번들링하는 것은 어떤 장점과 단점이 있을까요?**

**장점**:

- **HTTP 요청 수 감소**: 이미지를 Data URL로 번들링하면 이미지 파일을 로드하기 위한 HTTP 요청 수가 감소합니다. 따라서 웹 페이지의 로딩 시간을 단축할 수 있습니다.
- **빠른 로딩 속도**: Data URL로 번들링된 이미지는 브라우저에 이미 캐시되어 있으므로, 이미지를 다시 다운로드할 필요 없이 빠르게 로드됩니다.
- **서버 부하 감소**: 이미지를 Data URL로 번들링하면 서버에서 이미지 파일을 제공하는 부하를 줄일 수 있습니다.
- **코드 의존성 감소**: 이미지를 Data URL로 번들링하면 웹 페이지에서 필요한 이미지 파일을 더 이상 외부 파일로 의존하지 않습니다. 따라서 웹 페이지에서 필요한 이미지 파일을 일일이 참조하는 코드 작성을 줄일 수 있습니다.

**단점**:

- **번들 파일 크기 증가**: 이미지를 Data URL로 번들링하면 이미지 파일의 내용이 번들 파일에 포함되므로, 번들 파일의 크기가 증가합니다. 이는 전체 웹 페이지의 로딩 시간을 늘릴 수 있습니다.
- **캐시 문제**: Data URL로 번들링된 이미지는 브라우저 캐시에 저장되므로, 이미지를 수정할 경우에는 캐시를 지우고 다시 다운로드해야 합니다.
- **유지보수의 어려움**: 이미지를 Data URL로 번들링하면 이미지 파일의 내용이 번들 파일에 포함되므로, 이미지를 수정하려면 번들 파일을 다시 빌드해야 합니다. 이는 이미지 파일의 수정이 빈번한 경우에는 유지보수가 어려울 수 있습니다.

- **Source Map이란 무엇인가요? Source Map을 생성하는 것은 어떤 장점이 있을까요?**

Source Map은 JavaScript, CSS, TypeScript 등의 원본 파일과, 번들링 된 파일 사이의 매핑 정보를 담고 있는 파일입니다. 번들링된 파일을 디버깅할 때, Source Map은 원본 파일에서 디버깅할 수 있도록 매핑 정보를 제공해줍니다.

JavaScript, CSS 등의 코드는 보통 번들링 과정을 거치게 됩니다. 번들링 과정에서는 여러 개의 파일이 합쳐져 하나의 파일로 만들어지고, 이 파일은 원본 파일과 다른 형태를 가지게 됩니다. 이렇게 변환된 파일은 디버깅할 때, 원본 파일에서 발생한 오류 정보를 제공하지 않아 디버깅이 어렵습니다.

Source Map을 생성하면, 번들링된 파일에서 발생한 오류 정보를 원본 파일에서 디버깅할 수 있습니다. Source Map을 이용하면, 개발자는 번들링된 파일에서 발생한 오류 정보를 쉽게 원본 파일에서 확인할 수 있으므로, 디버깅 시간을 단축할 수 있습니다.

Source Map을 생성하는 것은 다음과 같은 장점이 있습니다.

- **디버깅 용이성**: Source Map을 생성하면 번들링된 파일에서 발생한 오류 정보를 원본 파일에서 쉽게 디버깅할 수 있습니다. 따라서 디버깅 시간을 단축할 수 있습니다.
- **번들 파일 크기 감소**: Source Map을 이용하면, 원본 파일과 번들링된 파일 사이의 매핑 정보를 담은 파일을 별도로 생성하므로, 번들 파일의 크기가 줄어듭니다.
- **보안성 향상**: Source Map을 이용하면, 원본 파일의 소스 코드를 숨길 수 있습니다. 즉, Source Map을 이용하면, 개발자는 원본 파일의 소스 코드를 안전하게 보호할 수 있습니다.

- **Webpack의 필수적인 설정은 어떤 식으로 이루어져 있을까요?**

Webpack은 모듈 번들러로서, 웹 애플리케이션을 개발하는 데 필요한 여러 모듈들을 번들링하고, 이를 브라우저에서 사용할 수 있는 형태로 변환해주는 도구입니다. Webpack을 사용하려면, 몇 가지 필수적인 설정이 필요합니다.

- entry: entry 설정은 Webpack이 모듈 번들링을 시작할 파일의 경로를 설정합니다. 보통 entry 설정은 **src/index.js**와 같이 애플리케이션의 진입점을 가리킵니다.
- output: output 설정은 Webpack이 번들링한 파일을 저장할 경로와 이름을 설정합니다. 보통 output 설정은 **dist/main.js**와 같이 번들링한 파일을 저장할 경로와 이름을 지정합니다.
- module: module 설정은 Webpack이 어떻게 모듈을 처리할지 설정합니다. 보통 module 설정은 다음과 같이 구성됩니다.

- rules: rules 설정은 어떤 모듈을 어떻게 처리할지를 설정합니다. 예를 들어, JavaScript 파일은 babel-loader를 사용하여 ES6 코드를 ES5 코드로 변환할 수 있습니다.

- plugins: plugins 설정은 Webpack이 번들링한 파일에 추가적인 기능을 제공하는 플러그인을 설정합니다. 예를 들어, HtmlWebpackPlugin 플러그인을 사용하면 HTML 파일에 번들링한 자바스크립트 파일의 경로를 자동으로 추가해줄 수 있습니다.
- mode: mode 설정은 Webpack이 개발용으로 동작할지, 운영용으로 동작할지, 또는 둘 다를 모두 고려해 동작할지를 설정합니다. mode 설정은 **development, production, none** 중 하나를 선택할 수 있습니다.

이외에도, Webpack 설정에서는 다양한 옵션들이 존재합니다. 하지만, entry, output, module, plugins, mode는 Webpack 설정에서 필수적인 부분입니다.

- **Webpack의 플러그인과 모듈은 어떤 역할들을 하나요?**

- **모듈(Module)**

모듈은 Webpack에서 번들링할 대상 파일 단위로, JavaScript 파일 뿐만 아니라 CSS, 이미지, 폰트 등 다양한 종류의 파일도 모듈로 인식합니다. 모듈은 각각 자신의 로컬 스코프를 갖으며, 다른 모듈에서 import/export 키워드를 사용하여 서로간에 의존 관계를 갖습니다.

Webpack에서 모듈을 처리하기 위해 로더(loader)를 사용합니다. 로더는 모듈을 불러올 때, 해당 모듈에 적용할 전처리(pre-processing)나 후처리(post-processing)를 지정할 수 있는 도구입니다. 예를 들어, JavaScript 파일에 대해 Babel 로더를 사용하면, ES6 문법을 ES5로 변환하여 번들링할 수 있습니다.

- **플러그인(Plugin)**

플러그인은 Webpack에서 모듈을 번들링할 때, 추가적인 작업을 수행하도록 도와주는 도구입니다. 플러그인은 번들링된 결과물에 대한 후처리(post-processing)를 담당하며, 특정한 작업을 수행하기 위해 로더와는 달리 Webpack의 내부 구조에 접근할 수 있습니다.

Webpack에서 제공하는 다양한 플러그인을 사용하면, 번들링된 결과물의 최적화, 코드 난독화, 환경 변수 설정, HTML 파일 생성 등 다양한 작업을 수행할 수 있습니다. 예를 들어, HtmlWebpackPlugin 플러그인을 사용하면, 번들링된 결과물에 대해 HTML 파일을 생성할 수 있습니다.

결론적으로, 모듈은 Webpack이 번들링할 대상 파일들을 로딩하고 처리하는데 사용되는 단위이며, 플러그인은 Webpack이 번들링된 결과물에 대해 추가적인 작업을 수행하는데 사용되는 도구입니다.

- **Webpack을 이용하여 HMR(Hot Module Replacement) 기능을 설정하려면 어떻게 해야 하나요?**

- Webpack Dev Server 설치하기

HMR을 사용하기 위해서는 Webpack Dev Server가 필요합니다. Webpack Dev Server를 설치하기 위해 다음 명령어를 실행합니다.

```
npm install webpack-dev-server --save-dev
```

- Webpack 설정 파일 수정하기

Webpack 설정 파일에서 다음과 같이 HMR 관련 옵션을 추가합니다.

```
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    hot: true // HMR을 활성화하기 위해 추가
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
```

- HMR이 적용될 모듈 수정하기

HMR이 적용될 모듈은 다음과 같이 수정합니다.

```
// src/index.js

if (module.hot) {
  module.hot.accept('./path/to/modified/module', function() {
    // 수정된 모듈을 불러옵니다.
    const updatedModule = require('./path/to/modified/module');
    // 수정된 모듈을 이용하여 업데이트 작업을 수행합니다.
    // ...
  });
}
```

- Webpack Dev Server 실행하기

Webpack Dev Server를 실행하기 위해 다음 명령어를 실행합니다.

```
npx webpack serve
```

이렇게 설정하면, 수정된 모듈이 저장될 때마다 Webpack Dev Server가 수정된 모듈을 감지하고, 수정된 모듈을 다시 불러와서 페이지를 새로고침하지 않고도 수정된 내용을 바로 확인할 수 있습니다.

## Quest

- 직전 퀘스트의 소스만 남기고, Vue의 Boilerplating 기능을 쓰지 않고 Webpack 관련한 설정을 원점에서 다시 시작해 보세요.
  - 필요한 번들링과 Source Map, HMR 등의 기능이 모두 잘 작동해야 합니다.

## Advanced

- Webpack 이전과 이후에는 어떤 번들러가 있었을까요? 각각의 장단점은 무엇일까요?
