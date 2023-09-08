(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{526:function(e,t,a){"use strict";a.r(t);var l=a(6),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"图片加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片加载"}},[e._v("#")]),e._v(" 图片加载")]),e._v(" "),a("blockquote",[a("p",[e._v("作者: 魏聪 时间: 2021-01-13")])]),e._v(" "),a("h2",{attrs:{id:"_1-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-应用场景"}},[e._v("#")]),e._v(" 1. 应用场景")]),e._v(" "),a("p",[e._v("  图片加载的需求是这样的：本地加载一张图片，图片叠加到地图，调整图片大小和透明度，使图片内容和地图相关内容贴合，并且在地图缩放图片和地图始终贴合，这样用户可以直观看到图片内容和地图实际的对比情况。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/f738f245aeed40848b8bcbb0741734ce/20210114134957.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_2-功能关键点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能关键点"}},[e._v("#")]),e._v(" 2. 功能关键点")]),e._v(" "),a("ul",[a("li",[e._v("图片本地加载")]),e._v(" "),a("li",[e._v("图片调整")]),e._v(" "),a("li",[e._v("图片始终贴合地图")])]),e._v(" "),a("h2",{attrs:{id:"_3-实现流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现流程"}},[e._v("#")]),e._v(" 3. 实现流程")]),e._v(" "),a("h3",{attrs:{id:"_3-1-图片本地加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-图片本地加载"}},[e._v("#")]),e._v(" 3.1 图片本地加载")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("提到文件本地加载，我们马上就想到了"),a("code",[e._v("<input type=”file”>")]),e._v("或者拖拽上传方式，显然这次我们使用"),a("code",[e._v("<input type=”file”>")]),e._v("就好了，通过文件接口我们就可以获取图片文件 File 对象了，它是继承至 Blob 对象的，我们以前获取到 File 对象或者 FileList 都是直接上传到后台的，后台在返回给我们结果，那么我们怎么在本地把 File 对象里面数据直接加载到 DOM 中呢？JS 中提供了一个操作 File 和 Blob 对象的 FileReader 类，我们可以使用这个类来异步读取文件，它有四个实用方法：\n"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/5c69071f1e6810d0beb87b1fa45dc570/20210114135302.png",alt:""}}),e._v("\n我们可以调用不同函数，从而将 Blob 类型数据或者 File 类型数据转为我们所需类型。我们这次直接转为 Base64 就好了，这样我们就获取到了图片数据。")])]),e._v(" "),a("li",[a("p",[e._v("获取图片数据之后，我们需要将图片数据加载到网页中，但是图片现在没有一个确定的宽高和坐标，所以我们需要创建一个 Image 对象，它将图片数据转为一个图片对象，通过 Image. naturalWidth 和 Image. naturalHeight 拿到图片的原始大小（图片原始大小可能过大，我在配置文件里面设置一个图片初始缩放比例，同时配置了一个初始图片经纬度坐标），通过 mapView.toScreen 就可以拿到图片的屏幕坐标了。这样可以确定图片在页面上的位置和大小了。")]),e._v(" "),a("blockquote",[a("p",[e._v("注意：通过 toScreen 拿到的不是真的意义上的屏幕点，它的屏幕坐标是相对地图容器的左上角。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d891f29c4b1d0c83940607e80a29dece/20210114135420.png",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("确定图片位置信息之后，我们就可以构建 DOM 结构：外层绝对定位覆盖整个地图，为了不影响地图操作，暂时去除了它的所有事件操作（pointEvents:none）,图片外面又包裹了一个容器，它的宽高靠图片进行撑开，它主要作用是容纳几个图片拖拽柄(绝对定位进行定位)，另外 display 设置为 inline-block，防止宽度溢出，并且添加事件操作（pointEvents:all）。最后创建一个 img 节点，将图片对象的数据赋予它就好了。这样图片的本地加载就完成了。\n"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/b23a99a5f4585fbda52bccde9e102f6e/20210114135525.png",alt:""}})])])]),e._v(" "),a("h3",{attrs:{id:"_3-2-图片调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-图片调整"}},[e._v("#")]),e._v(" 3.2 图片调整")]),e._v(" "),a("p",[e._v("   上面我们将 DOM 结构构建好了，现在就是添加事件了，图片调整主要是图片大小调整和位置调整。")]),e._v(" "),a("ul",[a("li",[a("ol",[a("li",[e._v("位置调整 位置调整的思路主要是这样的：")])]),e._v(" "),a("ul",[a("li",[e._v("图片绑定 mousedown 事件")]),e._v(" "),a("li",[a("ul",[a("li",[e._v("在 mousedown 事件回调中给最外围容器绑定 mousemove 和 mouseup 事件，此时并保存鼠标的位置信息。")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("在 mousemove 事件计算鼠标偏移量，重设设置图片容器的 top 和 left 值。")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("在 mouseup 事件中移除 mousemove 事件和 mouseup 事件")])])]),e._v(" "),a("li",[e._v("鼠标偏移公式：")]),e._v(" "),a("li",[a("ul",[a("li",[e._v('top: y - this.$subInfo.mousey + this.$subInfo.top + "px"')])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v('left: x - this.$subInfo.mousex + this.$subInfo.left + "px"')])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("鼠标偏移量+原来 top，left 值，原本想直接 e.movementX 和 e.movementY，但是发现非常卡，暂时没有找到原因，可能触发频率太快，每次 e.movementX 和 e.movementY 增值都很小。")])])])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[e._v("大小调整\n大小调整的思路主要是这样的：")])]),e._v(" "),a("ul",[a("li",[a("ul",[a("li",[e._v("每个拖拽柄绑定 mousedown 事件，每个拖拽柄通过不同类来标识自己。")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("在 mousedown 事件回调中，添加最外部容器事件操作（pointEvent:all），并为它绑定 mousemove 和 mouseup 事件，此时保存图片容器的属性信息和此时的拖拽柄节点。")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("在 mousemove 事件中，根据类判断拖拽柄，然后计算鼠标偏移信息，重新计算拖拽柄位置，重设图片容器的 top 和 left 值，并且计算出此时的图片的 width 和 height，重新生成图片。"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/a7a6101e1f2545af159324699f966049/20210114135859.png",alt:""}})])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("在 mouseup 事件中，移除 mousemove 事件和 mouseup 事件，并移除最外部容器的所有事件响应（pointEvents:none）")])])]),e._v(" "),a("li",[e._v("位置计算公式(左上角拖拽柄)："),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7a21b8476633d2568fd9452a5a68cf22/20210114135955.png",alt:""}}),e._v(" "),a("blockquote",[a("p",[e._v("注意：此时鼠标位置 clientX 和 clientY 需要减去地图容器的相对页面的偏移值。"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/36a1b652a97fe8e11c7bc1250e543e44/20210114140059.png",alt:""}}),e._v("大框减小框就是此时图片 width 和 height，鼠标当前位置就是 top 和 left:"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/6fff07395aa12b822394ae87f7b52f79/20210114140140.png",alt:""}})])])])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[e._v("边界控制\n我看了下，感觉没有做边界的必要，所以这一步省略。主要在 mousemove 事件中控制一下鼠标范围就好了。")])])])]),e._v(" "),a("h3",{attrs:{id:"_3-3-图片始终贴合地图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-图片始终贴合地图"}},[e._v("#")]),e._v(" 3.3 图片始终贴合地图")]),e._v(" "),a("p",[e._v("   图片需要始终贴合地图的话，我们首先想到需要给图片添加一个坐标系，那么怎么添加坐标系呢，那就属于图片配准的事了，这个就需要计算来进行了。")]),e._v(" "),a("ul",[a("li",[e._v("1、大致思路\n前端通过上传图片信息到计算，计算通过图片配准来给图片添加坐标系，放置图片到工作空间目录下，前端构建一个动态服务，并且添加一个动态服务子图层来请求工作空间下的有坐标系图片，然后添加动态服务到地图中。")]),e._v(" "),a("li",[e._v("2、前期准备\n一个空的动态服务，创建一个工作空间，并且工作空间绑定一个路径（生成图片将放置在这个路径下面），然后将工作空间和动态服务进行绑定。"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/e7ca93fb99e62710ca10e22985d14429/20210114140411.png",alt:""}})]),e._v(" "),a("li",[e._v("3、前端逻辑\n获取调整好的图片四个角坐标，转成经纬度，将其和图片文件一并通过接口传给计算："),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/876d2edaa2ce3ca52f0a591c758ba53e/20210114140450.png",alt:""}}),e._v("接口响应成功后，计算返回工作空间下图片文件的名称，之后前端进行动态服务的创建，并为动态服务添加一个子图层，类型是 data-layer，这里有两种类型的子图层：map-layer 和 data-layer，类型是 map-layer 的允许你使用新的 renderers, definition expressions, opacity, scale visibility 来覆盖原来动态服务中的子图层样式，类型是 data-layer 的允许你创建一个子图层，但是图层数据可以来自注册的工作空间。它提供一个 dataSource 配置，提供了不同类型的数据源类型：\nTableDataSource、QueryTableDataSource、RasterDataSource、JoinTableDataSource，\n有表类型的，像 geodatabase，有栅格类型的，像各种格式图片。\n我们只需要提供工作空间 ID 和对应表名和栅格文件名，就可以给子图层注册服务端数据了。"),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/2c9db27d54ded1a13ca8b79af61b826f/20210114140522.png",alt:""}}),e._v("每次缩放时，会请求一张新的图片，这样我们就将服务端的有坐标信息的栅格图片数据加载到地图了。")]),e._v(" "),a("li",[e._v("4、计算逻辑\n计算先进行绑定之前建立的栅格工作空间，等待前端上传图片和图片信息之后，获取参数计算获取图片左上角，右下角两个点坐标，图片高度，宽度等参数，并且根据参数 width 和 height 调整图片大小，并转换成 PNG 格式（前端可能上传 JPG 或者 PNG 格式的图片，但是最终生成的需要是 PNG 格式，因为 JPG 是不支持透明的，所以需要对 JPG 格式的图片进行格式转换），然后根据图片的左上角，右下角两个坐标，利用 AE 接口对栅格图片进行地理配准，经过地理配准之后，图片就带有了坐标信息，在我们请求图片的时候，就可以加载到对应坐标系的坐标位置上了，最后计算返回工作空间绑定目录下的图片名称给前端，至此计算完成响应。")])])])}),[],!1,null,null,null);t.default=o.exports}}]);