import basePage from "./basePage"

export default{

    //Elements

    validImage(){

        const element = 'div > img[src="/images/Toolsqa.jpg"]'
        return element;
    },

    brokenImage(){

        const element = 'img[src="/images/Toolsqa_1.jpg"]'
        return element 
    },

    //Actions

    valitadeBrokenImage(){
        basePage.validadeImageSize(this.brokenImage(),"not.be.enabled",0,0)
    },

    validadeValidImage(){
        basePage.validadeImageSize(this.validImage(),"be.visible",347,100)
    }
}