
import baseConfig from '../../config/page.config'

class XxvRender {
  constructor(inputConfig){
    this.pageConfig = Object.assign(baseConfig.pageConfig, inputConfig || {})
  }

  render(renderFunction){

  }
}

export default XxvRender