(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{453:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"jdk11版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk11版本"}},[t._v("#")]),t._v(" JDK11版本")]),t._v(" "),s("p",[t._v("挑几个比较重要的或者好用的特性学习下")]),t._v(" "),s("h3",{attrs:{id:"_1、全新的-http-客户端-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、全新的-http-客户端-api"}},[t._v("#")]),t._v(" 1、全新的 HTTP 客户端 API")]),t._v(" "),s("p",[s("strong",[t._v("全新的 HTTP 客户端 API 优势：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("①、HTTP/2支持：")]),t._v(" 全新的 HttpClient 支持 HTTP/2 协议的所有特性，包括同步和异步编程模型。")]),t._v(" "),s("li",[s("strong",[t._v("②、WebSocket支持：")]),t._v(" 支持WebSocket，允许建立持久的连接，并进行全双工通信。")]),t._v(" "),s("li",[s("strong",[t._v("③、同步和异步：")]),t._v(" 提供了同步和异步的两种模式。")]),t._v(" "),s("li",[s("strong",[t._v("④、链式调用：")]),t._v(" 新的HttpClient 允许链式调用，使得构建和发送请求变得更简单。")]),t._v(" "),s("li",[s("strong",[t._v("⑤、更好的错误处理机制：")]),t._v(" 新的HttpClient 提供了更好的错误处理机制，当HTTP请求失败时，可以通过异常机制更清晰地了解到发生了什么。")])]),t._v(" "),s("p",[s("strong",[t._v("HTTP 客户端 核心类：")]),s("br"),t._v("\njava.net.http.HttpClient"),s("br"),t._v("\njava.net.http.HttpRequest"),s("br"),t._v("\njava.net.http.HttpResponse")]),t._v(" "),s("p",[s("strong",[t._v("HttpClient类常用方法：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("connectTimeout()")]),t._v(" "),s("td",[t._v("设置建立HTTP连接的超时时间")])]),t._v(" "),s("tr",[s("td",[t._v("version()")]),t._v(" "),s("td",[t._v("指定HTTP协议的版本（HTTP/1.1或HTTP/2）")])]),t._v(" "),s("tr",[s("td",[t._v("executor()")]),t._v(" "),s("td",[t._v("设置自定义的Executor，该Executor用于异步任务")])]),t._v(" "),s("tr",[s("td",[t._v("authenticator()")]),t._v(" "),s("td",[t._v("设置HTTP身份验证")])]),t._v(" "),s("tr",[s("td",[t._v("sslParameters()")]),t._v(" "),s("td",[t._v("设置SSL/TLS的配置")])])])]),t._v(" "),s("p",[s("strong",[t._v("HttpRequest类常用方法：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("uri()")]),t._v(" "),s("td",[t._v("设置统一资源标识符 (URI)")])]),t._v(" "),s("tr",[s("td",[t._v("header()")]),t._v(" "),s("td",[t._v("单个添加请求头")])]),t._v(" "),s("tr",[s("td",[t._v("headers()")]),t._v(" "),s("td",[t._v("批量添加请求头")])]),t._v(" "),s("tr",[s("td",[t._v("setHeader()")]),t._v(" "),s("td",[t._v("设置特定的请求头")])]),t._v(" "),s("tr",[s("td",[t._v("GET()")]),t._v(" "),s("td",[t._v("创建一个 GET 请求")])]),t._v(" "),s("tr",[s("td",[t._v("POST(HttpRequest.BodyPublisher body)")]),t._v(" "),s("td",[t._v("创建一个带有请求体的 POST 请求")])]),t._v(" "),s("tr",[s("td",[t._v("PUT(HttpRequest.BodyPublisher body)")]),t._v(" "),s("td",[t._v("创建一个带有请求体的 PUT 请求")])]),t._v(" "),s("tr",[s("td",[t._v("DELETE()")]),t._v(" "),s("td",[t._v("创建一个 DELETE请求")])])])]),t._v(" "),s("p",[t._v("HttpResponse类常用方法：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("statusCode()")]),t._v(" "),s("td",[t._v("获取HTTP响应的状态码")])]),t._v(" "),s("tr",[s("td",[t._v("body()")]),t._v(" "),s("td",[t._v("获取HTTP响应体")])]),t._v(" "),s("tr",[s("td",[t._v("headers()")]),t._v(" "),s("td",[t._v("获取HTTP响应头")])])])]),t._v(" "),s("p",[s("strong",[t._v("同步请求使用示例：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URI")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接超时为10秒")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链接")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求方式")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口超时时间")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BodyHandlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("异步请求使用示例：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建 HttpClient 对象")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),t._v(" httpClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接超时为10秒")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建 HttpRequest 对象")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链接")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 超时时间为 5 秒")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求方式")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送异步请求")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" futureResponse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" httpClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BodyHandlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理响应")]),t._v("\n        futureResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("thenApply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取响应体")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("thenAccept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印响应体")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"异步请求"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        futureResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待处理完成")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、处理文本文件的api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、处理文本文件的api"}},[t._v("#")]),t._v(" 2、处理文本文件的API")]),t._v(" "),s("p",[t._v("这两个API对于处理文本文件非常好用。")]),t._v(" "),s("p",[t._v("Files.readString(Path path)：读取一个文件的所有内容并将其返回为一个字符串。"),s("br"),t._v("\nFiles.writeString(Path path, CharSequence csq, OpenOption... options)：将一个字符串写入到文件中。")]),t._v(" "),s("p",[s("strong",[t._v("代码示例：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Path")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\\\Users\\\\Administrator\\\\Desktop\\\\123.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" ss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123231\\nwqedqwew\\nqweqwewq"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * StandardOpenOption的值  默认是  CREATE 和 WRITE\n         *\n         * READ, 允许文件通道进行读取操作\n         * WRITE, 允许文件通道进行写入操作\n         * APPEND, 指示应该在文件的当前结尾之后追加数据，如果文件不存在，则创建新文件。\n         * TRUNCATE_EXISTING, 如果文件已经存在，将其长度截断为0，即清空文件内容，然后开始写入。\n         * CREATE, 如果指定的文件不存在，则创建它。如果文件已存在，这个选项本身不会影响其内容。\n         * CREATE_NEW, 仅在文件不存在时创建新文件。如果文件已存在，则写入操作失败并抛出FileAlreadyExistsException异常。\n         * DELETE_ON_CLOSE, 当关闭相关的通道或流时，自动删除此文件。这对于临时文件特别有用。\n         * SPARSE, 指示文件系统应为文件使用稀疏文件支持。这对于大文件特别有用，可以减少实际分配的磁盘空间。\n         * SYNC, 要求对文件的元数据和内容的更新同步写入到存储设备。这是最安全但可能较慢的选项，确保了在发生系统崩溃后数据的一致性。\n         * DSYNC; 也称为DATA_SYNC）：要求仅文件内容的更新同步写入到存储设备，而元数据更新可以有不同的同步策略。\n         *       相比SYNC，这个选项提供了较好的性能折衷，但仍保证了数据的基本完整性。\n         *\n         * */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、新增-zgc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、新增-zgc"}},[t._v("#")]),t._v(" 3、新增 ZGC")]),t._v(" "),s("p",[t._v("Z Garbage Collector，这款垃圾回收器的主要特点是可伸缩的、低延迟。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("低延迟：ZGC旨在实现暂停时间不超过10毫秒的目标。这对于要求极低停顿时间的应用（如金融服务、交易系统和大型Web服务）非常有利。")])]),t._v(" "),s("li",[s("p",[t._v("可扩展性：ZGC设计用于处理非常大的内存容量，能够高效管理数百GB乃至TB级别的堆内存，非常适合现代云基础设施中的大内存服务器。")])]),t._v(" "),s("li",[s("p",[t._v("并发执行：几乎所有垃圾回收工作都是并发执行的，包括标记、重定位（即移动存活对象）、压缩等过程，从而大大减少了应用程序的停顿时间。")])]),t._v(" "),s("li",[s("p",[t._v("无分代设计：ZGC摒弃了传统分代收集器中的年轻代和老年代的概念，转而采用统一的内存管理方式，虽然它内部有类似颜色的区分来优化垃圾回收效率，但对外呈现的是单一内存池。")])]),t._v(" "),s("li",[s("p",[t._v("可选择的内存限制：用户可以通过JVM参数设置堆内存的使用上限，ZGC会尝试保持堆的使用不超过这个限制，有助于容器化环境中的资源管理。")])])]),t._v(" "),s("p",[s("strong",[t._v("ZGC的使用：")]),s("br"),t._v("\nZGC在JDK11版本 ，只支持 Linux/x64 操作系统。"),s("br"),t._v("\n为了方便演示，我这里 使用JDK22版本在 Windows系统上演示。")]),t._v(" "),s("p",[t._v("ZGC垃圾回收器 需要手动指定。"),s("br"),t._v("\n在JVM的启动参数上新增如下参数：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+UnlockExperimentalVMOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-XX:+UseZGC")]),t._v("  \n")])])]),s("p",[t._v("-XX:+UnlockExperimentalVMOptions  允许使用实验性特性"),s("br"),t._v("\n-XX:+UseZGC  使用ZGC 作为垃圾回收器")]),t._v(" "),s("p",[t._v("从JDK 15开始，ZGC（Z Garbage Collector）就已经成为默认启用的垃圾收集器之一，无需再使用-XX:+UnlockExperimentalVMOptions来解锁实验性特性。这意味着从JDK 15及之后的版本可以直接通过 -XX:+UseZGC 选项来启用ZGC，而不需要额外的标志来解锁实验性功能。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/13-1.png"),alt:"mixureSecure"}}),t._v(" "),s("p",[t._v("添加如下JVM启动参数：  -Xlog:gc*:file=gc.log:time")]),t._v(" "),s("p",[t._v("看下启动后的gc日志：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Initializing The Z Garbage Collector    // 初始化ZGC\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.0")]),t._v(".1+8-16 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // Java版本\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using legacy single-generation mode // ZGC当前配置为使用传统的单代模式进行垃圾回收\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" NUMA Support: Disabled   // NUMA（非统一内存访问）优化未被启用\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CPUs: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" total, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" available  // 系统总共有8个CPU核心，全部可用，并且可用内存为16.2GB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Memory: 16207M    // 系统总共有8个CPU核心，全部可用，并且可用内存为16.2GB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Large Page Support: Disabled  // 大页内存支持，大页可以减少内存管理开销\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" GC Workers: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dynamic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // 有2个动态调整的垃圾回收工作线程\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.172+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Address Space Type: Contiguous/Unrestricted/Complete  //  ZGC的地址空间配置，大小为9.6GB，采用连续、不受限、完整的地址空间类型\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Address Space Size: 3200M x "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 9600M // ZGC的地址空间配置，大小为9.6GB，采用连续、不受限、完整的地址空间类型\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Min Capacity: 8M  // 最小堆容量8MB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Initial Capacity: 200M  //初始化堆容量200MB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Max Capacity: 200M  //最大堆容量200MB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Medium Page Size: 4M // 设置为4MB，这通常用于内部内存分配和管理\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Pre-touch: Disabled  // 不会预先分配和初始化所有内存页以减少以后的页面错误，这可能会在首次访问时增加延迟\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Uncommit: Enabled   // 启用了解除提交内存功能，允许JVM释放不再需要的物理内存给操作系统，并设置了300秒的延迟\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.173+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Uncommit Delay: 300s\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.181+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Runtime Workers: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("   // 运行时工作线程: 同样为2个，与GC工作线程数一致\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-05-28T15:05:46.181+0800"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using The Z Garbage Collector  // 开始使用 ZGC\n")])])]),s("p",[t._v("关于ZGC更深入的知识点 在后面学习JVM的时候再写...")])])}),[],!1,null,null,null);s.default=e.exports}}]);