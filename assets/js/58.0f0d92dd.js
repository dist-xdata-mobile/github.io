(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{448:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),a("blockquote",[a("p",[t._v("作者: 谭辉")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("通过包管理器安装：")]),t._v(" "),a("p",[a("code",[t._v("npm install @dist/utils")]),t._v(" 或者 "),a("code",[t._v("yarn add @dist/utils")])]),t._v(" "),a("p",[t._v("使用: "),a("code",[t._v("import { xxx } from @dist/utils")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("支持 tree-shaking")])]),t._v(" "),a("li",[a("p",[t._v("支持按需引入")]),t._v(" "),a("p",[t._v("需要使用 babel 插件"),a("code",[t._v("babel-plugin-import")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        libraryName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@dist/utils'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        camel2DashComponentName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("customName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("@dist/utils/dist/es/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"api-使用文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-使用文档"}},[t._v("#")]),t._v(" Api 使用文档")]),t._v(" "),a("h3",{attrs:{id:"array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),a("h4",{attrs:{id:"deepfind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deepfind"}},[t._v("#")]),t._v(" deepFind")]),t._v(" "),a("p",[t._v("深度查找，用法如"),a("code",[t._v("Array.find")]),t._v("，支持嵌套数组的查找。采用深度优先遍历进行查找。")]),t._v(" "),a("p",[a("code",[t._v("deepFind(source: any[], predicate: (value, index, arr) => boolean)")])]),t._v(" "),a("p",[t._v("例："),a("code",[t._v("deepFind(['1',['2',['3_1']],'3_2','4'], (val) => val.startsWith('3'))")]),t._v(", 查找结果为: '3_1'")]),t._v(" "),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("h4",{attrs:{id:"traverse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#traverse"}},[t._v("#")]),t._v(" traverse")]),t._v(" "),a("p",[t._v("对象遍历，支持树状结构遍历, 采用深度遍历顺序。")]),t._v(" "),a("p",[a("code",[t._v("traverse(target: Object, childrenkey?='children', callback: (node, parentNode) => any)")])]),t._v(" "),a("ul",[a("li",[t._v("childrenKey：可选参数，表示元素后代属性，默认值为 children")]),t._v(" "),a("li",[t._v("callback: 必要参数，遍历每一个节点都会调用此回调函数，接收参数：node: 当前节点，parentNode: 父节点")])]),t._v(" "),a("p",[t._v("例：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parent, child")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),a("h4",{attrs:{id:"convertunit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convertunit"}},[t._v("#")]),t._v(" convertUnit")]),t._v(" "),a("p",[t._v("单位转换工具，目前支持长度单位（米、千米），面积单位（平方米、平方千米、公顷、亩、万亩），当输入的单位不支持，或者单位间无法互相转换，返回 null。")]),t._v(" "),a("p",[a("code",[t._v("covertUnit(input: number, from: string, to: string)")])]),t._v(" "),a("ul",[a("li",[t._v("input：原单位数字")]),t._v(" "),a("li",[t._v("from: 原来的单位")]),t._v(" "),a("li",[t._v("to: 目标单位")])]),t._v(" "),a("p",[t._v("例："),a("code",[t._v("convertUnit(1000, '米', '千米') === 1")])]),t._v(" "),a("h4",{attrs:{id:"fixnumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixnumber"}},[t._v("#")]),t._v(" fixNumber")]),t._v(" "),a("p",[t._v("保留目标位数的数字小数位 ，不进行四舍五入。")]),t._v(" "),a("p",[a("code",[t._v("fixNumber(num: number, precesion: number)")])]),t._v(" "),a("p",[t._v("例："),a("code",[t._v("fixNumber(3.14159, 4) === 3.1415")])]),t._v(" "),a("h4",{attrs:{id:"tothousands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tothousands"}},[t._v("#")]),t._v(" toThousands")]),t._v(" "),a("p",[t._v("将数字转换为千分位字符串表示。")]),t._v(" "),a("p",[a("code",[t._v("toThousands(num: number): string")])]),t._v(" "),a("p",[t._v("例：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toThousands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345678")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12,345,678")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" Url")]),t._v(" "),a("h4",{attrs:{id:"encodeurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encodeurl"}},[t._v("#")]),t._v(" encodeURL")]),t._v(" "),a("p",[t._v("对 URL 中的查询参数进行编码，如"),a("code",[t._v("www.baidu.com?q=工具&k=c#")]),t._v(" 编码为"),a("code",[t._v("www.baidu.com?q=%E5%B7%A5%E5%85%B7&k=c%23")])]),t._v(" "),a("p",[a("code",[t._v("encodeURL(url: string, appendParams?: {[p:string]: string|number})")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("appendParams: 可选，追加到 URL 中的查询参数")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// www.baidu.com?q=1&k=2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com?q=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h4",{attrs:{id:"getsearchparams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getsearchparams"}},[t._v("#")]),t._v(" getSearchParams")]),t._v(" "),a("p",[t._v("获取 URL 中的查询参数，返回值为包含查询参数的键值对的对象。")]),t._v(" "),a("p",[a("code",[t._v("getSearchParams(url: string)")])]),t._v(" "),a("p",[t._v("例：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSearchParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com?q=工具&k=c#'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{ q: '工具', k: 'c#' }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编码后的URL也可以解析")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSearchParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com?q=%E5%B7%A5%E5%85%B7&k=c%23'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{ q: '工具', k: 'c#' }")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[t._v("#")]),t._v(" browser")]),t._v(" "),a("h4",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" Storage")]),t._v(" "),a("p",[t._v("对"),a("code",[t._v("localStorage")]),t._v(" 和 "),a("code",[t._v("sessionStorage")]),t._v("的增强，其"),a("code",[t._v("setItem")]),t._v("和"),a("code",[t._v("getItem")]),t._v("方法将自动对值进行 JSON 序列化和反序列化。")]),t._v(" "),a("p",[a("code",[t._v("Storage.local")]),t._v(": 即"),a("code",[t._v("localStorage")]),t._v("，用法与原生一致")]),t._v(" "),a("p",[a("code",[t._v("Storage.session")]),t._v(": 即"),a("code",[t._v("sessionStorage")]),t._v("，用法与原生一致")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {name: 1, age: 2}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"文件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[t._v("#")]),t._v(" 文件下载")]),t._v(" "),a("h4",{attrs:{id:"blobtofile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blobtofile"}},[t._v("#")]),t._v(" blobToFile")]),t._v(" "),a("p",[t._v("将 blob 类型数据下载至本地。支持 IE 浏览器")]),t._v(" "),a("p",[a("code",[t._v("blobToFile(bolb: Blob, filename?:string)")])]),t._v(" "),a("h4",{attrs:{id:"downloadbyurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloadbyurl"}},[t._v("#")]),t._v(" downloadByURL")]),t._v(" "),a("p",[t._v("创建 a 标签对给出的 URL 进行资源下载。支持 IE 浏览器")]),t._v(" "),a("p",[a("code",[t._v("downloadByURL(url: string, filename: string)")])]),t._v(" "),a("h3",{attrs:{id:"数据判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据判断"}},[t._v("#")]),t._v(" 数据判断")]),t._v(" "),a("h4",{attrs:{id:"haschildren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haschildren"}},[t._v("#")]),t._v(" hasChildren")]),t._v(" "),a("p",[t._v("判断元素是否具有 children 属性。")]),t._v(" "),a("p",[a("code",[t._v("hasChildren(o: object, childrenKey?: string)")])]),t._v(" "),a("p",[a("code",[t._v("childrenKey")]),t._v("默认值为：children")]),t._v(" "),a("h4",{attrs:{id:"isdef"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isdef"}},[t._v("#")]),t._v(" isDef")]),t._v(" "),a("p",[t._v("判断值是否为"),a("code",[t._v("undefined")]),t._v("或"),a("code",[t._v("null")])]),t._v(" "),a("p",[a("code",[t._v("isDef(v: any)")])]),t._v(" "),a("h4",{attrs:{id:"isundef"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isundef"}},[t._v("#")]),t._v(" isUndef")]),t._v(" "),a("p",[t._v("判断值是否不为"),a("code",[t._v("undefined")]),t._v("或"),a("code",[t._v("null")])]),t._v(" "),a("p",[a("code",[t._v("isUndef(v: any)")])]),t._v(" "),a("h3",{attrs:{id:"环境判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境判断"}},[t._v("#")]),t._v(" 环境判断")]),t._v(" "),a("h4",{attrs:{id:"isdev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isdev"}},[t._v("#")]),t._v(" isDev")]),t._v(" "),a("p",[t._v("判断"),a("code",[t._v("process.env.NODE_ENV === 'developmen'")])]),t._v(" "),a("p",[a("code",[t._v("isDev(): boolean")])]),t._v(" "),a("h4",{attrs:{id:"isie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isie"}},[t._v("#")]),t._v(" isIE")]),t._v(" "),a("p",[t._v("判断是否是 IE 浏览器")]),t._v(" "),a("p",[a("code",[t._v("isIE(): boolean")])]),t._v(" "),a("h4",{attrs:{id:"ismicroapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ismicroapp"}},[t._v("#")]),t._v(" isMicroApp")]),t._v(" "),a("p",[t._v("判断是否是微前端环境（qiankun）")]),t._v(" "),a("p",[a("code",[t._v("isMicroApp(): boolean")])]),t._v(" "),a("h4",{attrs:{id:"ismobile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ismobile"}},[t._v("#")]),t._v(" isMobile")]),t._v(" "),a("p",[t._v("判断是否是移动端环境")]),t._v(" "),a("p",[a("code",[t._v("isMobile(): boolean")])]),t._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("h4",{attrs:{id:"loadscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loadscript"}},[t._v("#")]),t._v(" loadScript")]),t._v(" "),a("p",[t._v("用于加载在线 js 资源，通过 script 标签的方式加载。返回一个"),a("code",[t._v("Promise")])]),t._v(" "),a("p",[a("code",[t._v("loadScript(url: string, attributes?: object, onSuccess?: function, onError?: function): Promise")])]),t._v(" "),a("ul",[a("li",[t._v("url - 资源地址")]),t._v(" "),a("li",[t._v("attributes - 可选，需要设置在 script 标签上的一些特性")]),t._v(" "),a("li",[t._v("onSuccess - 可选，接收 event 对象，当资源加载成功后调用")]),t._v(" "),a("li",[t._v("onError - 可选，接收一个错误对象，当资源加载失败后调用")])]),t._v(" "),a("p",[t._v("可以通过回调的方式跟踪加载状态，也可以直接通过返回的 Promise 获取加载状态。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cdn.com/deliver.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可传递attributes给script标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cdn.com/deliver.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("autoLogin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用promise特性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cdn.com/deliver.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//todo }, (error) => {// todo })")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"polling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polling"}},[t._v("#")]),t._v(" Polling")]),t._v(" "),a("p",[t._v("轮询，"),a("code",[t._v("Polling")]),t._v("为 class 构造函数。")]),t._v(" "),a("p",[a("code",[t._v("new Polling(callback: function, time: number, immediate: boolean)")])]),t._v(" "),a("ul",[a("li",[t._v("callback - 轮询函数")]),t._v(" "),a("li",[t._v("time - 轮询间隔，默认为 1000ms")]),t._v(" "),a("li",[t._v("immediate - 是否立即执行轮询， 默认为 false。后续通过手动调用实例上的"),a("code",[t._v("start")]),t._v("方法开始轮询")])]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("polling")]),t._v("实例, 实例具有以下方法：")]),t._v(" "),a("ul",[a("li",[t._v("start - 开始轮询")]),t._v(" "),a("li",[t._v("cancel - 取消轮询")])]),t._v(" "),a("h4",{attrs:{id:"rawtypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rawtypeof"}},[t._v("#")]),t._v(" rawTypeof")]),t._v(" "),a("p",[t._v("判断数据类型。其内部使用"),a("code",[t._v("Object.prototype.toString")]),t._v("方法")]),t._v(" "),a("p",[a("code",[t._v("rawTypeof(v:any): string")])]),t._v(" "),a("p",[t._v("返回的类型值为全小写字符")]),t._v(" "),a("p",[t._v("例：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("rawTypeof([])")]),t._v(" - array")]),t._v(" "),a("li",[a("code",[t._v("rawTypeof(1)")]),t._v(" - object")]),t._v(" "),a("li",[a("code",[t._v("rawTypeof({})")]),t._v(" - object")]),t._v(" "),a("li",[a("code",[t._v("rawTypeof(/\\w/)")]),t._v(" - regexp")])]),t._v(" "),a("h2",{attrs:{id:"旧版-utils-迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版-utils-迁移"}},[t._v("#")]),t._v(" 旧版 Utils 迁移")]),t._v(" "),a("p",[t._v("注：为了从老版本平滑升级，以下标注删除线的函数仍然包含在新版 utils 中，但不推荐继续使用，后期也不再维护。")]),t._v(" "),a("h3",{attrs:{id:"cachedfn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cachedfn"}},[t._v("#")]),t._v(" "),a("del",[t._v("cachedFn")])]),t._v(" "),a("p",[t._v("旧版中"),a("code",[t._v("cachedFn")]),t._v("并未正确实现函数缓存功能，建议使用"),a("code",[t._v("lodash.memoize")]),t._v("代替")]),t._v(" "),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" "),a("del",[t._v("Http")])]),t._v(" "),a("p",[t._v("旧版中对"),a("code",[t._v("axios")]),t._v("的封装过于简单，且"),a("code",[t._v("axios")]),t._v("本身适用性非常高，无需一个统一的封装层，由使用者自行实现。新版不再维护，不推荐继续使用。")]),t._v(" "),a("p",[a("strong",[t._v("注：如需继续使用此导出，需要自行安装 axios，此版本中 axios 作为 peerDependencies 引入")])]),t._v(" "),a("h3",{attrs:{id:"isdev-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isdev-2"}},[t._v("#")]),t._v(" isDev")]),t._v(" "),a("p",[t._v("与新版使用完全一致")]),t._v(" "),a("h3",{attrs:{id:"isie-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isie-2"}},[t._v("#")]),t._v(" isIE")]),t._v(" "),a("p",[t._v("与新版使用完全一致")]),t._v(" "),a("h3",{attrs:{id:"ismicroapp-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ismicroapp-2"}},[t._v("#")]),t._v(" isMicroApp")]),t._v(" "),a("p",[t._v("与新版使用完全一致")]),t._v(" "),a("h3",{attrs:{id:"localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),a("p",[t._v("使用新版"),a("code",[t._v("Storage.local")])]),t._v(" "),a("h3",{attrs:{id:"sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),a("p",[t._v("使用新版"),a("code",[t._v("Storage.session")])]),t._v(" "),a("h3",{attrs:{id:"verifyauthority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifyauthority"}},[t._v("#")]),t._v(" "),a("del",[t._v("verifyAuthority")])]),t._v(" "),a("p",[t._v("针对项目具体接口数据的处理，目前主要在基础信息平台中使用，不建议继续使用")]),t._v(" "),a("h3",{attrs:{id:"formatdatebygreenwich"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatdatebygreenwich"}},[t._v("#")]),t._v(" "),a("del",[t._v("formatDateByGreenwich")])]),t._v(" "),a("p",[t._v("时间格式化。建议使用"),a("code",[t._v("dayjs")]),t._v("进行处理")]),t._v(" "),a("h3",{attrs:{id:"getpublicpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getpublicpath"}},[t._v("#")]),t._v(" getPublicPath")]),t._v(" "),a("p",[t._v("针对微前端体系中主应用与微应用获取"),a("code",[t._v("publicPath")]),t._v("的方法")])])}),[],!1,null,null,null);s.default=e.exports}}]);