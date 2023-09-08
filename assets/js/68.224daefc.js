(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{456:function(s,a,e){"use strict";e.r(a);var n=e(6),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"忘记-oracle-的-sys-用户密码怎么修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#忘记-oracle-的-sys-用户密码怎么修改"}},[s._v("#")]),s._v(" 忘记 oracle 的 sys 用户密码怎么修改")]),s._v(" "),e("blockquote",[e("p",[s._v("作者:网络 时间： 2020-10-16")])]),s._v(" "),e("p",[s._v("忘记除 SYS、SYSTEM 用户之外的用户的登录密码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('CONN SYS/PASS_WORD AS SYSDBA; --用SYS (或SYSTEM)用户登录\nALTER USER user_name IDENTIFIED BY "newpassword"; --修改用户的密码，密码不能是数字开头，否则会出现：ORA-00988: 口令缺失或无效\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("忘记 SYS 用户，或者是 SYSTEM 用户的密码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('CONN SYS/PASS_WORD AS SYSDBA; --如果是忘记SYSTEM用户的密码，可以用SYS用户登录。\nALTER USER SYSTEM IDENTIFIED BY "newpassword";\n\nCONN SYSTEM/PASS_WORD AS SYSDBA; --如果是忘记SYS用户的密码，可以用SYSTEM用户登录。\nALTER USER SYS IDENTIFIED BY "newpassword";\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("SYS,SYSTEM 用户的密码都忘记")]),s._v(" "),e("p",[s._v("Oracle 提供了两种验证方式，一种是 OS 验证，另一种密码文件验证方式，如果是第一种方式用以下方法修改密码：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("　　sqlplus "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nolog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("connect")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" sysdba\n　　"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" sys identified "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" newpassword"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" system identified "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" newpassword"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("如果是第二种方法可以使用 ORAPWD.EXE 工具修改密码。打开命令提示符窗口，输入如下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("orapwd file=D:\\oracle10g\\database\\pwdctcsys.ora password=newpassword\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个命令重新生成了数据库的密码文件。密码文件的位置在 ORACLE_HOME 目录下的\\database 目录下。这个密码是修改 sys 用户的密码。除 sys 其他用户的密码不会改变。也可以下方法修改密码，设定完后，重新启动服务，再次登陆就可以了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("orapwd file=pwdxxx.ora password=newpassword entries=10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"oracle-11g-默认用户名和密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oracle-11g-默认用户名和密码"}},[s._v("#")]),s._v(" Oracle 11g 默认用户名和密码")]),s._v(" "),e("p",[s._v("安装 ORACLE 时，若没有为下列用户重设密码，则其默认密码如下：")]),s._v(" "),e("p",[s._v("用户名/密码 登录身份 说明\nsys/change_on_install SYSDBA 或 SYSOPER 不能以 NORMAL 登录，可作为默认的系统管理员\nsystem/manager SYSDBA 或 NORMAL 不能以 SYSOPER 登录，可作为默认的系统管理员\nsysman/oem_temp sysman 为 oms 的用户名\nscott/tiger NORMAL 普通用户\naqadm/aqadm SYSDBA 或 NORMAL 高级队列管理员\nDbsnmp/dbsnmp SYSDBA 或 NORMAL 复制管理员")]),s._v(" "),e("p",[s._v("登录身份：指登录时的 Role 指定，oracle11g 中分 SYSDBA 和 default 两种。在安装 Oracle 10g 的时候，提示创建数据库，在创建的同时提示你输入口令，若此时你输入了密码，在登录数据库的时候用户名 sys 对应的密码就应该是你创建数据库时候输入的口令。而非默认的 change_on_install.")])])}),[],!1,null,null,null);a.default=t.exports}}]);