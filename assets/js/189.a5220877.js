(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{576:function(t,e,r){"use strict";r.r(e);var v=r(6),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"iserver-软件如何升级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iserver-软件如何升级"}},[t._v("#")]),t._v(" iServer 软件如何升级?")]),t._v(" "),r("blockquote",[r("p",[t._v("作者：刘小标 时间：2020-10-10")])]),t._v(" "),r("h2",{attrs:{id:"需求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),r("p",[t._v("软件的升级是配套出现的，比如前端为了使用新版 SDK 中的某个新功能，而新功能的使用需要配套 iServer 的支持等类似的强制性升级需求。")]),t._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("p",[t._v("覆盖安装？如果当前的 iServer 中已发布了 N 多个服务，怎么办？手动重新发布一遍？\nNO，NO，NO...")]),t._v(" "),r("h2",{attrs:{id:"解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),r("p",[t._v("每个问题的背后，一定有解决问题的方法。没找到？那就，嗯，再找找~ ~ ~\n下面以 10i 升级到 10.1i 为例：")]),t._v(" "),r("h3",{attrs:{id:"_1、找到-iserver-10i-的安装目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、找到-iserver-10i-的安装目录"}},[t._v("#")]),t._v(" 1、找到 iServer 10i 的安装目录")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335/fellow-travellers/picgorepo/uploads/acdee19cffbb89066cb9fa57fce1734c/image-20201010150520625.png",alt:"image-20201010150520625"}})]),t._v(" "),r("p",[t._v("其中：")]),t._v(" "),r("ul",[r("li",[t._v("backup 文件夹：存放服务器配置信息的备份。")]),t._v(" "),r("li",[t._v("config 文件夹：配置文件，包括适用于 Bing Maps、天地图、云服务等的缓存方案。")]),t._v(" "),r("li",[t._v("lib 文件夹：存放 SuperMap iServer 运行时所依赖的 jar 文件。")]),t._v(" "),r("li",[t._v("worker-lib：存放启动多进程 Worker 节点时所需的 servlet-api.jar。")])]),t._v(" "),r("p",[t._v("其他"),r("strong",[t._v("配置文件")]),t._v("的主要内容如下表所示：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("span",{staticStyle:{display:"inline-block",width:"240px"}},[t._v("文件名")])]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-datacatalog.xml")])]),t._v(" "),r("td",[t._v("数据目录服务配置文件，包含数据目录服务中的数据存储的配置以及其他的一些配置信息。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-log4j.properties")])]),t._v(" "),r("td",[t._v("日志的配置文件。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-rest-appContext.xml")])]),t._v(" "),r("td",[t._v("REST 应用配置文件，其中定义了表述类型与 URI 后缀的映射关系。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-rest-resources.xml")])]),t._v(" "),r("td",[t._v("扩展资源的资源配置文件，用户可在其中指定扩展资源的名称、URI、类型、表述生成器名称、参数解析器名称等等。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-services.xml")])]),t._v(" "),r("td",[t._v("用户发布的服务的配置信息。此文件命名时只要以“iserver-services”开头，服务器即可识别为服务配置文件，且支持多个用户自定义服务配置文件，如 iserver-services-1.xml，iserver-services-2.xml。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-services-buildin.xml")])]),t._v(" "),r("td",[t._v("iServer 内置服务（如 Geometry 服务、map 服务）的配置信息。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-system.xml")])]),t._v(" "),r("td",[t._v("SuperMap iServer 系统级配置，包括元信息、集群、kml 样式配置等。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("web.xml")])]),t._v(" "),r("td",[t._v("SuperMap iServer 的初始化配置文件，定义了功能与类的映射关系。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-security.db")])]),t._v(" "),r("td",[t._v("用于存储用户、角色等信息的数据库。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("iserver-services.db")])]),t._v(" "),r("td",[t._v("用户存储服务授权信息的数据库。")])])])]),t._v(" "),r("h3",{attrs:{id:"_2、迁移-部分-服务配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、迁移-部分-服务配置文件"}},[t._v("#")]),t._v(" 2、迁移“部分”服务配置文件")]),t._v(" "),r("p",[t._v("上面讲了了那么多配置文件，到底迁移哪些配置文件哈？"),r("strong",[r("em",[t._v("一脸懵逼！！！")])])]),t._v(" "),r("p",[r("strong",[t._v("莫~慌！")]),t._v(" "),r("strong",[t._v("稳~住！")])]),t._v(" "),r("p",[t._v("其实不多，就这几个：")]),t._v(" "),r("ul",[r("li",[t._v("iserver-services.xml 存储发布过的服务")]),t._v(" "),r("li",[t._v("iserver-security.db 用于存储用户、角色等信息的数据库")]),t._v(" "),r("li",[t._v("iserver-services.db 用户存储服务授权信息的数据库。")])]),t._v(" "),r("p",[t._v("简单吧，嗯，恭喜升级成功，不成功就不用找我了~ ~闪 ~ ~")])])}),[],!1,null,null,null);e.default=s.exports}}]);