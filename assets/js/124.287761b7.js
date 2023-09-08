(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{509:function(e,_,a){"use strict";a.r(_);var t=a(6),v=Object(t.a)({},(function(){var e=this,_=e.$createElement,a=e._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://juejin.im/post/6844904198241255432",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器缓存"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("作者: 王振州 日期: 2020-06-23")])]),e._v(" "),a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[e._v("#")]),e._v(" 1. 前言")]),e._v(" "),a("p",[e._v("        一个优秀的缓存策略可以缩短网页请求资源的距离，减少延迟，并且由于缓存文件可以重复利用，还可以减少带宽，降低网络负荷，提高网页的整体加载速度。")]),e._v(" "),a("p",[e._v("        对于一条网络请求来说， 一般会经历"),a("code",[e._v("浏览器发送请求==>>后端处理请求==>>浏览器响应请求")]),e._v("。 如果不使用缓存的话每条请求都会经历这个过程，若重复请求相同资源，会对服务器资源造成浪费，服务器重复读取资源，发送给浏览器，浏览器重复下载， 造成不必要的等待和消耗。而浏览器缓存发生在"),a("code",[e._v("浏览器发送请求")]),e._v("和"),a("code",[e._v("浏览器响应请求")]),e._v("阶段，直接使用缓存就可以避免上面请求过程的重复发生。")]),e._v(" "),a("p",[e._v("        下面将通过缓存策略、缓存位置以及使用场景展开\n"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d8063ffe55e334fb826a45d74df83051/172df3f540aa0cc1",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_2-缓存读取的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存读取的过程"}},[e._v("#")]),e._v(" 2. 缓存读取的过程")]),e._v(" "),a("p",[e._v("        浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识，如果找到缓存验证时效性，如果缓存有效则使用该缓存并且状态码为"),a("code",[e._v("200")]),e._v("（这个过程为"),a("code",[e._v("强缓存")]),e._v("）；如果缓存无效，浏览器会发送请求并且携带缓存标识，服务器会依据请求携带的缓存标识决定是否使用缓存，使用缓存返回"),a("code",[e._v("304")]),e._v("和"),a("code",[e._v("Not Modified")]),e._v("，此时浏览器使用缓存，若文件被修改则会返回"),a("code",[e._v("200")]),e._v("和"),a("code",[e._v("文件内容")]),e._v("，浏览器放弃使用缓存，使用请求返回的内容（这个过程为"),a("code",[e._v("协商缓存")]),e._v("）。"),a("br"),e._v(" "),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/c55829b8fd48a669c15d0ffb8cb3b745/172df3f82b0219a3",alt:"缓存读取的过程"}})]),e._v(" "),a("h2",{attrs:{id:"_3-强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-强缓存"}},[e._v("#")]),e._v(" 3. 强缓存")]),e._v(" "),a("p",[a("code",[e._v("强缓存")]),e._v("：不会向服务器发送请求，直接从缓存中读取资源，在浏览器控制台的"),a("code",[e._v("Network")]),e._v("选项中可以看到该请求返回"),a("code",[e._v("200")]),e._v("的状态码，并且 Size 显示"),a("code",[e._v("from disk cache")]),e._v("或"),a("code",[e._v("from memory cache")]),e._v("。强缓存可以通过设置两种 HTTP Header 实现："),a("code",[e._v("Expires")]),e._v(" 和 "),a("code",[e._v("Cache-Control")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"_3-1-expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-expires"}},[e._v("#")]),e._v(" 3.1 Expires")]),e._v(" "),a("p",[e._v("        缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。Expires 是 Web 服务器响应消息头字段，在响应 http 请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。")]),e._v(" "),a("p",[e._v("Expires 是 "),a("code",[e._v("HTTP/1.0 的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("Expires: Wed, 22 Oct 2018 08:41:00 GMT")]),e._v("表示资源会在 "),a("code",[e._v("Wed, 22 Oct 2018 08:41:00 GMT")]),e._v(" 后过期，需要再次请求。")]),e._v(" "),a("h3",{attrs:{id:"_3-2-cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cache-control"}},[e._v("#")]),e._v(" 3.2 Cache-Control")]),e._v(" "),a("p",[a("code",[e._v("Cache-Control")]),e._v("是在 http/1.1 中添加的，为了解决"),a("code",[e._v("Expires")]),e._v("存在的问题，该字段与"),a("code",[e._v("Expires")]),e._v("的缓存思路相同，都是设置了一个过期时间，不同的是"),a("code",[e._v("max-age")]),e._v("设置的是相对开始缓存时间开始往后多久，因此不存在受日期不准确情况的影响。"),a("code",[e._v("Cache-Contro")]),e._v("可以在请求头或者响应头中设置，并且可以组合使用多种指令：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("指令")]),e._v(" "),a("th",[e._v("指令作用")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("public")]),e._v(" "),a("td",[e._v("表示响应可以被客户端和代理服务器缓存")])]),e._v(" "),a("tr",[a("td",[e._v("private")]),e._v(" "),a("td",[e._v("表示响应只能被客户端缓存，默认值")])]),e._v(" "),a("tr",[a("td",[e._v("max-age=30")]),e._v(" "),a("td",[e._v("缓存 30s 后过期")])]),e._v(" "),a("tr",[a("td",[e._v("s-maxage")]),e._v(" "),a("td",[e._v("覆盖 max-age，作用一样，只在代理服务器中生效")])]),e._v(" "),a("tr",[a("td",[e._v("no-store")]),e._v(" "),a("td",[e._v("所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存")])]),e._v(" "),a("tr",[a("td",[e._v("no-cache")]),e._v(" "),a("td",[e._v("资源被缓存，但是不使用（强缓存失效），请求会验证资源是否过期")])]),e._v(" "),a("tr",[a("td",[e._v("max-stale=30")]),e._v(" "),a("td",[e._v("30s 内，即使缓存过期，也是用该缓存")])]),e._v(" "),a("tr",[a("td",[e._v("min-fresh=30")]),e._v(" "),a("td",[e._v("希望在 30s 内获取最新的响应")])])])]),e._v(" "),a("h3",{attrs:{id:"_3-3-expires-和-cache-control-两者对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-expires-和-cache-control-两者对比"}},[e._v("#")]),e._v(" 3.3 Expires 和 Cache-Control 两者对比")]),e._v(" "),a("ul",[a("li",[a("ol",[a("li",[e._v("Expires 是 http1.0 的产物，Cache-Control 是 http1.1 的产物，")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[e._v("两者同时存在的话，Cache-Control 优先级高于 Expires；在某些不支持 HTTP1.1 的环境下，Expires 就会发挥用处。所以 Expires 其实是过时的产物，现阶段它的存在只是一种兼容性的写法。")])])])]),e._v(" "),a("p",[e._v("强缓存判断是否缓存的依据来自于是否超出某个时间或者某个时间段，而不关心服务器端文件是否已经更新，这可能会导致加载文件不是服务器端最新的内容，那我们如何获知服务器端内容是否已经发生了更新呢？此时我们需要用到协商缓存策略。")]),e._v(" "),a("h2",{attrs:{id:"_4-协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-协商缓存"}},[e._v("#")]),e._v(" 4. 协商缓存")]),e._v(" "),a("p",[e._v("协商缓存就是强缓存失效时，浏览器请求会携带缓存标识到服务器，服务器根据该标识决定是否使用缓存，主要有两种情况：")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("协商缓存生效，返回 304 和 Not Modified")]),e._v(" "),a("li",[e._v("协商缓存失效，返回 200 和请求结果")])])]),e._v(" "),a("p",[e._v("协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。")]),e._v(" "),a("h3",{attrs:{id:"_4-1-last-modified-和-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-last-modified-和-if-modified-since"}},[e._v("#")]),e._v(" 4.1 Last-Modified 和 If-Modified-Since")]),e._v(" "),a("p",[e._v("浏览器在第一次访问资源时，服务器返回资源的同时，在 response header 中添加 Last-Modified 的 header，值是这个资源在服务器上的最后修改时间，浏览器接收后缓存文件和 header；")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("Last-Modified: Mon, 25 May 2020 08:51:24 GMT")])])]),e._v(" "),a("p",[e._v("浏览器下一次请求这个资源，浏览器检测到有 Last-Modified 这个 header，于是添加 If-Modified-Since 这个 header，值就是 Last-Modified 中的值；服务器再次收到这个资源请求，会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回 304 和空的响应体，直接从缓存读取，如果 If-Modified-Since 的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和 200")]),e._v(" "),a("p",[e._v("但是 Last-Modified 存在一些弊端：")]),e._v(" "),a("ul",[a("li",[e._v("如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源")]),e._v(" "),a("li",[e._v("因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源")])]),e._v(" "),a("p",[e._v("既然根据文件修改时间来决定是否缓存尚有不足，能否可以直接根据文件内容是否修改来决定缓存策略？所以在 HTTP / 1.1 出现了 "),a("code",[e._v("ETag")]),e._v(" 和"),a("code",[e._v("If-None-Match")])]),e._v(" "),a("h3",{attrs:{id:"_4-2-etag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-etag"}},[e._v("#")]),e._v(" 4.2 ETag")]),e._v(" "),a("p",[a("code",[e._v("ETag")]),e._v("是对资源的特殊标识")]),e._v(" "),a("p",[a("code",[e._v('Etag: W/"e563df87b65299122770e0a84ada084f"')])]),e._v(" "),a("p",[e._v("请求该资源成功之后，将返回的 ETag 存入"),a("code",[e._v("If-None-Match")]),e._v("字段中(浏览器自动记录了该字段信息)，同样在请求资源时传递给服务器，服务器查询该编码对应的资源有无更新，无更新返回 304 状态，更新返回 200 并重新请求。")]),e._v(" "),a("h3",{attrs:{id:"_4-3-etag-如何计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-etag-如何计算"}},[e._v("#")]),e._v(" 4.3 ETag 如何计算")]),e._v(" "),a("p",[e._v("ETag 是针对某个文件的特殊标识，服务器默认采用"),a("code",[e._v("SHA256")]),e._v("算法生成。也可以采用其他方式，保证编码的唯一性即可。")]),e._v(" "),a("h3",{attrs:{id:"_4-4-两者之间对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-两者之间对比"}},[e._v("#")]),e._v(" 4.4 两者之间对比")]),e._v(" "),a("ul",[a("li",[e._v("首先在精确度上，Etag 要优于 Last-Modified。\nLast-Modified 的时间单位是秒，如果某个文件在 1 秒内改变了多次，那么他们的 Last-Modified 其实并没有体现出来修改，但是 Etag 每次都会改变确保了精度；如果是负载均衡的服务器，各个服务器生成的 Last-Modified 也有可能不一致。")]),e._v(" "),a("li",[e._v("第二在性能上，Etag 要逊于 Last-Modified，毕竟 Last-Modified 只需要记录时间，而 Etag 需要服务器通过算法来计算出一个 hash 值。")]),e._v(" "),a("li",[e._v("第三在优先级上，服务器校验优先考虑 Etag")])]),e._v(" "),a("h2",{attrs:{id:"_5-缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-缓存位置"}},[e._v("#")]),e._v(" 5 缓存位置")]),e._v(" "),a("p",[e._v("前面我们已经提到，当强缓存命中或者协商缓存中服务器返回 304 的时候，我们直接从缓存中获取资源。那这些资源究竟缓存在什么位置呢？\n浏览器中的缓存位置一共有四种，按优先级从高到低排列分别是：")]),e._v(" "),a("ul",[a("li",[e._v("Service Worker")]),e._v(" "),a("li",[e._v("Memory Cache")]),e._v(" "),a("li",[e._v("Disk Cache")]),e._v(" "),a("li",[e._v("Push Cache")])]),e._v(" "),a("h3",{attrs:{id:"_5-1-service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-service-worker"}},[e._v("#")]),e._v(" 5.1 Service Worker")]),e._v(" "),a("p",[a("code",[e._v("Service Worker")]),e._v("借鉴了 Web Worker 的 思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问 DOM。虽然如此，但它仍然能帮助我们完成很多有用的功能，比如离线缓存、消息推送和网络代理等功能。其中的离线缓存就是 "),a("code",[e._v("Service Worker Cache")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("Service Worker")]),e._v(" 同时也是"),a("code",[e._v("PWA")]),e._v("的重要实现机制，关于它的细节和特性，我们将会在后面的 PWA 的分享中详细介绍。")]),e._v(" "),a("h3",{attrs:{id:"_5-2-memory-cache-和-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-memory-cache-和-disk-cache"}},[e._v("#")]),e._v(" 5.2 Memory Cache 和 Disk Cache")]),e._v(" "),a("p",[a("code",[e._v("Memory Cache")]),e._v("指的是内存缓存，从效率上讲它是最快的。但是从存活时间来讲又是最短的，当渲染进程(tab 页)结束后，内存缓存也就不存在了。")]),e._v(" "),a("p",[a("code",[e._v("Disk Cache")]),e._v("就是存储在磁盘中的缓存，从存取效率上讲是比内存缓存慢的，但是他的优势在于存储容量和存储时长。稍微有些计算机基础的应该很好理解，就不展开了。")]),e._v(" "),a("p",[e._v("好，现在问题来了，既然两者各有优劣，那浏览器如何决定将资源放进内存还是硬盘呢？主要策略如下：")]),e._v(" "),a("ul",[a("li",[e._v("比较大的 JS、CSS 文件会直接被丢进磁盘，反之丢进内存")]),e._v(" "),a("li",[e._v("内存使用率比较高的时候，文件优先进入磁盘")])]),e._v(" "),a("h3",{attrs:{id:"_5-3-push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-push-cache"}},[e._v("#")]),e._v(" 5.3 Push Cache")]),e._v(" "),a("p",[e._v("即推送缓存，这是浏览器缓存的最后一道防线。它是 HTTP/2 中的内容，虽然现在应用的并不广泛，但随着 HTTP/2 的推广，它的应用越来越广泛。")]),e._v(" "),a("h2",{attrs:{id:"_6-实际场景应用缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-实际场景应用缓存策略"}},[e._v("#")]),e._v(" 6 实际场景应用缓存策略")]),e._v(" "),a("h3",{attrs:{id:"_6-1-频繁变动的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-频繁变动的资源"}},[e._v("#")]),e._v(" 6.1 频繁变动的资源")]),e._v(" "),a("p",[e._v("可以使用"),a("code",[e._v("Cache-Control: no-cache")]),e._v("每次都向服务器发送请求并携带"),a("code",[e._v("Etag")]),e._v("或"),a("code",[e._v("Last-Modified")]),e._v("验证资源是否发生变化。")]),e._v(" "),a("h3",{attrs:{id:"_6-2-不经常变动的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-不经常变动的资源"}},[e._v("#")]),e._v(" 6.2 不经常变动的资源")]),e._v(" "),a("p",[e._v("可以设置"),a("code",[e._v("Cache-Control: max-age=2592000")]),e._v("（30 天或更长的时间间隔），这样浏览器之后请求相同的 URL 会命中强制缓存。为了避免文件更新不能及时更新的问题，可以在文件名中添加 hash、版本号等动态字符，从而改动资源的 URL，达到更改的文件能及时生效。")]),e._v(" "),a("h2",{attrs:{id:"_7-用户行为对浏览器缓存影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-用户行为对浏览器缓存影响"}},[e._v("#")]),e._v(" 7 用户行为对浏览器缓存影响")]),e._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[e._v("用户输入地址栏")]),e._v("，查找 disk cache 是否匹配, 不匹配发送请求。")]),e._v(" "),a("li",[a("code",[e._v("普通刷新")]),e._v("（Mac：command+R，windows：F5），优先使用 memory cache，其次使用 disk cache。")]),e._v(" "),a("li",[a("code",[e._v("强制刷新(Ctrl+F5)")]),e._v("（Mac：command+shift+R，windows：Ctrl+F5），不使用缓存。")])])]),e._v(" "),a("h2",{attrs:{id:"_8-参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-参考文章"}},[e._v("#")]),e._v(" 8 参考文章")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/54cc04190252",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解浏览器的缓存机制"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000017930248",target:"_blank",rel:"noopener noreferrer"}},[e._v("从前端角度理解缓存"),a("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=v.exports}}]);