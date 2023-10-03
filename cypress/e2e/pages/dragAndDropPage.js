import basePage from "./basePage";


export default{

    //Elements

    dragableElement(){
        return basePage.findElement("#draggable");
    },

    dropableElement(){
        const element = "#droppable > p"
        return element;
    },

    dropableTextElement(){
        return  basePage.findElement(".drop-box.ui-droppable.ui-state-highlight");
    },

    //Actions

    dragAndDropElement(){

        this.dragableElement()   
            .drag(this.dropableElement(),{force:true});
        
        this.dropableTextElement()
            .should("contain","Dropped!");
    
        basePage.checkBackGroundColor("#droppable",70,130,180)

    }
}