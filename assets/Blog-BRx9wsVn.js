import{r as i,j as e,m as c}from"./index-xxtUQnap.js";const m="8fd805a4-a4e2-417e-8d1a-a004aa665f45",b=["imrajeevnayan.hashnode.dev","solving-array-ques.hashnode.dev"],y=()=>{const[u,g]=i.useState([]),[n,d]=i.useState(!0),[o,r]=i.useState(null),h=async t=>(await(await fetch("https://gql.hashnode.com/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({query:`
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
        `})})).json()).data?.publication?.posts?.edges.map(s=>({...s.node,publicationHost:t}))||[];return i.useEffect(()=>{(async()=>{d(!0),r(null);try{const a=(await Promise.all(b.map(s=>h(s)))).flat();a.length===0?r("No blog posts found."):(a.sort((s,x)=>new Date(x.publishedAt).getTime()-new Date(s.publishedAt).getTime()),g(a))}catch{r("Failed to fetch blog posts")}d(!1)})()},[]),e.jsx("section",{id:"blog",className:"py-20 bg-white dark:bg-gray-900",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs(c.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"text-center mb-12",children:[e.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Daily Blog"}),e.jsx("div",{className:"w-20 h-1 bg-blue-600 mx-auto rounded-full"})]}),n&&e.jsx("div",{className:"text-center text-gray-500",children:"Loading blog posts..."}),o&&e.jsx("div",{className:"text-center text-red-500",children:o}),!n&&!o&&e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map((t,l)=>e.jsxs(c.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:l*.12},viewport:{once:!0},className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow",children:[e.jsx("h3",{className:"text-2xl font-semibold text-blue-600 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-500 mb-2",children:new Date(t.publishedAt).toLocaleDateString()}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:t.brief}),t.tags.length>0&&e.jsx("div",{className:"mb-3 flex flex-wrap gap-2",children:t.tags.map((a,s)=>e.jsx("span",{className:"text-xs bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 px-2 py-1 rounded-full",children:a.name},s))}),e.jsx("a",{href:`https://${t.publicationHost}/${t.slug}`,target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition",children:"Read More"})]},t.id))})]})})};export{y as default};
