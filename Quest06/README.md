# Quest 06. 인터넷의 이해

## Introduction

- 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics

- 서버와 클라이언트, 그리고 웹 브라우저
- 인터넷을 구성하는 여러 가지 프로토콜
  - IP
  - TCP
  - HTTP
- DNS

## Resources

- [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
- [IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Online service Traceroute](http://ping.eu/traceroute/)
- [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Wireshark](https://www.wireshark.org/download.html)
- [HTTP](https://ko.wikipedia.org/wiki/HTTP)
  - Chrome developer tool, Network tab
- [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
  - [Web-based Dig](http://networking.ringofsaturn.com/Tools/dig.php)

## **Checklist**

- **인터넷은 어떻게 동작하나요? Internet Protocol Suite의 레이어 모델에 입각하여 설명해 보세요.**

인터넷은 컴퓨터 네트워크들의 모음으로 이루어져 있으며, 이 네트워크들은 서로 다른 기술과 프로토콜을 사용하여 상호 연결되어 있습니다. 이러한 연결은 인터넷 프로토콜 스위트(Internet Protocol Suite)라고 불리는 네트워크 프로토콜의 집합을 사용하여 관리됩니다.

인터넷 프로토콜 스위트는 일반적으로 OSI 모델이라고 불리는 레이어 모델을 기반으로 구성됩니다. OSI 모델은 네트워크 통신을 일곱 개의 레이어로 분류하며, 이를 통해 각 레이어는 서로 다른 기능을 수행합니다. 인터넷 프로토콜 스위트는 이러한 OSI 모델을 단순화하여 다음과 같은 네 개의 레이어로 구성됩니다.

- **Application Layer**: 이 레이어는 인터넷 사용자와 서버 사이의 상호 작용을 다룹니다. 이 레이어는 HTTP, FTP, SMTP 등과 같은 프로토콜을 포함하며, 이러한 프로토콜은 인터넷에서 가장 많이 사용됩니다.
- **Transport Layer**: 이 레이어는 데이터를 전송하기 위한 연결 지향 프로토콜을 제공합니다. 이 레이어는 TCP와 UDP와 같은 프로토콜을 사용하여 데이터를 보내고 받습니다.
- **Internet Layer**: 이 레이어는 패킷 전송을 담당합니다. 이 레이어는 IP 프로토콜을 사용하여 다른 네트워크로 패킷을 라우팅합니다.
- **Network Interface Layer**: 이 레이어는 네트워크 하드웨어와 소프트웨어를 관리합니다. 이 레이어는 Ethernet, Wi-Fi, PPP 등과 같은 프로토콜을 사용하여 네트워크와 통신합니다.

인터넷 프로토콜 스위트의 이러한 레이어 모델은 인터넷에서 데이터를 안정적으로 전송하기 위한 구조를 제공합니다. 데이터는 상위 레이어에서 하위 레이어로 이동하면서 필요한 처리를 수행하고, 최종적으로 네트워크 인터페이스 레이어에서 물리적인 전송을 수행합니다. 이러한 방식으로 인터넷은 안정적이고 효율적인 데이터 통신을 가능하게 합니다.

- **근거리에서 서로 떨어진 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?**

근거리에서 떨어진 두 전자기기가 유선 또는 무선으로 서로 통신하려면, 해당 기기들은 일정한 프로토콜을 따라야 합니다.

이 프로토콜은 데이터 전송을 위한 규칙과 프로시저를 정의하며, 어떻게 데이터를 전송하고, 수신하고, 오류를 처리하는지를 결정합니다.

무선 통신의 경우, 가장 일반적으로 사용되는 프로토콜 중 하나는 Wi-Fi입니다. Wi-Fi 프로토콜은 무선 인터넷 연결을 제공하는 기술이며, 기기들은 Wi-Fi 통신을 통해 서로 데이터를 주고받을 수 있습니다. Wi-Fi 통신은 일반적으로 무선 액세스 포인트(AP)을 통해 이루어집니다.

AP는 인터넷에 연결된 장치로서, 다수의 Wi-Fi 기기들과 통신할 수 있습니다. Wi-Fi 기기는 AP에 연결되어 인터넷과 통신하며, AP를 통해 다른 Wi-Fi 기기들과 통신할 수 있습니다. Wi-Fi 통신은 IEEE 802.11 표준에 따라 동작하며, 이 표준은 무선 통신을 위한 규칙을 정의합니다.

유선 통신의 경우, 일반적으로 사용되는 프로토콜 중 하나는 이더넷(Ethernet)입니다. 이더넷은 랜(LAN)에서 컴퓨터들이 서로 데이터를 주고받을 수 있게 해주는 프로토콜입니다.

이더넷은 물리적인 케이블을 사용하여 데이터를 전송하며, 데이터 전송 속도는 케이블의 종류에 따라 달라집니다. 이더넷 프로토콜은 TCP/IP 프로토콜 스위트에 속하며, 이 프로토콜 스위트는 인터넷에서 데이터를 안정적으로 전송하기 위한 구조를 제공합니다.

따라서, 근거리에서 떨어진 두 전자기기가 유선 또는 무선으로 서로 통신하기 위해서는 해당 기기들이 같은 프로토콜을 사용하고, 데이터를 전송하는 규칙과 프로시저를 따라야 합니다. 이러한 프로토콜은 일반적으로 산업 표준으로 정의되어 있으며, 이를 따르는 기기들끼리는 상호 연결하여 통신할 수 있습니다.

- **근거리에 있는 여러 대의 전자기기가 서로 통신하는 프로토콜은 어떻게 동작할까요?**

근거리에 있는 여러 대의 전자기기가 서로 통신하려면, 해당 기기들은 일정한 프로토콜을 따라야 합니다. 이 프로토콜은 데이터 전송을 위한 규칙과 프로시저를 정의하며, 어떻게 데이터를 전송하고, 수신하고, 오류를 처리하는지를 결정합니다.

일반적으로 근거리 통신에는 Bluetooth, ZigBee, Z-Wave, NFC 등의 프로토콜이 사용됩니다. 이들 프로토콜은 주로 무선 통신을 기반으로 하며, 서로 다른 디바이스 간에 직접적인 연결을 허용하거나, 중계 장치를 통해 통신할 수 있습니다.

Bluetooth는 근거리 무선 기술로서, 모바일 기기와 주변 장치 사이에서 데이터를 교환할 수 있는 기술입니다. Bluetooth 프로토콜은 기기들 간의 직접적인 통신을 허용하며, 기기들은 서로를 인식하고, 연결을 맺을 수 있습니다. Bluetooth는 다양한 디바이스에서 사용되며, 이를 통해 스마트 폰, 스피커, 이어폰, 마우스, 키보드 등 다양한 기기들이 상호 연결하여 데이터를 주고 받을 수 있습니다.

ZigBee는 주로 IoT 기기와 같은 저전력 소비 기기 간에 통신하는 무선 프로토콜입니다. ZigBee는 무선 센서 네트워크를 구축할 수 있으며, 이를 통해 조명, 에어컨, 창문 등의 제어가 가능합니다. ZigBee는 높은 보안성을 제공하며, 저전력 소비가 가능해 배터리 수명을 연장할 수 있습니다.

Z-Wave는 주로 스마트 홈 제품 간에 통신하는 무선 프로토콜입니다. Z-Wave는 저전력 소비 기기에서 사용되며, 기기들은 무선 네트워크를 형성하여 데이터를 주고 받을 수 있습니다. Z-Wave는 주로 전력 소비 기기에서 사용되며, 전력 소비가 낮고 높은 보안성을 제공합니다.

NFC는 근거리 무선 통신 기술 중 하나로, 모바일 기기나 카드 같은 NFC 기기 간에 근거리에서 데이터를 교환할 수 있는 기술입니다.

NFC는 주로 결제 기능과 교통카드, 출입 카드 등에서 사용되며, 근거리에서 데이터를 안전하게 전송할 수 있습니다. NFC는 기기 간 통신에서 빠른 데이터 전송 속도와 간편한 사용성을 제공합니다. NFC는 스마트폰, 태블릿 등에 내장되어 있으며, 스마트폰을 대상으로 하는 쇼핑몰 등에서 결제 시스템으로도 사용됩니다.

이들 프로토콜은 각각 다른 용도와 특성을 가지고 있으며, 이들을 선택하고 적절하게 조합하여 다양한 디바이스 간에 효율적인 통신을 구성할 수 있습니다. 또한 이들 프로토콜은 인터넷과 연동하여 네트워크를 구성하고, 다양한 서비스를 제공할 수도 있습니다. 예를 들어 스마트 홈 제품은 인터넷과 연동하여 원격 제어가 가능하며, 사용자가 원격으로 제어할 수 있는 앱을 제공합니다.

- **아주 멀리 떨어져 있는 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?**

아주 멀리 떨어져 있는 두 전자기기가 통신하기 위해서는 인터넷과 같은 외부 네트워크를 통해 데이터를 주고받아야 합니다. 이를 위해서는 두 전자기기는 인터넷에 접속할 수 있는 네트워크 기기, 즉 라우터나 모뎀 등이 필요합니다.

만약 두 전자기기가 유선으로 통신한다면, 두 전자기기는 유선 케이블을 통해 라우터나 모뎀에 연결되어 있어야 합니다. 라우터나 모뎀은 인터넷 서비스 제공 업체(ISP)를 통해 인터넷에 연결되어 있으며, 인터넷을 통해 데이터를 전송하고 받을 수 있습니다.

무선으로 통신한다면, 두 전자기기는 무선으로 통신할 수 있는 기술을 사용해야 합니다. 대표적인 무선 통신 기술로는 Wi-Fi, Bluetooth, LTE 등이 있습니다. 이들 기술은 각각 다른 주파수 대역과 통신 방식을 사용하며, 라우터나 모뎀을 통해 인터넷에 연결된 상태에서 데이터를 전송하고 받을 수 있습니다.

종합적으로, 멀리 떨어져 있는 두 전자기기가 유선 또는 무선으로 통신하기 위해서는 인터넷과 같은 외부 네트워크를 통해 데이터를 전송하고 받을 수 있어야 하며, 이를 위해서는 네트워크 기기와 인터넷 서비스 제공 업체(ISP)의 지원이 필요합니다.

- **두 전자기기가 신뢰성을 가지고 통신할 수 있도록 하기 위한 프로토콜은 어떻게 동작할까요?**

두 전자기기 간 통신에서 신뢰성을 보장하기 위해서는 에러 검출과 복구 기능이 필요합니다. 이를 위해서 다양한 프로토콜이 사용됩니다.

TCP/IP 프로토콜은 인터넷에서 가장 일반적으로 사용되는 프로토콜 중 하나로, 에러 검출과 복구 기능을 내장하고 있습니다. TCP/IP는 전송 계층에서 데이터의 무결성을 검사하고, 필요한 경우에는 패킷 재전송 등의 복구 기능을 수행합니다. 또한 TCP/IP는 라우팅 기능을 가지고 있어서, 라우터를 통해 여러 대의 전자기기 간 통신이 가능합니다.

또한 UDP 프로토콜은 에러 검출과 복구 기능을 제공하지 않지만, 전송 속도가 빠르다는 장점을 가지고 있습니다. 이러한 특성으로 인해 UDP는 실시간 음성, 영상 스트리밍 등에서 많이 사용됩니다.

더불어, SSL/TLS 프로토콜은 데이터의 보안성을 보장하기 위해 사용됩니다. SSL/TLS는 데이터를 암호화하여 안전하게 전송하고, 상대방의 신원을 확인하여 안전한 통신을 보장합니다. 이러한 기능으로 SSL/TLS는 인터넷에서 보안적으로 중요한 역할을 수행하고 있습니다.

마지막으로, 데이터의 신뢰성을 보장하기 위해서는 네트워크 환경과 프로토콜의 선택이 중요합니다. 적절한 프로토콜을 선택하고, 데이터의 안정성과 보안성을 고려하여 네트워크를 구성함으로써 신뢰성을 보장할 수 있습니다.

- **HTTP는 어떻게 동작할까요?**

HTTP(Hypertext Transfer Protocol)는 인터넷 상에서 데이터를 주고받는 프로토콜 중 하나로, 웹 브라우저와 웹 서버 간의 통신에서

사용됩니다.

HTTP는 클라이언트-서버 모델로 동작합니다. 클라이언트는 웹 브라우저를 통해 HTTP 요청을 보내고, 서버는 HTTP 응답을 반환합니다. HTTP 요청과 응답은 텍스트 형식으로 되어 있으며, 헤더와 본문으로 구성됩니다.

HTTP 요청 메시지는 다음과 같은 형식으로 구성됩니다.

**\[HTTP Method\] \[URI\] \[HTTP Version\]**  
**\[Header1\]: \[Value1\]**  
**\[Header2\]: \[Value2\]**  
**...**  
**\[HeaderN\]: \[ValueN\]**

**\[Request Body\]**

여기서 HTTP Method는 요청의 종류를 나타내며, 주로 GET, POST, PUT, DELETE 등이 사용됩니다. URI는 요청 대상의 자원을 식별하는 URL(Uniform Resource Locator)입니다. HTTP Version은 사용되는 HTTP 버전을 나타냅니다.

HTTP 응답 메시지는 다음과 같은 형식으로 구성됩니다.

\*\*\[HTTP Version\] \[Status Code\] \[Status Message\]  
\[Header1\]: \[Value1\]  
\[Header2\]: \[Value2\]  
...  
\[HeaderN\]: \[ValueN\]

\[Response Body\]  
\*\*

여기서 Status Code는 서버의 상태를 나타내는 숫자 코드입니다. 예를 들어 200은 성공을, 404는 요청한 자원을 찾을 수 없음을, 500은 서버 내부 오류를 의미합니다. Status Message는 Status Code에 대한 설명입니다.

HTTP는 Stateless한 프로토콜이기 때문에, 이전 요청과 현재 요청 사이에 연결이 유지되지 않습니다. 따라서, 클라이언트는 요청마다 모든 정보를 새로 보내야 합니다. 이를 보완하기 위해 쿠키(cookie)와 같은 메커니즘이 사용됩니다.

- **우리가 브라우저의 주소 창에 [www.knowre.com](http://www.knowre.com/) 을 쳤을 때, 어떤 과정을 통해 서버의 IP 주소를 알게 될까요?**

우리가 브라우저의 주소 창에 "www.knowre.com"을 입력하면, 브라우저는 해당 도메인의 IP 주소를 알아내기 위해

DNS(Domain Name System) 서버에 쿼리를 보냅니다.

DNS 서버는 도메인 이름에 대한 IP 주소를 가지고 있으므로, 해당 도메인의 IP 주소를 찾아서 브라우저에게 응답합니다.

브라우저는 DNS 서버로부터 받은 IP 주소를 사용하여 해당 서버에 HTTP 요청을 보냅니다. 이 요청에는 HTTP 메서드(GET, POST 등)와 요청 URL, HTTP 헤더, 요청 본문 등의 정보가 포함됩니다.

서버는 이 요청을 받고, 해당 요청에 대한 적절한 HTTP 응답을 생성하여 브라우저에 반환합니다. 이 응답은 HTTP 상태 코드, HTTP 헤더, 응답 본문 등의 정보를 포함합니다.

브라우저는 이 응답을 받아서 렌더링하거나, 자바스크립트 등을 실행하고, 필요에 따라 추가적인 HTTP 요청을 보내게 됩니다.

## Quest

- tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
  - 어떤 IP주소들이 있나요?
  - 그 IP주소들은 어디에 위치해 있나요?
- Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  - TCP 패킷을 주고받는 과정은 어떻게 되나요?
  - 각각의 패킷에 어떤 정보들이 담겨 있나요?
- telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  - 어떤 헤더들이 있나요?
  - 그 헤더들은 어떤 역할을 하나요?

## Advanced

- HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
- TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
