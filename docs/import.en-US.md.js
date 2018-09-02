webpackJsonp([68],{1736:function(n,s){n.exports={content:["article",{},["h2","Introduce Dependencies"],["p","Enter the following command at the terminal to complete the installation:"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> react-quill --save'},["code","$ npm install react-quill --save"]],["blockquote",["p","Adding the ",["code","--save"]," parameter automatically adds dependencies to package.json."]],["h2","Use"],["p","Directly paste the code:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification<span class="token punctuation">,</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactQuill <span class="token keyword">from</span> <span class="token string">\'react-quill\'</span><span class="token punctuation">;</span> \n<span class="token keyword">import</span> <span class="token string">\'react-quill/dist/quill.snow.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NewPage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'test\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  prompt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'We got value:\'</span><span class="token punctuation">,</span>\n      description<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Rich</span> <span class="token attr-name">text</span> <span class="token attr-name">editor"</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactQuill</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>prompt<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Prompt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import React from 'react';\nimport { Button, notification, Card } from 'antd';\nimport ReactQuill from 'react-quill'; \nimport 'react-quill/dist/quill.snow.css';\n\nexport default class NewPage extends React.Component {\n  state = {\n    value: 'test',\n  };\n\n  handleChange = (value) => {\n    this.setState({\n      value,\n    })\n  };\n\n  prompt = () => {\n    notification.open({\n      message: 'We got value:',\n      description: <span dangerouslySetInnerHTML={{ __html: this.state.value }}></span>,\n    });\n  };\n\n  render() {\n    return (\n      <Card title=\"Rich text editor\">\n        <ReactQuill value={this.state.value} onChange={this.handleChange} />\n        <Button style={{ marginTop: 16 }} onClick={this.prompt}>Prompt</Button>\n      </Card>\n    );\n  }\n}"]],["p",["img",{alt:"Rich text",src:"https://gw.alipayobjects.com/zos/rmsportal/rHQRmMxAbSOCsEFungwd.png"}]],["p","This successfully introduced a rich text component. There are several points worth noting:"],["ul",["li",["p","import requires attention to the data structure exposed by the component;"]],["li",["p","Some components require additional styles, such as this one."]]]],meta:{order:8,title:"Import Module",type:"Introduction",filename:"docs/import.en-US.md"},description:["section",["p","In addition to the antd components and the built-in business components of the scaffold, sometimes we need to introduce other external modules. Here we introduce the rich text component ",["a",{title:null,href:"https://www.npmjs.com/package/react-quill"},"react-quill"]," as an example."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Introduce-Dependencies",title:"Introduce Dependencies"},"Introduce Dependencies"]],["li",["a",{className:"bisheng-toc-h2",href:"#Use",title:"Use"},"Use"]]]}}});