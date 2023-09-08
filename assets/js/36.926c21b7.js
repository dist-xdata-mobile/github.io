(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{427:function(a,s,t){"use strict";t.r(s);var n=t(6),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[a._v("#")]),a._v(" 引言")]),a._v(" "),t("p",[a._v("公司中有一个系统用的是 Dubbo + SpringBoot 的架构，但后来发现好像并没有必要用 dubbo 的架构所以准备直接让 web 层引用 service 层的 jar 包，有如下问题：")]),a._v(" "),t("ol",[t("li",[a._v("Spring Boot 项目打包成的 jar ，被其他项目依赖之后，总是报找不到类的错误？")]),a._v(" "),t("li",[a._v("不使用 "),t("code",[a._v("spring-boot-maven-plugin")]),a._v(" 插件打 jar 包，那么打进去的配置文件会不会生效？ -> 测试后发现生效的。")])]),a._v(" "),t("h2",{attrs:{id:"可执行-jar-包-依赖-jar-包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可执行-jar-包-依赖-jar-包"}},[a._v("#")]),a._v(" 可执行 jar 包 & 依赖 jar 包")]),a._v(" "),t("p",[a._v("一般使用 "),t("code",[a._v("maven clean package")]),a._v(" 打包出来的 jar 包就是依赖 jar，引入一些插件我们就可以将其打成可执行 jar，一般而言两者的目录结构没有什么区别（见附 1），唯一有区别的是 MANIFEST.MF（清单文件）。")]),a._v(" "),t("p",[a._v("依赖 jar 包的 MANIFEST.MF")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Manifest-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\nArchiver-Version: Plexus Archiver\nBuilt-By: x5456\nCreated-By: Apache Maven "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v(".3\nBuild-Jdk: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_181\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("可执行 jar 包的 MANIFEST.MF")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Manifest-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\nArchiver-Version: Plexus Archiver\nBuilt-By: x5456\nClass-Path: lib/hutool-all-4.6.1.jar    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 依赖 jar 包的路径")]),a._v("\nCreated-By: Apache Maven "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v(".3\nBuild-Jdk: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_181\nMain-Class: cn.x5456.TestCanRunJar  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用命令（java -jar xxx.jar）运行时的主启动类")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("blockquote",[t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/demingblog/p/5653844.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("META-INF 文件夹是干啥的，META-INF 文件夹能删吗？"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("如果你将 Jar 中的 META-INF 文件夹删除，那么 jar 文件里边就没有 MANIFEST.MF 文件。那么，java -jar 就找不到 main class.")]),a._v(" "),t("p",[a._v("没有 META-INF 你仍然可以创建一个 Jar 文件。但是，当你想要执行 jar 文件的时候，这个 jar 是需要具备 META-INF/MANIFEST.MF 的。")])]),a._v(" "),t("h3",{attrs:{id:"附-1：可执行-jar-与依赖-jar-打包出来的文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附-1：可执行-jar-与依赖-jar-打包出来的文件结构"}},[a._v("#")]),a._v(" 附 1：可执行 jar 与依赖 jar 打包出来的文件结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl00jo41txj30bw05sq32.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"springboot-打包的奥秘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot-打包的奥秘"}},[a._v("#")]),a._v(" SpringBoot 打包的奥秘")]),a._v(" "),t("p",[a._v("这个是我们对一个 SpringBoot 项目执行 "),t("code",[a._v("maven clean package")]),a._v(" 命令打包出来的结构：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkzzoufvikj30je0baq42.jpg",alt:""}})]),a._v(" "),t("p",[a._v("我们发现这里有两个文件，第一个 spring-test-0.0.1-SNAPSHOT.jar 表示打包成的可执行 jar ，第二个 spring-test-0.0.1-SNAPSHOT.jar.original 则是在打包过程中 ，被重命名的 jar，这是一个不可执行 jar，但是可以被其他项目依赖的 jar。")]),a._v(" "),t("blockquote",[t("p",[a._v("original：原件")])]),a._v(" "),t("h3",{attrs:{id:"为什么会有两个文件呢？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么会有两个文件呢？"}},[a._v("#")]),a._v(" 为什么会有两个文件呢？")]),a._v(" "),t("p",[a._v("在新建 SpringBoot 项目的时候，我们引入了一个插件：")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-maven-plugin"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl002hmslbj30ok0is0xa.jpg",alt:""}})]),a._v(" "),t("p",[a._v("spring-boot-maven-plugin 项目存在于 spring-boot-tools 目录中，它的默认目标（goal）就是 repackage 功能，其他功能要使用，则需要开发者显式配置。")]),a._v(" "),t("p",[a._v("spring-boot-maven-plugin 的 repackage 能够将 mvn package 生成的软件包，再次打包为可执行的软件包，并将 mvn package 生成的软件包重命名为 *.original。")]),a._v(" "),t("p",[a._v("spring-boot-maven-plugin 的 repackage 在代码层面调用了 RepackageMojo 的 execute 方法，而在该方法中又调用了 repackage 方法，repackage 方法代码及操作解析如下：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("repackage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MojoExecutionException")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// maven生成的jar，最终的命名将加上.original后缀")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Artifact")]),a._v(" source "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getSourceArtifact")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 最终为可执行jar，即fat jar")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),a._v(" target "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getTargetFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取重新打包器，将maven生成的jar重新打包成可执行jar")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Repackager")]),a._v(" repackager "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRepackager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查找并过滤项目运行时依赖的jar")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Artifact")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" artifacts "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("filterDependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getArtifacts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getFilters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAdditionalFilters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 将artifacts转换成libraries")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Libraries")]),a._v(" libraries "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArtifactsLibraries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("artifacts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("requiresUnpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获得Spring Boot启动脚本")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LaunchScript")]),a._v(" launchScript "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLaunchScript")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 执行重新打包，生成fat jar")]),a._v("\n        repackager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("repackage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" libraries"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" launchScript"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),a._v(" ex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throw")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MojoExecutionException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 将maven生成的jar更新成.original文件")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("updateArtifact")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" repackager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBackupFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br")])]),t("h3",{attrs:{id:"两个-jar-包比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两个-jar-包比较"}},[a._v("#")]),a._v(" 两个 jar 包比较")]),a._v(" "),t("p",[a._v("可执行 jar "),t("code",[a._v("spring-test-0.0.1-SNAPSHOT.jar")]),a._v(" 解压之后，目录结构如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("├── BOOT-INF\n│   ├── classes\n│   │   ├── application.properties\n│   │   └── cn\n│   │       └── x5456   # 应用的.class 文件目录\n│   │           └── springtest\n│   │               └── SpringTestApplication.class\n│   └── lib # 这里存放的是应用的 Maven 依赖的jar包文件\n│       ├── javax.annotation-api-1.3.2.jar\n│       ├── spring-beans-5.1.8.RELEASE.jar\n│       └── ...\n├── META-INF\n│   ├── MANIFEST.MF\n│   └── maven\n│       └── com.x5456\n│           └── springtest\n│               ├── pom.properties\n│               └── pom.xml\n└── org\n    └── springframework\n        └── boot\n            └── loader #存放的是 Spring boot loader 的 class 文件\n                ├── ExecutableArchiveLauncher.class\n                ├── JarLauncher.class\n                ├── LaunchedURLClassLoader$UseFastConnectionExceptionsEnumeration.class\n                ├── LaunchedURLClassLoader.class\n                ├── Launcher.class\n                ├── MainMethodRunner.class\n                ├── PropertiesLauncher$1.class\n                ├── PropertiesLauncher$ArchiveEntryFilter.class\n                ├── PropertiesLauncher$PrefixMatchingArchiveFilter.class\n                ├── PropertiesLauncher.class\n                ├── WarLauncher.class\n                ├── archive\n                │   ├── Archive$Entry.class\n                │   ├── ...\n                ├── data\n                │   ├── RandomAccessData.class\n                │   ├── ...\n                ├── jar\n                │   ├── AsciiBytes.class\n                │   ├── ...\n                └── util\n                    └── SystemPropertyUtils.class\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br")])]),t("p",[a._v("我们的代码被放在了 "),t("code",[a._v("BOOT-INF/classes/")]),a._v(" 目录下。")]),a._v(" "),t("p",[t("code",[a._v("META-INF")]),a._v(" 目录存放着当前 jar 包的清单文件（MANIFEST.MF）和当前 jar 包引入的 maven 依赖信息（pom.xml），我们看下 MANIFEST.MF 文件：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Manifest-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\nSpring-Boot-Classpath-Index: BOOT-INF/classpath.idx\nImplementation-Title: spring-test\nImplementation-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".1-SNAPSHOT\nStart-Class: cn.x5456.springtest.SpringTestApplication  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个是 Spring 自定义的属性，存放我们的启动类的全类路径")]),a._v("\nSpring-Boot-Classes: BOOT-INF/classes/  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个是 Spring 自定义的属性，表示我们自己代码编译后的位置")]),a._v("\nSpring-Boot-Lib: BOOT-INF/lib/  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个是 Spring 自定义的属性，表示项目依赖的 jar 的位置")]),a._v("\nBuild-Jdk-Spec: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v("\nSpring-Boot-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.3")]),a._v(".2.RELEASE\nCreated-By: Maven Jar Plugin "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.2")]),a._v(".0\nMain-Class: org.springframework.boot.loader.JarLauncher "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 当使用 java -jar xxx.jar 命令启动的时候会调用这个类的 main 方法。")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("依赖 jar "),t("code",[a._v("spring-test-0.0.1-SNAPSHOT.jar.original")]),a._v(" 解压之后，目录结构如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl00myhnw2j30hq070753.jpg",alt:""}})]),a._v(" "),t("p",[a._v("依赖 jar 并没有 "),t("code",[a._v("BOOT-INF/classes")]),a._v(" 目录，而且也没有把它所依赖的 jar 包打进来，当其他项目引用这个 jar 包的时候（通过 maven 坐标），他会去找 "),t("code",[a._v("META-INF/maven/pom.xml")]),a._v(" 文件，将当前 jar 包所依赖的其他 jar 包从 maven 仓库拉下来。")]),a._v(" "),t("p",[a._v("我们顺道看下它的 "),t("code",[a._v("META-INF/MANIFEST.MF")]),a._v(" 文件，其中没有定义启动类等。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Manifest-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\nImplementation-Title: spring-test\nImplementation-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".1-SNAPSHOT\nBuild-Jdk-Spec: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v("\nCreated-By: Maven Jar Plugin "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.2")]),a._v(".0\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"为什么-springboot-不直接把我们的代码放到根路径，而要自定义一个-boot-inf-目录呢？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-springboot-不直接把我们的代码放到根路径，而要自定义一个-boot-inf-目录呢？"}},[a._v("#")]),a._v(" 为什么 SpringBoot 不直接把我们的代码放到根路径，而要自定义一个 BOOT-INF 目录呢？")]),a._v(" "),t("p",[a._v("其他的可执行 jar 都是直接把他放在了打包的类路径下，这样就可以做到既可以执行又可以引用，那么 SpringBoot 为什么这样做呢，他的奥秘就在于 MANIFEST.MF 文件中的 Main-Class 配置的并不是我们的主启动类，而是 JarLauncher 这个类，没有放在根路径的原因可能是害怕我们创建了一个相同类路径的类将其覆盖。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Main-Class: org.springframework.boot.loader.JarLauncher "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 当使用 java -jar xxx.jar 命令启动的时候会调用这个类的 main 方法。")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("那么 JarLauncher 是做什么的呢？")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.sohu.com/a/338927896_100109711",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring-Boot 启动之前做了哪些事？ "),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"其他项目引用-springboot-打成的-jar-包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他项目引用-springboot-打成的-jar-包"}},[a._v("#")]),a._v(" 其他项目引用 SpringBoot 打成的 jar 包")]),a._v(" "),t("p",[a._v("我们对 spring-test 这个项目执行 "),t("code",[a._v("maven clean install")]),a._v(" 命令，将其打包到 maven 仓库。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl01a7shwfj31s60lyqa5.jpg",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl01bpvmpsj30zw0k2wj6.jpg",alt:""}})]),a._v(" "),t("p",[a._v("其他项目，通过 maven 引用这个 jar 包，调用它里面的 JsonUtils 工具类：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl01d3aygrj31bu0kkjv7.jpg",alt:""}})]),a._v(" "),t("p",[a._v("我们发现根本就调用不了这个方法（因为 SpringBoot 打包出来的 jar 包结构和正常的不一样，他把我们的代码放到了 BOOT-INF 目录下了）。")]),a._v(" "),t("h4",{attrs:{id:"解决：一次打包两个-jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决：一次打包两个-jar"}},[a._v("#")]),a._v(" 解决：一次打包两个 jar")]),a._v(" "),t("p",[a._v("一般来说，Spring Boot 直接打包成可执行 jar 就可以了，"),t("strong",[a._v("不建议")]),a._v("将 Spring Boot 作为普通的 jar 被其他的项目所依赖。如果有这种需求，建议将被依赖的部分，单独抽出来做一个普通的 Maven 项目，然后在 Spring Boot 中引用这个 Maven 项目。")]),a._v(" "),t("p",[a._v("如果"),t("strong",[a._v("非要")]),a._v("将 Spring Boot 打包成一个普通 jar 被其他项目依赖，技术上来说，也是可以的，给 spring-boot-maven-plugin 插件添加如下配置：")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-maven-plugin"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("classifier")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("exec"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("classifier")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("配置的 classifier 表示"),t("strong",[a._v("可执行 jar 的名字")]),a._v("，配置了这个之后，在插件执行 repackage 命令时，就不会给 "),t("code",[a._v("mvn package")]),a._v(" 所打成的 jar 重命名了，所以，打包后的 jar 如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl01h2j8gdj30kg0bcta2.jpg",alt:""}})]),a._v(" "),t("p",[a._v("我们执行 "),t("code",[a._v("maven clean install")]),a._v(" 将其打包到仓库：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl01jh5vg6j310a0jote1.jpg",alt:""}})]),a._v(" "),t("p",[a._v("这个时候其他项目引用他就可以调用它里面的方法了：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl01kjqnomj316c07uabe.jpg",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"为啥-main-class-是-xxxlauncher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为啥-main-class-是-xxxlauncher"}},[a._v("#")]),a._v(" 为啥 MAIN-CLASS 是 XXXLauncher?")]),a._v(" "),t("p",[a._v("XXXLauncher 在调用我们自己的主类之前做了以下三件事：")]),a._v(" "),t("ol",[t("li",[a._v("扩展 JDK 默认的支持 JAR 对应的协议，因为 Spring Boot 启动不仅仅需要 JDK 的 JAR 文件，还需要 BOOT-INF/lib 这个目录下的文件。默认实现无法将 BOOT-INF/lib 这个目录当作 ClassPath，故需要替换实现。")]),a._v(" "),t("li",[a._v("判断当前的介质，是 java -jar 启动，还是 java org.springframework.boot.loader.JarLauncher 启动。以便获取对应的 ClassLoader。")]),a._v(" "),t("li",[a._v("获取 MANIFEST.MF 文件中的 Start-Class 属性，也就是我们自定义的主类。通过第二步获取的 ClassLoader 加载获取到 Class 文件，通过反射调用 main 方法，启动应用。")])]),a._v(" "),t("h3",{attrs:{id:"项目打成-war-包的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目打成-war-包的结构"}},[a._v("#")]),a._v(" 项目打成 war 包的结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl02dxfl0aj30fe08y0t3.jpg",alt:""}})]),a._v(" "),t("p",[a._v("我们发现他打出来的结构中多了一个 org 目录，通过上面的学习我们知道这个目录里放的是启动器（Launcher）相关的类，而启动器又是在 MANIFEST.MF 文件中配置的，所以我们看下：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Manifest-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\nImplementation-Title: spring-test\nImplementation-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".1-SNAPSHOT\nStart-Class: cn.x5456.springtest.SpringTestApplication\nSpring-Boot-Classes: WEB-INF/classes/\nSpring-Boot-Lib: WEB-INF/lib/\nBuild-Jdk-Spec: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v("\nSpring-Boot-Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.3")]),a._v(".2.RELEASE\nCreated-By: Maven Archiver "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.4")]),a._v(".0\nMain-Class: org.springframework.boot.loader.WarLauncher "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 与打成 jar 包的相比，这里换成了 WarLauncher")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("Spring 官方解释这样做的目的是：打包一个又能发布于 tomcat 又能 java -jar 直接跑的 war。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gl02vimrhmj324w0t8tfu.jpg",alt:""}})]),a._v(" "),t("h4",{attrs:{id:"jarlauncher-与-warlauncher-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jarlauncher-与-warlauncher-区别"}},[a._v("#")]),a._v(" JarLauncher 与 WarLauncher 区别")]),a._v(" "),t("p",[a._v("差别仅在于，JarLauncher 在构建 LauncherURLClassLoader 时，会搜索 BOOT-INF/classes 目录及 BOOT-INF/lib 目录下 jar，WarLauncher 在构建 LauncherURLClassLoader 时，则会搜索 WEB-INFO/classes 目录及 WEB-INFO/lib 和 WEB-INFO/lib-provided 两个目录下的 jar")]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/lenve/p/11156340.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring Boot 打包成的可执行 jar ，为什么不能被其他项目依赖？"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903876877893640",target:"_blank",rel:"noopener noreferrer"}},[a._v("聊一聊 JAR 文件和 MANIFEST.MF"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.sohu.com/a/338927896_100109711",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring-Boot 启动之前做了哪些事？ "),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("下面的这篇文章，等学懂了 JVM 类加载机制再回来看")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000013532009",target:"_blank",rel:"noopener noreferrer"}},[a._v("springboot 应用启动原理(二) 扩展 URLClassLoader 实现嵌套 jar 加载"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);