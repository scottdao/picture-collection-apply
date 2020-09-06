export const routes =   [
    {
      path:"/",
      component:'@/login/index'
    },
    {
      path: '/index',
      component: '@/layouts/index',
      routes:[
        {
          path:"./",
          component:"@/pages/index"
        },
        {
          component:"404"
        }
      ]
    },
    {
      component:"404"
    }
]
