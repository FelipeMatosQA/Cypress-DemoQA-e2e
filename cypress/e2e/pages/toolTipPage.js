import basePage from "./basePage"

export default{

    //elements

    toolTipButton(){
        return basePage.findElement("#toolTipButton");
    },

    buttonToolTip(){
        return basePage.findElement("#buttonToolTip");
    },

    //Actions

    hoverButton(){
        this.toolTipButton().trigger("mouseover");
    },

    validateToolTipText(){
        this.buttonToolTip().should("have.text","You hovered over the Button")
    }

}


