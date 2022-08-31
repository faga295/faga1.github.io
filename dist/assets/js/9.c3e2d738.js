(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{431:function(e,s,a){"use strict";a.r(s);var t=a(65),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"commonjs的出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs的出现"}},[e._v("#")]),e._v(" commonjs的出现")]),e._v(" "),a("p",[e._v("在最开始网站的业务没那么复杂，js只是作为一门脚本语言，它不需要引入其他文件就可以解决已有业务，但随着业务需求越来越复杂，越来越需要模块化，commonjs就这样诞生了。再到后来es6把import，export加入了它们的关键字当中，也就有了现在的esmodule。首先这两个最大的不同之处在于：commonjs的module 和 require 只是对象和方法而已，而esmodule的import，export它们是关键字，es6新加的。")]),e._v(" "),a("h1",{attrs:{id:"commonjs和es6模块的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs和es6模块的差异"}},[e._v("#")]),e._v(" commonjs和es6模块的差异")]),e._v(" "),a("ul",[a("li",[e._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),e._v(" "),a("li",[e._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。")])]),e._v(" "),a("h1",{attrs:{id:"commonjs具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs具体实现"}},[e._v("#")]),e._v(" commonjs具体实现")]),e._v(" "),a("p",[e._v("先看一个例子")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// a.js")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("setVal")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("newVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  val "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" newVal\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  setVal\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// b.js")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" setVal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./a.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1")]),e._v("\n\n")])])]),a("p",[e._v("我们可以这样子理解：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const myModule = {\n  exports: {}\n}\n\nlet val = 1;\n\nconst setVal = (newVal) => {\n  val = newVal\n}\n\nmyModule.exports = {\n  val,\n  setVal\n}\n\nconst { val: useVal, setVal: useSetVal } = myModule.exports\n\nconsole.log(useVal);\n\nuseSetVal(101)\n\nconsole.log(useVal);\n\n")])])]),a("p",[e._v("这里我们就可以理解什么叫值的拷贝了")]),e._v(" "),a("p",[e._v("我们的val和模块里的val是不一样的所以使用setVal修改没有效果")]),e._v(" "),a("p",[e._v("在es module中就不是输出对象的拷贝了，而是值的引用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// a.js\nimport { foo } from './b';\nconsole.log(foo);\nsetTimeout(() => {\n  console.log(foo);\n  import('./b').then(({ foo }) => {\n    console.log(foo);\n  });\n}, 1000);\n\n// b.js\nexport let foo = 1;\nsetTimeout(() => {\n  foo = 2;\n}, 500);\n// 执行：babel-node a.js\n// 执行结果：\n// 1\n// 2\n// 2\n")])])]),a("p",[e._v("知道了module大概是个什么东西之后，我们来看看commonjs的具体实现")]),e._v(" "),a("p",[e._v("首先我们定义一个自己的module，每个文件都有一个module对象")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function MyModule(id = '') {\n  this.id = id;             // 模块路径\n  this.exports = {};        // 导出的东西放这里，初始化为空对象\n  this.loaded = false;      // 用来标识当前模块是否已经加载\n}\n")])])]),a("h2",{attrs:{id:"require方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require方法"}},[e._v("#")]),e._v(" require方法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MyModule.prototype.require = function (id) {\n  return MyModule._load(id);\n}\n")])])]),a("p",[e._v("load方法用来判断require的模块是否已经加入到缓存，并且返回需要加载的模块的exports")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nMyModule._load = function (request) {    // request是传入的路径\n  const filename = MyModule._resolveFilename(request);\n\n  // 先检查缓存，如果缓存存在且已经加载，直接返回缓存\n  const cachedModule = MyModule._cache[filename];\n  if (cachedModule) {\n    return cachedModule.exports;\n  }\n\n  // 如果缓存不存在，我们就加载这个模块\n  const module = new MyModule(filename);\n\n  // load之前就将这个模块缓存下来，这样如果有循环引用就会拿到这个缓存，但是这个缓存里面的exports可能还没有或者不完整\n  MyModule._cache[filename] = module;\n\n  // 如果 load 失败，需要将 _cache 中相应的缓存删掉。这里简单起见，不做这个处理\n  module.load(filename);\n\n  return module.exports;\n}\n")])])]),a("p",[e._v("里面的MyModule._resolveFileName不做过多解释，重点解释MyModule.prototype.load")]),e._v(" "),a("p",[e._v("这个函数就是用来获取文件后缀，并且采取相应的方法加载，这里我们只对.js的加载进行解析")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MyModule.prototype.load = function (filename) {\n  // 获取文件后缀名\n  const extname = path.extname(filename);\n\n  // 调用后缀名对应的处理函数来处理，当前实现只支持 JS\n  MyModule._extensions[extname](this, filename);\n\n  this.loaded = true;\n}\n\n")])])]),a("p",[e._v("如果后缀名是.js会调用MyModule.prototype._compile")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MyModule._extensions['.js'] = function (module, filename) {\n  const content = fs.readFileSync(filename, 'utf8');\n  module._compile(content, filename);\n}\n\n")])])]),a("h3",{attrs:{id:"compile的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile的实现"}},[e._v("#")]),e._v(" _compile的实现")]),e._v(" "),a("p",[e._v("首先我们思考,我们思考为什么可以在文件中使用"),a("code",[e._v("exports")]),e._v(", "),a("code",[e._v("require")]),e._v(", "),a("code",[e._v("module")]),e._v(", "),a("code",[e._v("__dirname")]),e._v(", "),a("code",[e._v("__filename")]),e._v("....这是因为我们在加载文件的时候，Mymodule.prototype. _compile把整个代码外面套了一个函数，函数里面传入了"),a("code",[e._v("exports")]),e._v(", "),a("code",[e._v("require")]),e._v(", "),a("code",[e._v("module")]),e._v(", "),a("code",[e._v("__dirname")]),e._v(", "),a("code",[e._v("__filename")]),e._v(",然后把这个函数执行一遍，就可以拿到exports了")]),e._v(" "),a("h2",{attrs:{id:"为什么commonjs相互引用没有产生类似死锁的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么commonjs相互引用没有产生类似死锁的问题"}},[e._v("#")]),e._v(" 为什么commonjs相互引用没有产生类似死锁的问题")]),e._v(" "),a("p",[e._v("观察MyModule._load我们可以发现其中的关键在于加载模块和加入缓存的顺序")]),e._v(" "),a("p",[e._v("即：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MyModule._cache[filename] = module;\nmodule.load(filename);\n")])])]),a("p",[e._v("假设a.js和b.js相互引用")]),e._v(" "),a("p",[e._v("若先加载a.js,缓存中没有a.js，那么就会把a.js加入缓存，接着加载a.js，加载a.js的时候发现里面require了b.js，那么又会把b.js加入缓存，加载b.js，b.js发现里面require了a.js，a.js这时已经缓存了，但是还没有module.exports，因为这是a.js还没加载完，这时我们就引入了一个空对象，那么就不会出现循环调用的情况。")]),e._v(" "),a("h1",{attrs:{id:"es-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[e._v("#")]),e._v(" es module")]),e._v(" "),a("p",[e._v("前面说ESM编译时输出接口，是因为它的模块解析发生在编译阶段，而commonjs模块解析发生在执行阶段，毕竟module也只是一个对象。")]),e._v(" "),a("p",[e._v("import 优先执行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// a.js\nconsole.log('a.js')\nimport { foo } from './b';\n\n// b.js\nexport let foo = 1;\nconsole.log('b.js 先执行');\n\n// 执行结果:\n// b.js 先执行\n// a.js\n")])])]),a("p",[e._v("export 会变量提升，这样就可以避免循环引用造成死锁")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// a.js\nimport { foo } from './b';\nconsole.log('a.js');\nexport const bar = 1;\nexport const bar2 = () => {\n  console.log('bar2');\n}\nexport function bar3() {\n  console.log('bar3');\n}\n\n// b.js\nexport let foo = 1;\nimport * as a from './a';\nconsole.log(a);\n\n// 执行结果:\n// { bar: undefined, bar2: undefined, bar3: [Function: bar3] }\n// a.js\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);