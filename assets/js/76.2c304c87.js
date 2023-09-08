(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{471:function(r,e,s){"use strict";s.r(e);var t=s(6),a=Object(t.a)({},(function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h1",{attrs:{id:"soe-开发及常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soe-开发及常见问题"}},[r._v("#")]),r._v(" "),s("strong",[s("em",[r._v("SOE 开发及常见问题")])])]),r._v(" "),s("blockquote",[s("p",[r._v("作者:陶小明 时间： 2020-10-16")])]),r._v(" "),s("h1",{attrs:{id:"soe-开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soe-开发"}},[r._v("#")]),r._v(" SOE 开发")]),r._v(" "),s("h2",{attrs:{id:"_1、基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本流程"}},[r._v("#")]),r._v(" 1、基本流程")]),r._v(" "),s("p",[r._v("1.安装 ArcObjects SDK——在你开发 SOEs 之前，你需要安装 ArcObjects SDK for .Net Framework。你也需要安装 Microsoft Visual Studio。")]),r._v(" "),s("p",[r._v("2.编码——在 Visual Studio 中使用 SOE 模板创建一个项目。这个模板确保你的 SOE 实现了必需的接口以便 REST 或 SOAP 服务调用。")]),r._v(" "),s("p",[r._v("3.创建你的项目并将其打包成一个.soe 文件——从 ArcGIS for Server 10.1 开始，SOEs 可以被封装到一个.soe 文件中。当你在 Visual Studio 中编译项目的时候，这个文件就已经创建了。")]),r._v(" "),s("p",[r._v("4.部署 SOE——在你使用 SOE 之前，你需要将它部署到 ArcGIS for Server 上，你可以在 ArcGIS Server Manager 中通过浏览你的.soe 文件来实现。")]),r._v(" "),s("p",[r._v("5.在服务中启用 SOE——当你创建或者编辑一个服务的时候，你可以启用 SOE。当这个服务重启的时候，SOE 就可以使用了。如果这个 SOE 暴露了属性，Manager 中的属性页允许你设置这些值。（作为一个 SOE 开发者，你应该扩展这个属性页，并且/或者重写一个属性页以便在 ArcGIS for Desktop 的服务编辑对话框中使用）")]),r._v(" "),s("p",[r._v("6.在客户端程序中使用已经启用 SOE 的服务——因为 SOE 仅仅是一个需要 HTTP 请求的 Web 服务，因此许多客户端的类型都可以调用它。如果是 REST SOEs，包括了 ArcGIS 网页和移动应用程序 APIs。如果是 SOAP SOEs，包括了能够任何发起 SOAP Web 服务的客户端。客户端代码必须为 SOE 设置参数，确保 Web 服务能够被调用并且返回处理结果。")]),r._v(" "),s("h2",{attrs:{id:"生成-soe-问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-soe-问题"}},[r._v("#")]),r._v(" 生成 soe 问题")]),r._v(" "),s("p",[r._v("1.修改*prj 文件，查看 C:\\Program Files (x86)\\MSBuild\\ESRI 里面")]),r._v(" "),s("p",[r._v('打开*prj，将 Project="$(MSBuildExtensionsPath)\\ESRI\\ESRI.ArcGIS.AddIns.Server.targets" Condition="Exists(\'$(MSBuildExtensionsPath)\\ESRI\\ESRI.ArcGIS.AddIns.Server.targets\')"修改为 Project="$(MSBuildExtensionsPath)\\ESRI\\ESRI.ArcGIS.AddIns.Server.**11.**targets" Condition="Exists(\'$(MSBuildExtensionsPath)\\ESRI\\ESRI.ArcGIS.AddIns.Server.**11.**targets\')"')]),r._v(" "),s("p",[r._v("2.编译器换一个低版本的。")]),r._v(" "),s("h2",{attrs:{id:"部署问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署问题"}},[r._v("#")]),r._v(" 部署问题")]),r._v(" "),s("p",[r._v("1.添加.soe 文件出现乱码，换成 IE 浏览器")]),r._v(" "),s("p",[r._v("2.添加报错，查看是否生成的 soe 的 Arcengine 版本与部署的 arcserver 版本不一致。")]),r._v(" "),s("p",[r._v("3.编译生成.soe 文件开发环境的.NET FrameWork 版本高于 ArcGIS Server 服务器上的.NET FrameWork 的版本，也会报错。")])])}),[],!1,null,null,null);e.default=a.exports}}]);