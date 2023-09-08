(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{543:function(t,a,_){"use strict";_.r(a);var v=_(6),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"css-中的层叠顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css-中的层叠顺序"}},[t._v("#")]),t._v(" CSS 中的层叠顺序")]),t._v(" "),_("blockquote",[_("p",[t._v("作者：魏聪 时间：2020-01-13")])]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("CSS 中元素是有层叠顺序的，一般情况下，我们不需要区分元素的层叠顺序，当元素发生冲突的时候，比如元素之间有交集，那就需要区分谁显示上面，谁显示在下方了。那么在 CSS 世界中，元素的层叠顺序是怎样的呢？这里我们需要了解这两个概念：层叠上下文和层叠顺序。")]),t._v(" "),_("h2",{attrs:{id:"_1、层叠上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、层叠上下文"}},[t._v("#")]),t._v(" 1、层叠上下文")]),t._v(" "),_("p",[t._v("层叠上下文(stacking context)，在 HTML 中其实是一个三维的概念，如果元素含有层叠上下文，我们可以理解这个元素具有特殊性，在显示上高人一等。它跟 BFC 其实是类似的，只不过它和普通元素放在一起表现的是在显示上优先显示。")]),t._v(" "),_("h2",{attrs:{id:"_2、层叠水平"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、层叠水平"}},[t._v("#")]),t._v(" 2、层叠水平")]),t._v(" "),_("p",[t._v("层叠水平(stacking level)，它决定了"),_("strong",[t._v("同一个层叠上下文")]),t._v("中元素在 Z 轴上的显示顺序，同一个层叠上下中也需要进行排序的，并且所有元素都有层叠水平，包括层叠上下文元素，需要注意的是："),_("strong",[t._v("对于普通元素的层叠水平，只有在当前层叠上下文元素才有意义")]),t._v("。这是因为普通元素的层叠水平由层叠上下文决定，所以在不同层叠上下文的普通元素先比较的是层叠上下文的层叠水平，同一层叠上下文的普通元素，此时比较的是普通元素的层叠水平。")]),t._v(" "),_("h2",{attrs:{id:"_3、层叠顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、层叠顺序"}},[t._v("#")]),t._v(" 3、层叠顺序")]),t._v(" "),_("p",[t._v("层叠顺序(stacking order)，它表示元素发生层叠的时候，垂直显示的规则。它跟层叠上下文和层叠水平不同，层叠上下文和层叠水平是概念，但它是一个规则。它的层叠顺序规则如图：\n"),_("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/58899e796d51a9ffac74abbf2ea4d324/1610327368327-04ada912-45a0-4a2b-8e59-bc66cf88c33a.png",alt:""}})]),t._v(" "),_("p",[t._v("此外还有两个层叠准则：")]),t._v(" "),_("ul",[_("li",[t._v("谁大谁上\n当具有明显的层叠水平标识的时候，比如 z-index，同处于一个层叠上下文领域，层叠水平大的优先显示")]),t._v(" "),_("li",[t._v("后来居上\n当元素层叠水平一致，层叠顺序相同时，DOM 流后面会优先显示")])]),t._v(" "),_("h2",{attrs:{id:"_4、层叠上下文的特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、层叠上下文的特性"}},[t._v("#")]),t._v(" 4、层叠上下文的特性")]),t._v(" "),_("ul",[_("li",[t._v("层叠上下文的层叠水平要比普通元素高")]),t._v(" "),_("li",[t._v("层叠上下文可以阻断元素的混合模式")]),t._v(" "),_("li",[t._v("层叠上下文可以嵌套，内部层叠上下文以及其子元素均受制于外部层叠上下文")]),t._v(" "),_("li",[t._v("每个层叠上下文和兄弟元素独立，当进行层叠变化和渲染时，只需要考虑子元素")]),t._v(" "),_("li",[t._v("每个层叠上下文自成体系，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中")])]),t._v(" "),_("h2",{attrs:{id:"_5、创建层叠上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、创建层叠上下文"}},[t._v("#")]),t._v(" 5、创建层叠上下文")]),t._v(" "),_("ul",[_("li",[t._v("页面根元素本身是一个层叠上下文元素")]),t._v(" "),_("li",[t._v("带有 z-index 不为默认值 auto 的定位元素")]),t._v(" "),_("li",[t._v("z-index 不为默认值 auto 的 flex 项(父元素 flex | inline-flex)")])]),t._v(" "),_("p",[t._v("需要两个条件：父级元素需要是 flex 元素；子元素的 z-index 不是 auto，那么子元素是层叠上下文元素")]),t._v(" "),_("ul",[_("li",[t._v("元素的 opacity 不为 1")]),t._v(" "),_("li",[t._v("元素的 transform 值不是 none")]),t._v(" "),_("li",[t._v("元素的 mix-blend-mode 值不是 normal")]),t._v(" "),_("li",[t._v("元素的 filter 值不是 none")]),t._v(" "),_("li",[t._v("元素的 isolation 值是 isolate")]),t._v(" "),_("li",[t._v("will-change 指定的属性值为上面任意一个")]),t._v(" "),_("li",[t._v("元素的-webkit-overflow-scrolling 为 touch")])]),t._v(" "),_("h2",{attrs:{id:"_6、层叠上下文和层叠顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、层叠上下文和层叠顺序"}},[t._v("#")]),t._v(" 6、层叠上下文和层叠顺序")]),t._v(" "),_("ul",[_("li",[t._v("1、如果层叠上下文元素不依赖 z-index 值，那么它的层叠顺序 z-index:auto 可以看作 z-index:0 级别")]),t._v(" "),_("li",[t._v("2、如果层叠上下文元素依赖 z-index 数值，那么它的层叠顺序由 z-index 数值决定")])])])}),[],!1,null,null,null);a.default=e.exports}}]);