class NiCatView {
    constructor(input){
        this.mainConfig = input;
        this.init();
    }

    init(){
        this.mainConfig.controller();
    }
}

export default NiCatView;