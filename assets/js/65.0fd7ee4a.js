(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{545:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"windows-版-mongo-启动安全认证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-版-mongo-启动安全认证"}},[s._v("#")]),s._v(" windows 版 mongo 启动安全认证")]),s._v(" "),n("p",[s._v("测试版本：3.4.7 ，4.0.6")]),s._v(" "),n("h2",{attrs:{id:"测试是否启动安全认证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试是否启动安全认证"}},[s._v("#")]),s._v(" 测试是否启动安全认证")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("打开 mongo shell ：（可将 mongo 的 bin 目录配置到环境变量中的 path 中直接启动 mongo）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("xiaohao"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mongo\nMongoDB shell version v3.4.7\nconnecting to: mongodb://127.0.0.1:27017\nMongoDB server version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(".7\nServer has startup warnings:\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-29T10:56:07.116+0800 I CONTROL  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-29T10:56:07.116+0800 I CONTROL  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ** WARNING: Access control is not enabled "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the database.\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-29T10:56:07.117+0800 I CONTROL  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" **          Read and "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" access to data and configuration is unrestricted.\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-29T10:56:07.117+0800 I CONTROL  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("如果未启动安全认证会出现 warnings（4.0.6 版本未启动安全认证前 shell 会显示更多的 warnings 信息）\n"),n("ul",[n("li",[s._v("WARNING: Access control is not enabled for the database.")]),s._v(" "),n("li",[s._v("Read and write access to data and configuration is unrestricted.")])])])])])]),s._v(" "),n("h2",{attrs:{id:"开启安全认证（二选一）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启安全认证（二选一）"}},[s._v("#")]),s._v(" 开启安全认证（二选一）")]),s._v(" "),n("blockquote",[n("p",[s._v("推荐使用配置文件方式，易排查，有配置记录，利于后期维护")])]),s._v(" "),n("h3",{attrs:{id:"首先创建管理用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#首先创建管理用户"}},[s._v("#")]),s._v(" 首先创建管理用户")]),s._v(" "),n("ul",[n("li",[s._v("首先打开 mongo shell，进入 admin 数据库，创建一个管理员用户")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("use admin\nswitched to db admin\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  user: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(",\n  pwd: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(",\n  roles: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nSuccessfully added user: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##登录测试")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##失败返回0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"方式一：命令方式开启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式一：命令方式开启"}},[s._v("#")]),s._v(" 方式一：命令方式开启")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("以"),n("strong",[s._v("管理员方式")]),s._v("启动 cmd")])]),s._v(" "),n("li",[n("p",[s._v("删除以前的 MongoDB 服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("sc delete MongoDB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("打开计算机的服务管理界面，右键停止，刷新，就会发现该服务已经没了，关闭该界面。")])]),s._v(" "),n("li",[n("p",[s._v("创建带有安全认证的 MongoDB 服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("sc create MongoDB "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"E:\\Mongo4.0'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('in\\mongod.exe --dbpath E:\\Mongo4.0\\data --logpath E:\\Mongo4.0\\log\\mongodb.log  --logappend --service"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("注意修改路径，bin 目录下的 mongod.exe，数据库目录，日志目录")])])]),s._v(" "),n("li",[n("p",[s._v("启动服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("net start mongodb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"方式二：配置文件方式开启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式二：配置文件方式开启"}},[s._v("#")]),s._v(" 方式二：配置文件方式开启")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("以"),n("strong",[s._v("管理员方式")]),s._v("启动 cmd")])]),s._v(" "),n("li",[n("p",[s._v("删除以前的 MongoDB 服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("sc delete MongoDB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("打开计算机的服务管理界面，右键停止，刷新，就会发现该服务已经没了，关闭该界面")])]),s._v(" "),n("li",[n("p",[s._v("在安装目录上添加配置文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("systemLog:\n    destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    path: E:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Mongo4.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongodb.log\nstorage:\n    dbPath: E:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Mongo4.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("data\n    engine: wiredTiger\n    wiredTiger:\n        engineConfig:\n            cacheSizeGB: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nnet:\n    bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n    port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\nsecurity:\n    authorization: enabled\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("配置文件信息里子配置前面是四个空格，不能用 tab 键代替。不然报错")])])]),s._v(" "),n("li",[n("p",[s._v("根据配置文件启动 mongo")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("E:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Mongo4.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongod.exe --config "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"E:\\Mongo4.0\\mongod.cfg"')]),s._v(" --install\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("注意 bin 路径和配置文件的路径")])])]),s._v(" "),n("li",[n("p",[s._v("启动 mongoDB 服务")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("net start mongodb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"安全认证测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安全认证测试"}},[s._v("#")]),s._v(" 安全认证测试")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("启动安全认证之后无登录进行连接：发现无权限查看数据库")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("xiaohao"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mongo\nMongoDB shell version v3.4.7\nconnecting to: mongodb://127.0.0.1:27017\nMongoDB server version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(".7\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###无权限查看数据库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-29T12:21:17.295+0800 E QUERY    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("thread1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error: listDatabases failed:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"errmsg"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not authorized on admin to execute command { listDatabases: 1.0 }"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"codeName"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unauthorized"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n_getErrorWithCode@src/mongo/shell/utils.js:25:13\nMongo.prototype.getDBs@src/mongo/shell/mongo.js:62:1\nshellHelper.show@src/mongo/shell/utils.js:769:19\nshellHelper@src/mongo/shell/utils.js:659:15\n@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("shellhelp2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":1:1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ul",[n("li",[s._v("在 4.0.6 版本启动安全认证无登录查看数据库的时候不会报错，但不显示数据")])])]),s._v(" "),n("li",[n("p",[s._v("退出 shell 进行用户登录：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mongo -u myUserAdmin -p "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" localhost:27017/admin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("登录成功返回信息，并能进行数据的操作")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("xiaohao"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("mongo -u myUserAdmin -p "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" localhost:27017/admin\nMongoDB shell version v3.4.7\nconnecting to: mongodb://localhost:27017/admin\nMongoDB server version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(".7\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###测试是否有权限查看数据库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\nadmin        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("开启安全认证之后，数据库连接工具要输入用户名和密码")])])]),s._v(" "),n("h2",{attrs:{id:"相关-bug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关-bug"}},[s._v("#")]),s._v(" 相关 bug")]),s._v(" "),n("h3",{attrs:{id:"net-start-mongodb-报错（服务无法启动）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-start-mongodb-报错（服务无法启动）"}},[s._v("#")]),s._v(" net start MongoDB 报错（服务无法启动）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WINDOWS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system3"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("net start MongoDB\nMongoDB 服务正在启动 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nMongoDB 服务无法启动。\n\n发生服务特定错误:100\n请键入 NET HELPMSG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3547")]),s._v(" 以获取更多的帮助\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("直接进入 db 文件夹，先删除 mongod.lock 文件，然后重新启动服务即可；\n要是还不行，就继续删 storage.bson 文件，然后问题就解决了~")])]),s._v(" "),n("h3",{attrs:{id:"net-start-mongodb-报错（服务没有响应控制功能）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-start-mongodb-报错（服务没有响应控制功能）"}},[s._v("#")]),s._v(" net start mongodb 报错（服务没有响应控制功能）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WINDOWS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system3"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("net start mongodb\n服务没有响应控制功能。\n\n请键入 NET HELPMSG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2186")]),s._v(" 以获得更多的帮助。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("出现这个问题一般是路径有问题。")]),s._v(" "),n("p",[s._v("1）请注意你所有的路径没有错，包括 mongod 所在路径，日志所在路径等；")]),s._v(" "),n("p",[s._v("2）不要加入多余的“\\”，如“D:\\MongoDB\\Data”这个，千万不要写成“D:\\MongoDB\\Data\\”。")]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("卸载重新安装服务")])])])]),s._v(" "),n("h3",{attrs:{id:"net-start-mongodb-报错（发生系统错误-1058，无法启动服务）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-start-mongodb-报错（发生系统错误-1058，无法启动服务）"}},[s._v("#")]),s._v(" net start mongodb 报错（发生系统错误 1058，无法启动服务）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WINDOWS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system3"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("net start mongodb\n发生系统错误 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1058")]),s._v("。\n\n无法启动服务，原因可能是已被禁用或与其相关联的设备没有启动。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("打开计算机的服务管理界面，找到 mongodb 服务，右键停止，刷新，就会发现该服务已经没了，关闭该界面，并重新创建服务。")])]),s._v(" "),n("h3",{attrs:{id:"在删除服务或者启动服务时，显示指定服务已删除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在删除服务或者启动服务时，显示指定服务已删除"}},[s._v("#")]),s._v(" 在删除服务或者启动服务时，显示指定服务已删除")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WINDOWS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system3"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("sc delete MongoDB\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" DeleteService 失败 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1072")]),s._v("：\n指定的服务已标记为删除\n\n\nC:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WINDOWS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system3"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("sc create MongoDB "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"E:\\MongoDB'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('in\\mongod.exe --dbpath E:\\MongoDB\\data --logpath E:\\MongoDB\\logs\\mongodb.log  --logappend --auth --service"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" DeleteService 失败 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1072")]),s._v("：\n指定的服务已标记为删除\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("关闭此电脑的服务管理界面，重新打开服务管理界面刷新服务。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);