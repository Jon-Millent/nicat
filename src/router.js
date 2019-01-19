
// 定义格式，类vue的格式

let Router = function () {

}

export default new Router({

  routes: [
    {
      path: '/',
      component(resolve){
        require(['./views/index'], resolve)
      },
      media: {
        title: '',
        description: ''
      }
    }
  ]

})
