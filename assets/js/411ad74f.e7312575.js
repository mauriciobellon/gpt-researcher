"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1909],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),h=r,d=g["".concat(s,".").concat(h)]||g[h]||u[h]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7541:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(8168),r=(a(6540),a(5680));const l={},i="LangGraph",o={unversionedId:"gpt-researcher/langgraph",id:"gpt-researcher/langgraph",isDocsHomePage:!1,title:"LangGraph",description:"LangGraph is a library for building stateful, multi-actor applications with LLMs.",source:"@site/docs/gpt-researcher/langgraph.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/langgraph",permalink:"/docs/gpt-researcher/langgraph",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/langgraph.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Vector Stores",permalink:"/docs/gpt-researcher/vector-stores"},next:{title:"Detailed Report",permalink:"/docs/examples/detailed_report"}},s=[{value:"Use case",id:"use-case",children:[],level:2},{value:"The Multi Agent Team",id:"the-multi-agent-team",children:[],level:2},{value:"How it works",id:"how-it-works",children:[{value:"Architecture",id:"architecture",children:[],level:3},{value:"Steps",id:"steps",children:[],level:3}],level:2},{value:"How to run",id:"how-to-run",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Task.json contains the following fields:",id:"taskjson-contains-the-following-fields",children:[],level:4},{value:"For example:",id:"for-example",children:[],level:4}],level:2},{value:"To Deploy",id:"to-deploy",children:[],level:2},{value:"NextJS Frontend App",id:"nextjs-frontend-app",children:[{value:"Run the NextJS React App with Docker",id:"run-the-nextjs-react-app-with-docker",children:[],level:3},{value:"Run the NextJS React App with NPM",id:"run-the-nextjs-react-app-with-npm",children:[],level:3}],level:2}],p={toc:s},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"langgraph"},"LangGraph"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://python.langchain.com/docs/langgraph"},"LangGraph")," is a library for building stateful, multi-actor applications with LLMs.\nThis example uses Langgraph to automate the process of an in depth research on any given topic."),(0,r.yg)("h2",{id:"use-case"},"Use case"),(0,r.yg)("p",null,"By using Langgraph, the research process can be significantly improved in depth and quality by leveraging multiple agents with specialized skills.\nInspired by the recent ",(0,r.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2402.14207"},"STORM")," paper, this example showcases how a team of AI agents can work together to conduct research on a given topic, from planning to publication."),(0,r.yg)("p",null,"An average run generates a 5-6 page research report in multiple formats such as PDF, Docx and Markdown."),(0,r.yg)("p",null,"Please note: This example uses the OpenAI API only for optimized performance."),(0,r.yg)("h2",{id:"the-multi-agent-team"},"The Multi Agent Team"),(0,r.yg)("p",null,"The research team is made up of 7 AI agents:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Human")," - The human in the loop that oversees the process and provides feedback to the agents."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Chief Editor"),' - Oversees the research process and manages the team. This is the "master" agent that coordinates the other agents using Langgraph.'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Researcher")," (gpt-researcher) - A specialized autonomous agent that conducts in depth research on a given topic."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Editor")," - Responsible for planning the research outline and structure."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Reviewer")," - Validates the correctness of the research results given a set of criteria."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Revisor")," - Revises the research results based on the feedback from the reviewer."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Writer")," - Responsible for compiling and writing the final report."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Publisher")," - Responsible for publishing the final report in various formats.")),(0,r.yg)("h2",{id:"how-it-works"},"How it works"),(0,r.yg)("p",null,"Generally, the process is based on the following stages: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Planning stage"),(0,r.yg)("li",{parentName:"ol"},"Data collection and analysis"),(0,r.yg)("li",{parentName:"ol"},"Review and revision"),(0,r.yg)("li",{parentName:"ol"},"Writing and submission"),(0,r.yg)("li",{parentName:"ol"},"Publication")),(0,r.yg)("h3",{id:"architecture"},"Architecture"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{align:"center",height:"600",src:"https://cowriter-images.s3.amazonaws.com/multi-agents-gptr.png"})),(0,r.yg)("br",{clear:"all"}),(0,r.yg)("h3",{id:"steps"},"Steps"),(0,r.yg)("p",null,"More specifically (as seen in the architecture diagram) the process is as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Browser (gpt-researcher) - Browses the internet for initial research based on the given research task."),(0,r.yg)("li",{parentName:"ul"},"Editor - Plans the report outline and structure based on the initial research."),(0,r.yg)("li",{parentName:"ul"},"For each outline topic (in parallel):",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Researcher (gpt-researcher) - Runs an in depth research on the subtopics and writes a draft."),(0,r.yg)("li",{parentName:"ul"},"Reviewer - Validates the correctness of the draft given a set of criteria and provides feedback."),(0,r.yg)("li",{parentName:"ul"},"Revisor - Revises the draft until it is satisfactory based on the reviewer feedback."))),(0,r.yg)("li",{parentName:"ul"},"Writer - Compiles and writes the final report including an introduction, conclusion and references section from the given research findings."),(0,r.yg)("li",{parentName:"ul"},"Publisher - Publishes the final report to multi formats such as PDF, Docx, Markdown, etc.")),(0,r.yg)("h2",{id:"how-to-run"},"How to run"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install required packages:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n"))),(0,r.yg)("li",{parentName:"ol"},"Update env variables",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY={Your OpenAI API Key here}\nexport TAVILY_API_KEY={Your Tavily API Key here}\n"))),(0,r.yg)("li",{parentName:"ol"},"Run the application:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"python main.py\n")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"To change the research query and customize the report, edit the ",(0,r.yg)("inlineCode",{parentName:"p"},"task.json")," file in the main directory."),(0,r.yg)("h4",{id:"taskjson-contains-the-following-fields"},"Task.json contains the following fields:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"query")," - The research query or task."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"model")," - The OpenAI LLM to use for the agents."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"max_sections")," - The maximum number of sections in the report. Each section is a subtopic of the research query."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"include_human_feedback")," - If true, the user can provide feedback to the agents. If false, the agents will work autonomously."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"publish_formats")," - The formats to publish the report in. The reports will be written in the ",(0,r.yg)("inlineCode",{parentName:"li"},"output")," directory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"source")," - The location from which to conduct the research. Options: ",(0,r.yg)("inlineCode",{parentName:"li"},"web")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"local"),". For local, please add ",(0,r.yg)("inlineCode",{parentName:"li"},"DOC_PATH")," env var."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"follow_guidelines")," - If true, the research report will follow the guidelines below. It will take longer to complete. If false, the report will be generated faster but may not follow the guidelines."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"guidelines")," - A list of guidelines that the report must follow."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"verbose")," - If true, the application will print detailed logs to the console.")),(0,r.yg)("h4",{id:"for-example"},"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "Is AI in a hype cycle?",\n  "model": "gpt-4o",\n  "max_sections": 3, \n  "publish_formats": { \n    "markdown": true,\n    "pdf": true,\n    "docx": true\n  },\n  "include_human_feedback": false,\n  "source": "web",\n  "follow_guidelines": true,\n  "guidelines": [\n    "The report MUST fully answer the original question",\n    "The report MUST be written in apa format",\n    "The report MUST be written in english"\n  ],\n  "verbose": true\n}\n')),(0,r.yg)("h2",{id:"to-deploy"},"To Deploy"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install langgraph-cli\nlanggraph up\n")),(0,r.yg)("p",null,"From there, see documentation ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/langchain-ai/langgraph-example"},"here")," on how to use the streaming and async endpoints, as well as the playground."),(0,r.yg)("h2",{id:"nextjs-frontend-app"},"NextJS Frontend App"),(0,r.yg)("p",null,"The React app (located in ",(0,r.yg)("inlineCode",{parentName:"p"},"frontend")," directory) is our Frontend 2.0 which we hope will enable us to display the robustness of the backend on the frontend, as well."),(0,r.yg)("p",null,"It comes with loads of added features, such as: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a drag-n-drop user interface for uploading and deleting files to be used as local documents by GPTResearcher."),(0,r.yg)("li",{parentName:"ul"},"a GUI for setting your GPTR environment variables."),(0,r.yg)("li",{parentName:"ul"},"the ability to trigger the multi_agents flow via the Backend Module or Langgraph Cloud Host (currently in closed beta)."),(0,r.yg)("li",{parentName:"ul"},"stability fixes"),(0,r.yg)("li",{parentName:"ul"},"and more coming soon!")),(0,r.yg)("h3",{id:"run-the-nextjs-react-app-with-docker"},"Run the NextJS React App with Docker"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Step 1")," - ",(0,r.yg)("a",{parentName:"p",href:"https://docs.gptr.dev/docs/gpt-researcher/getting-started#try-it-with-docker"},"Install Docker"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Step 2")," - Clone the '.env.example' file, add your API Keys to the cloned file and save the file as '.env'")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Step 3")," - Within the docker-compose file comment out services that you don't want to run with Docker.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up --build\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Step 4")," - By default, if you haven't uncommented anything in your docker-compose file, this flow will start 2 processes:"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"the Python server running on localhost:8000"),(0,r.yg)("li",{parentName:"ul"},"the React app running on localhost:3000"))),(0,r.yg)("p",null,"Visit localhost:3000 on any browser and enjoy researching!"),(0,r.yg)("h3",{id:"run-the-nextjs-react-app-with-npm"},"Run the NextJS React App with NPM"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd frontend\nnvm install 18.17.0\nnvm use v18.17.0\nnpm install --legacy-peer-deps\nnpm run dev\n")))}g.isMDXComponent=!0}}]);