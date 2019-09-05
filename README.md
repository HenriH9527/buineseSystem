## 项目基础结构设计

> 业务端前端基础架构设计文档。


### 项目技术选型

整个项目使用了 vue 全家桶：

* base.css   // 让默认的 HTML 元素样式保持跨浏览器的高度一致性；
* nprogress  // 浏览器顶部状态指示进度条；
* axios  // http 请求库；
* vue-cli  // 使用 webpack 模板项目初始化工程；
* vuex  // 管理应用级的共享数据
* vue-router   // 页面路由管理
* element-ui  // vue 组件库

整个项目技术选型考虑到以下几点：

1. 项目数据交互复杂度高，使用 vue 进行前端开发来降低复杂度。
2. Vuex全局状态管理，让项目管理更利于项目的维护性
3. 个人比较喜欢 vue 的组件化，将项目拆分一个个单独的模块进行开发。

### 项目结构

这是一个前后端分离项目的前端部分, 参考阴明关于掘金重构的[幻灯片](http://slides.com/kalasoo/vueconf-juejin-refactor#/) 进行更改, 整个项目分为四个层级：

![1526606558349](./images/1526606558349.png)

├──**表现层**

​	├──路由切换 （router）

​	├──页面视图（views）

​	├──组件（components）

├──**数据层**

​	├──数据的处理（service）

├──**接口层**

​	├──api 请求接口（components）

**├──基础设施层**

​	├──基础开发环境配置

​	├──util 工具函数（utils）

#### 整体流程:

api 接口获取数据 ---> service 数据处理 ---> store action 状态提交 ---> component getter 获取数据渲染成 views

component 得到用户输入 ---> dispatch stroe 的 action ---> service 数据处理 --> api 请求接口提交

### 目录结构

```bash
|-- build                        // 项目构建相关代码
|   |-- build.js                 // 生产环境构建代码
|   |-- check-version.js         // 检查 Node、Npm 等版本
|	|-- utils.js             // 构建工具相关
|   |-- vue-loader.conf.js       // Vue-loader 相关配置
|   |-- webpack.base.conf.js     // Webpack 基础配置
|   |-- webpack.dev.conf.js      // Webpack 开发环境配置
|   |-- webpack.prod.conf.js     // Webpack 生产环境配置
|-- config
|   |-- dev.env.js                // 开发环境变量
|   |-- index.js                  // 项目基础配置(例如打包路径,开发代理设置)
|   |-- prod.env.js               // 生产环境变量
|-- dist			  // 打包文件
|-- docs			  // 文档说明
|-- node_modules
|-- src                          // 项目核心源码
|   |-- api                      // 后端交互文件
|   |-- assets                   // 项目静态资源
|   |-- components               // 全局公共组件
|   |-- router                   // 路由文件
|   |-- service                  // 处理请求返回的数据
|   |-- store                    // 全局状态管理(例如用户登陆状态等)
|   |-- utils                    // 全局工具函数
|   |-- views                    // 业务页面
|   |-- App.vue                  // Vue 根组件
|   |-- main.js                  // 入口文件(引入依赖模块)
|-- static                       // 静态文件(例如没有模块化的第三方库)
|-- .babelrc                     // ES6 编译配置
|-- .editorconfig                // 统一代码风格(例如Charset, 空格)
|-- .eslintignore                // ESLint 检查排除的文件
|-- .eslistrc.js                 // ESLint 规则文件
|-- .gitignore                   // Git 上传排除的文件
|-- .postcssrc.js		 // Css 文件处理(例如浏览器前缀自动引入)
|-- index.html                   // HTML 基础模板文件
|-- package-lock.json            // 记录当前项目所安装 Package 的具体来源和版本号
|-- package.json                 // 项目配置信息(项目所需模块，项目名称、版本等)
|-- README.md                    // 项目基本说明
```

### 网站页面组成

整个网页分为五个主要模块：

1. 登陆注册
   1. 登陆
      1. 账号登陆
2. 外出体检管理
   1. 入园
   2. 入托
   3. 入校
   4. 学校管理
   5. 统计报表
3. 大客户
   1. 社区管理
   2. 入托
   3. 入校
   4. 入园
   5. 合作机构
   6. 学校管理
   7. 统计报表
...
