(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{513:function(e,t,a){"use strict";a.r(t);var n=a(6),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[e._v("#")]),e._v(" 盒子模型")]),e._v(" "),a("blockquote",[a("p",[e._v("作者: 倪志航 时间: 2020-11-23")])]),e._v(" "),a("h2",{attrs:{id:"_1-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[e._v("#")]),e._v(" 1 概念")]),e._v(" "),a("p",[e._v("盒模型是 css 布局的基础，浏览器在渲染一个元素时会根据盒模型将元素表示为一个矩形盒子，而这个盒子由四部分组成，从内到外依次是：")]),e._v(" "),a("ul",[a("li",[e._v("内容区域【content】：可放置元素区域，如：文本、图像等")]),e._v(" "),a("li",[e._v("内边距【padding】：内容与边框之间的距离")]),e._v(" "),a("li",[e._v("边框【border】：就是模型边框")]),e._v(" "),a("li",[e._v("外边距距离【margin】：由外边边距限制，用空白的区域扩展边框区域，来分离元素")])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/ba2482b43d71e039b748c8800c642e00/boxmodel-_3_.png",alt:"CSS Box model"}})]),e._v(" "),a("h2",{attrs:{id:"_2-模型区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-模型区别"}},[e._v("#")]),e._v(" 2 模型区别")]),e._v(" "),a("p",[e._v("​ 盒子模型目前可分为两种，标准盒子模型（W3C 标准）和 IE 盒子模型（怪异模式）。")]),e._v(" "),a("p",[a("strong",[e._v("标准盒子模型（W3C 标准）：")])]),e._v(" "),a("p",[e._v("​ 图中可以很明显看出标准盒子模型的 width、height 只由 content 的大小，在宽高固定改变 padding、border 会影响盒子大小。")]),e._v(" "),a("p",[e._v("​ 盒总宽/高度 = width/height + padding + border + margin;")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/a5235b7b298855488b1dfa5274100840/16ac065d644dbac6",alt:"标准盒子模型"}})]),e._v(" "),a("p",[a("strong",[e._v("IE 盒子模型（怪异模式）：")])]),e._v(" "),a("p",[e._v("​ 图中可以很明显看出 IE 盒子模型的 width、height 是由 content+padding+border 共同决定，也就是宽高固定下，改变 padding、border 不会改变盒子大小。")]),e._v(" "),a("p",[e._v("​ 盒总宽/高度 = width/height + margin = 内容宽/高度 + padding + border + margin;")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/333fed21b8b8d1f8ca597c99e5026ab9/16ac065d64340216",alt:"ie盒子模型"}})]),e._v(" "),a("p",[a("strong",[e._v("自定义盒模型：")])]),e._v(" "),a("p",[e._v("​ 如果是定义了完整的 doctype 的标准文档类型，无论是哪种模型情况，最终都会触发"),a("strong",[e._v("标准模式")]),e._v("，否则 doctype 协议缺失，会由浏览器自己决定，在 IE 浏览器中 IE9 以下（IE6.IE7.IE8）的版本触发怪异模式，其他浏览器中会默认为 W3c 标准模式。")]),e._v(" "),a("p",[e._v("​ 通过"),a("code",[e._v("box-sizing")]),e._v(" 属性我们可以自定义盒子类型：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/** （W3C标准盒模型）**/\nbox-sizing: content-box;（默认值）\n\n/**（IE盒子模型——怪异盒模型）**/\nbox-sizing: border-box\n\n/** 规定应从父元素继承 box-sizing 属性的值。**/\nbox-sizing: inherit;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[a("strong",[e._v("两种盒模型的优缺点：")])]),e._v(" "),a("p",[e._v("​ 同时设置了两个子元素宽度都是父元素的 50%；当想在子元素内加 padding 或者 border 时，标准模型盒子的实际宽度就会超过 50%，导致换行。如果强行想让子元素在同一行内，就不能设置宽度为 50%，而应该通过计算 width:cacl(50% - 2 _ padding - 2 _ border)；")]),e._v(" "),a("p",[e._v("​ 而对于 IE 盒模型，内容的宽度会根据 padding 和 border 进行调整，元素的真实宽度始终是 50%，所以不会导致换行。但是这样的处理方式可能就会导致 content 区域内的元素布局发生改变。所以需要根据具体需求采用不同方式。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/9f9fa5568b3f8db942c574234e21a88a/0081Kckwgy1gk7ijbpd3pj31360iawff.jpg",alt:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gh6u2tr30oj31zm0u0k5m.jpg"}})]),e._v(" "),a("h2",{attrs:{id:"_3-视觉格式化模型-visual-formatting-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-视觉格式化模型-visual-formatting-model"}},[e._v("#")]),e._v(" 3 视觉格式化模型(visual formatting model)")]),e._v(" "),a("p",[e._v("​ 视觉格式化模型是用来处理和在视觉媒体上显示文档时使用的计算规则.")]),e._v(" "),a("p",[e._v("​ 视觉格式化模型会根据 CSS 盒子模型将文档中的元素转换为一个个盒子,每个盒子的布局由以下因素决定:")]),e._v(" "),a("ul",[a("li",[e._v("盒子的尺寸和类型")]),e._v(" "),a("li",[e._v("定位方案（positioning scheme）：普通流定位、浮动定位或绝对定位")]),e._v(" "),a("li",[e._v("文档树中的其它元素：即当前盒子的子元素或兄弟元素")]),e._v(" "),a("li",[e._v("外部信息:如视口尺寸与位置,图片大小等")])]),e._v(" "),a("p",[e._v("​ 视觉格式化模型会根据盒子的包含块的边界来渲染盒子.盒子会创建一个包含其后代元素的包含块,但盒子并不由包含块所限制,当盒子的布局跑到包含块外面时称为溢出.")]),e._v(" "),a("blockquote",[a("p",[e._v("​ 常见名词定义:\n​ 块: block，一个抽象的概念，一个块在文档流上占据一个独立的区域，块与块之间在垂直方向上按照顺序依次堆叠.\n​ 包含块：containing block，包含其他盒子的块称为包含块,一般来说盒子生成的块就是盒子子元素的包含块.\n​ 块级元素: Block-level elements,元素的 display 为 block、list-item、table 时，该元素将成为块级元素.视觉上呈现为块,竖直排列.每个块级元素生成一个主要的块级盒来包含后代盒和生成的内容,并参与定位.\n​ 块级盒: Block-level box, 由块级元素生成,参数块级格式化上下文(BFC).描述元素和它的父元素与兄弟元素之间的表现.\n​ 块容器盒: Block container box, 只包含其他块级盒,或生成一个行内格式化上下文(IFC),只包含行内盒.描述元素和它后代之间的关系.\n​ 块盒: Block boxes, 同时是块容器盒的块级盒.\n​ 匿名块盒: Anonymous block boxes, 没有名字,不能被 css 选择符选中.块容器盒只包含块级盒或者行内盒,当两者都存在时,将会创建匿名块盒来包含相邻的行内盒.\n​ 行内级元素：inline-level element，display 为 inline、inline-block、inline-table 的元素称为行内级元素。\n​ 行内级盒: inline-level boxes, 由行内级元素生成,参与行内格式化上下文的创建.\n​ 行内盒:inline box, 一个其内容会参与创建其容器的行内格式化上下文的行内级盒子.\n​ 原子行内级盒子:atomic inline-level box, 内容不参与行内格式化上下文创建的行内级盒子,在同一个 IFC 中,原子行内级盒子不能被拆分成多行\n​ 匿名行内盒:类似于块盒子，CSS 引擎有时候也会自动创建一些行内盒子。这些行内盒子无法被选择符选中，因此是匿名的，它们从父元素那里继承那些可继承的属性，其他属性保持默认值 initial.")])]),e._v(" "),a("h3",{attrs:{id:"_2-1-块级盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-块级盒子模型"}},[e._v("#")]),e._v(" 2.1 块级盒子模型")]),e._v(" "),a("p",[e._v("​ 块级元素有着盒子模型的结构，而且独占一行")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/678e5df3cdbe2d1a6aeb18cb7ae3f620/4.50e41b1e.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"_2-2-行内级盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-行内级盒子模型"}},[e._v("#")]),e._v(" 2.2 行内级盒子模型")]),e._v(" "),a("p",[e._v("​ 不独占一行，所占空间由元素内容（字体大小，图像尺寸）决定，不能设置宽高，对齐")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/9421ca4709fcd935019aacc4bedbdc91/5.e5c151fc.png",alt:"img"}})]),e._v(" "),a("p",[e._v("​ 所有内联元素的样式表现都与行内框盒子模型有关。所以这个概念是非常重要的。")]),e._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("这是一段文字，这里有个"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("em"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" 标签。"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("​ 如上面一段普普通通的代码，却包含了"),a("strong",[e._v("4")]),e._v("种盒子")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("“内容区域”（content area），是一种围绕文字看不见的盒子,可理解为选中文字蓝色背景区域，如图“内容区域”的大小与 font-size 大小、font-family 相关； "),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d1ba6ec20f70496af716d5f79d32747b/20190724224655374406.png",alt:"image-20201120010214921"}})])]),e._v(" "),a("li",[a("p",[e._v("“内联盒子”（inline-boxes），“内联盒子”不会让内容成块显示，而是排成一行。如果文字外部含 inline 水平的标签（如 span，a，em 等），则属于“内联盒子”，如下图 em 框处。如果是光秃秃的文字，则属于“匿名内联盒子”，如下图框处；"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/6feb3b5055d54f1f188526f87c014338/image-20201120010148331.png",alt:"image-20201120010148331"}})])]),e._v(" "),a("li",[a("p",[e._v("“行框盒子”（line boxes），每一行就是一个“行框盒子”，每个“行框盒子”又是由一个一个“内联盒子”组成，“行框盒子”如下图红框处；"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/f6f5a03857fbf85417470af462bc6486/image-20201120010214921.png",alt:"image-20201120010214921"}})])]),e._v(" "),a("li",[a("p",[e._v("标签所在的“包含盒子”（containing box），如下图红框处。此盒子由一行一行的“行框盒子”组成"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/e8bc35b6b24fe96044b13824427ca0ef/image-20201120010337316.png",alt:"image-20201120010337316"}})])])]),e._v(" "),a("h2",{attrs:{id:"_4-元素视口位置获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-元素视口位置获取"}},[e._v("#")]),e._v(" 4 元素视口位置获取")]),e._v(" "),a("h3",{attrs:{id:"_4-1-获取元素视口大小位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-获取元素视口大小位置"}},[e._v("#")]),e._v(" 4.1 获取元素视口大小位置")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Element.clientWidth")])])]),e._v(" "),a("p",[e._v("​ 内联元素以及没有 CSS 样式的元素的 "),a("code",[e._v("clientWidth")]),e._v(" 属性值为 0。"),a("code",[e._v("Element.clientWidth")]),e._v(" 属性表示元素的内部宽度，以像素计。该属性包括内边距 padding，但不包括边框 border、外边距 margin 和垂直滚动条（如果有的话）。"),a("code",[e._v("clientWidth")]),e._v(" 是只读的。")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Element.clientHeight")])])]),e._v(" "),a("p",[e._v("​ 内联布局盒子或者没有 CSS 样式的元素属性值为 0，否则，"),a("code",[e._v("Element.clientHeight")]),e._v(" 属性表示元素的内部高度，以像素计。该属性包含内边距，但不包括水平滚动条、边框和外边距。"),a("code",[e._v("clientHeight")]),e._v(" 是只读的。")]),e._v(" "),a("p",[e._v("可以通过 CSS "),a("code",[e._v("height")]),e._v(" + CSS "),a("code",[e._v("padding")]),e._v(" - 水平滚动条高度 (如果存在)来计算")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Element.clientTop")])])]),e._v(" "),a("p",[e._v("一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距。"),a("code",[e._v("clientTop")]),e._v(" 是只读的。")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Element.clientLeft")])])]),e._v(" "),a("p",[e._v("​ 一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。"),a("code",[e._v("clientLeft")]),e._v(" 不包括左外边距和左内边距。"),a("code",[e._v("clientLeft")]),e._v(" 是只读的。")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Element.getBoundingClientRect()")])]),e._v(" 方法返回元素的大小及其相对于视口的位置，返回 DOMRect 对象。")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Element.getClientRects()")])]),e._v(" 方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合，返回 DOMRectList 为 DOMRect 对象的数组。")]),e._v(" "),a("p",[e._v("如果是标准盒子模型，元素的尺寸等于"),a("code",[e._v("width/height")]),e._v(" + "),a("code",[e._v("padding")]),e._v(" + "),a("code",[e._v("border-width")]),e._v("的总和。如果"),a("code",[e._v("box-sizing: border-box")]),e._v("，元素的的尺寸等于 "),a("code",[e._v("width/height")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("返回结果DOMRect属性值为：\n    bottom: 距离窗口底部距离\n    height: 当前元素高度\n    left: 距离窗口左侧距离\n    right: 距离窗口右侧距离\n    top: 距离窗口底部距离\n    width: 当前元素宽度\n    x: 原点的x坐标\n    y: 原点的y坐标\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h3",{attrs:{id:"_4-2-获取元素样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-获取元素样式"}},[e._v("#")]),e._v(" 4.2 获取元素样式")]),e._v(" "),a("p",[a("code",[e._v("Window.getComputedStyle()")]),e._v("方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值。 私有的 CSS 属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 进行样式的获取\nlet style = window.getComputedStyle(element, [pseudoElt]);\n// 获取样式相对位置左偏移\nconst left = style.left;\n// 获取样式相对位置上偏移\nconst top = style.top;\n// 获取样式宽度\nconst width = style.width;\n// 获取到样式高度\nconst height = style.height;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[a("strong",[e._v("element")])]),e._v(" "),a("p",[e._v("用于获取计算样式的"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Element")]),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("pseudoElt 可选")])]),e._v(" "),a("p",[e._v("指定一个要匹配的伪元素的字符串。必须对普通元素省略（或"),a("code",[e._v("null")]),e._v("）。")]),e._v(" "),a("p",[a("strong",[e._v("描述")])]),e._v(" "),a("p",[e._v("返回的对象与从元素的 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/style",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("style")]),a("OutboundLink")],1),e._v(" 属性返回的对象具有相同的类型；然而，两个对象具有不同的目的。从"),a("code",[e._v("getComputedStyle")]),e._v("返回的对象是只读的，可以用于检查元素的样式（包括由一个"),a("code",[e._v("<style>")]),e._v("元素或一个外部样式表设置的那些样式）。"),a("code",[e._v("elt.style")]),e._v("对象应用于在特定元素上设置样式。")])])}),[],!1,null,null,null);t.default=s.exports}}]);