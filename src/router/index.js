import { NiCatRouter } from '../core'

import IndexPage from '../views/index'

export default new NiCatRouter({

    routes: [
        {
            path: '/',
            name: '首页',
            component: IndexPage
        }
    ]

})