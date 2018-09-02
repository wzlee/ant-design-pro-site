webpackJsonp([74],{1730:function(n,e){n.exports={content:["article",["h2","Foreword"],["p","Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by ",["a",{title:null,href:"http://ant.design/"},"Ant Design"],", this project introduces higher level components; we have developed templates, components, and a   corresponding design kit to improve the user and development experience for admin interfaces."],["p","Your help is welcomed and much appreciated. With your feedback we can make incremental progress towards elegant and well designed components. Please open a issue or submit a pull request!"],["p","With those objectives in mind, we have built the following templates, and have built a scaffold based on React.js, which should help you prototyping production-ready admin interfaces."],["pre",{lang:null,highlighted:'<span class="token operator">-</span> Dashboard\n  <span class="token operator">-</span> Analytic\n  <span class="token operator">-</span> Monitor\n  <span class="token operator">-</span> Workspace\n<span class="token operator">-</span> Form\n  <span class="token operator">-</span> Basic Form\n  <span class="token operator">-</span> <span class="token keyword">Step</span> Form\n  <span class="token operator">-</span> Advanced Form\n<span class="token operator">-</span> List\n  <span class="token operator">-</span> Standard Table\n  <span class="token operator">-</span> Standard List\n  <span class="token operator">-</span> Card List\n  <span class="token operator">-</span> Search List <span class="token punctuation">(</span>Project<span class="token operator">/</span>Applications<span class="token operator">/</span>Article<span class="token punctuation">)</span>\n<span class="token operator">-</span> Profile\n  <span class="token operator">-</span> Simple Profile\n  <span class="token operator">-</span> Advanced Profile\n<span class="token operator">-</span> Result\n  <span class="token operator">-</span> Success\n  <span class="token operator">-</span> Failed\n<span class="token operator">-</span> Exception\n  <span class="token operator">-</span> <span class="token number">403</span>\n  <span class="token operator">-</span> <span class="token number">404</span>\n  <span class="token operator">-</span> <span class="token number">500</span>\n<span class="token operator">-</span> Account\n  <span class="token operator">-</span> Account Center\n  <span class="token operator">-</span> Account Settings\n<span class="token operator">-</span> User\n  <span class="token operator">-</span> Login\n  <span class="token operator">-</span> Register\n  <span class="token operator">-</span> Register Result'},["code","- Dashboard\n  - Analytic\n  - Monitor\n  - Workspace\n- Form\n  - Basic Form\n  - Step Form\n  - Advanced Form\n- List\n  - Standard Table\n  - Standard List\n  - Card List\n  - Search List (Project/Applications/Article)\n- Profile\n  - Simple Profile\n  - Advanced Profile\n- Result\n  - Success\n  - Failed\n- Exception\n  - 403\n  - 404\n  - 500\n- Account\n  - Account Center\n  - Account Settings\n- User\n  - Login\n  - Register\n  - Register Result"]],["h2","Who are using"],["p","Hundreds of applications are trying Ant Design Pro in Ant Financial and Alibaba Group, welcome to leave your information in ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues/99"},"Ant Design Pro Users"]," if you or your organization is using it."],["h3","For Designer"],["p","If you are product manager or designer, you can find the ",["a",{title:null,href:"/docs/resource"},"design kit"]," here."],["h3","For Developer"],["p","We will walk you through the steps to get started."],["h2","Preparation"],["p","You will need ",["a",{title:null,href:"http://nodejs.org/"},"node"]," and ",["a",{title:null,href:"https://git-scm.com/"},"git"],". The project is based on ",["a",{title:null,href:"https://babeljs.io/learn-es2015/"},"ES2015+"],", ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"],", ",["a",{title:null,href:"https://umijs.org/"},"UmiJS"],", ",["a",{title:null,href:"http://github.com/dvajs/dva"},"dva"],", ",["a",{title:null,href:"https://antv.alipay.com/zh-cn/g2/3.x/index.html"},"g2"]," and ",["a",{title:null,href:"https://ant.design/docs/react/introduce"},"antd"],". It would be helpful if you have pre-existing knowledge on those."],["h2","Installation"],["p","There are two ways to install."],["h3","Clone the Git Repository"],["pre",{lang:"bash",highlighted:'$ <span class="token function">git</span> clone --depth<span class="token operator">=</span>1 https://github.com/ant-design/ant-design-pro.git my-project\n$ <span class="token function">cd</span> my-project'},["code","$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project\n$ cd my-project"]],["h3","Use the Command Line"],["p","You can also use ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro-cli"},"ant-design-pro-cli"],"."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-pro-cli -g\n$ <span class="token function">mkdir</span> my-project <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> my-project\n$ pro new  <span class="token comment" spellcheck="true"># Initialize Scaffold</span>'},["code","$ npm install ant-design-pro-cli -g\n$ mkdir my-project && cd my-project\n$ pro new  # Initialize Scaffold"]],["h2","Scaffolding"],["p","We have provided a scaffold which includes common routes for admins and demonstrates our component library. The project layout is as follows:"],["pre",{lang:"bash",highlighted:'\u251c\u2500\u2500 config                   <span class="token comment" spellcheck="true"># umi config, include routes and webpack etc.</span>\n\u251c\u2500\u2500 mock                     <span class="token comment" spellcheck="true"># Local Mock Data</span>\n\u251c\u2500\u2500 public\n\u2502   \u2514\u2500\u2500 favicon.png          <span class="token comment" spellcheck="true"># Favicon</span>\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets               <span class="token comment" spellcheck="true"># Local static files</span>\n\u2502   \u251c\u2500\u2500 components           <span class="token comment" spellcheck="true"># Components</span>\n\u2502   \u251c\u2500\u2500 e2e                  <span class="token comment" spellcheck="true"># Integrated Test Case</span>\n\u2502   \u251c\u2500\u2500 layouts              <span class="token comment" spellcheck="true"># Common Layouts</span>\n\u2502   \u251c\u2500\u2500 models               <span class="token comment" spellcheck="true"># Global dva Model</span>\n\u2502   \u251c\u2500\u2500 pages                <span class="token comment" spellcheck="true"># Sub-pages and templates</span>\n\u2502   \u251c\u2500\u2500 services             <span class="token comment" spellcheck="true"># Back-end Services</span>\n\u2502   \u251c\u2500\u2500 utils                <span class="token comment" spellcheck="true"># Utility</span>\n\u2502   \u251c\u2500\u2500 locales              <span class="token comment" spellcheck="true"># i18n resources</span>\n\u2502   \u251c\u2500\u2500 global.less          <span class="token comment" spellcheck="true"># Global Stylesheet</span>\n\u2502   \u2514\u2500\u2500 global.js            <span class="token comment" spellcheck="true"># Global JS</span>\n\u251c\u2500\u2500 tests                    <span class="token comment" spellcheck="true"># Tests Configuration</span>\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 package.json'},["code","\u251c\u2500\u2500 config                   # umi config, include routes and webpack etc.\n\u251c\u2500\u2500 mock                     # Local Mock Data\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u2514\u2500\u2500 favicon.png          # Favicon\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets               # Local static files\n\u2502\xa0\xa0 \u251c\u2500\u2500 components           # Components\n\u2502\xa0\xa0 \u251c\u2500\u2500 e2e                  # Integrated Test Case\n\u2502\xa0\xa0 \u251c\u2500\u2500 layouts              # Common Layouts\n\u2502\xa0\xa0 \u251c\u2500\u2500 models               # Global dva Model\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages                # Sub-pages and templates\n\u2502\xa0\xa0 \u251c\u2500\u2500 services             # Back-end Services\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils                # Utility\n\u2502\xa0\xa0 \u251c\u2500\u2500 locales              # i18n resources\n\u2502\xa0\xa0 \u251c\u2500\u2500 global.less          # Global Stylesheet\n\u2502\xa0\xa0 \u2514\u2500\u2500 global.js            # Global JS\n\u251c\u2500\u2500 tests                    # Tests Configuration\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 package.json"]],["h2","Development"],["p","Install Dependencies"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span>'},["code","$ npm install"]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> start'},["code","$ npm start"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/uHAzKpIQDMGdmjIxZLOV.png",width:"700"}]],["p","This will automatically open ",["a",{title:null,href:"http://localhost:8000"},"http://localhost:8000"],". If you see the following page then you have succeeded."],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/PVmvmxKUsAryuFbGqUmV.png",width:"700",alt:"Screenshot"}]],["p","You're all set!"],["p","We have built-in models, standard components, mock data, hot module reloading, state management, i18n, global router, etc.\nYou can continue exploring other documents for more details on those topics."]],meta:{order:0,title:"Getting Started",type:"Introduction",filename:"docs/getting-started.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Foreword",title:"Foreword"},"Foreword"]],["li",["a",{className:"bisheng-toc-h2",href:"#Who-are-using",title:"Who are using"},"Who are using"]],["li",["a",{className:"bisheng-toc-h2",href:"#Preparation",title:"Preparation"},"Preparation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Installation",title:"Installation"},"Installation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Scaffolding",title:"Scaffolding"},"Scaffolding"]],["li",["a",{className:"bisheng-toc-h2",href:"#Development",title:"Development"},"Development"]]]}}});