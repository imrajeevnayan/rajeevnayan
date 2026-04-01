import{r as n,j as e,m as u}from"./index-BK-m8dsZ.js";const p="8fd805a4-a4e2-417e-8d1a-a004aa665f45",f=["imrajeevnayan.hashnode.dev","solving-array-ques.hashnode.dev"],j=()=>{const[x,h]=n.useState([]),[d,c]=n.useState(!0),[i,o]=n.useState(null),g=async t=>{var a,l,m;return((m=(l=(a=(await(await fetch("https://gql.hashnode.com/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify({query:`
          {
            publication(host: "${t}") {
              posts(first: 10) {
                edges {
                  node {
                    id
                    title
                    brief
                    slug
                    publishedAt
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `})})).json()).data)==null?void 0:a.publication)==null?void 0:l.posts)==null?void 0:m.edges.map(b=>({...b.node,publicationHost:t})))||[]};return n.useEffect(()=>{(async()=>{c(!0),o(null);try{const s=(await Promise.all(f.map(a=>g(a)))).flat();s.length===0?o("No blog posts found."):(s.sort((a,l)=>new Date(l.publishedAt).getTime()-new Date(a.publishedAt).getTime()),h(s))}catch{o("Failed to fetch blog posts")}c(!1)})()},[]),e.jsx("section",{id:"blog",className:"py-20 bg-transparent transition-colors duration-300",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs(u.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",children:"Technical Writing"}),e.jsx("div",{className:"w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Sharing my learning journey and technical insights with the community."})]}),d&&e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:"w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}),i&&e.jsx("div",{className:"text-center text-red-500",children:i}),!d&&!i&&e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:x.map((t,r)=>e.jsxs(u.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:r*.1},viewport:{once:!0},className:"group glass-panel p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",children:t.title}),e.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-blue-500 rounded-full"}),new Date(t.publishedAt).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 line-clamp-3 mb-4",children:t.brief})]}),e.jsxs("div",{className:"mt-auto",children:[t.tags.length>0&&e.jsx("div",{className:"mb-4 flex flex-wrap gap-2",children:t.tags.slice(0,3).map((s,a)=>e.jsx("span",{className:"text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium",children:s.name},a))}),e.jsx("a",{href:`https://${t.publicationHost}/${t.slug}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline group-hover:translate-x-1 transition-transform",children:"Read Full Article →"})]})]},t.id))})]})})};export{j as default};
