const Router = require('nextjs-dynamic-routes')

const router = new Router()

const list = [
    { name: 'post', pattern: '/posts/:id',page:"/post" },
    { name: 'user', pattern: '/users/:id',page:'/user' },
    {
        name: 'about',
        pattern: '/abouts',
        page: '/about'
    }
]

list.map((item,index)=>{
    router.add({name:item.name,pattern:item.pattern,page:item.page})
})

module.exports = router