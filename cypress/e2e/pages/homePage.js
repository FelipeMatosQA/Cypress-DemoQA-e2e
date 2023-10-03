import { should } from "chai";
import basePage from "./basePage";
import '@4tw/cypress-drag-drop';

export default{

    //Elements

    

    elementDroppable(){
        return basePage.findElementByClassAndContent(".btn.btn-light","Droppable")
    },
    elementToolTip(){
        return basePage.findElementByClassAndContent(".btn.btn-light","Tool Tips")
    },
    elementPraticeForms(){
        return basePage.findElementByClassAndContent(".btn.btn-light","Practice Form")
    },
    elementProgressBar(){
        return basePage.findElementByClassAndContent(".btn.btn-light","Progress Bar")
    },
    elementWebTables(){
        return basePage.findElementByClassAndContent(".btn.btn-light","Web Tables")
    },
    elementBrokenLinksImages(){
        return basePage.findElementByClassAndContent(".btn.btn-light","Broken Links - Images")
    },
    intertationsCardElement(){
        return basePage.findElementByClassAndContent(".card-body","Interactions")
    },
    widgetsCardElement(){
        return basePage.findElementByClassAndContent(".card-body","Widgets")
    },
    formsCardElement(){
        return basePage.findElementByClassAndContent(".card-body","Forms")
    },
    elementsCardElement(){
        return basePage.findElementByClassAndContent(".card-body","Elements")
    },
    dropableHeaderElement(){
        return basePage.findElementByClassAndContent(".main-header","Droppable")
    },
    tollTipHeaderElement(){
        return basePage.findElementByClassAndContent(".main-header","Tool Tips")
    },
    formsHeaderElement(){
        return basePage.findElementByClassAndContent(".main-header","Practice Form")
    },
    progressBarHeaderElement(){
        return basePage.findElementByClassAndContent(".main-header","Progress Bar")
    },

    webTablesHeaderElement(){
        return basePage.findElementByClassAndContent(".main-header","Web Tables")
    },
    brokenLinksImagesHeaderElement(){
        return basePage.findElementByClassAndContent(".main-header","Broken Links - Images")
    },


    //Actions

    clickWidgets(){
        this.widgetsCardElement()   
            .click();
        cy.url()
            .should("include", "/widgets");   
    },

    clickForms(){
        this.formsCardElement()   
            .click();
        cy.url()
            .should("include", "/forms");   
    },
    

    clickElements(){
        this.elementsCardElement()
            .click();
        cy.url()
            should("include","/elements");   
    },
 
    clickInteractions(){
        
        this.intertationsCardElement()
            .click();
        cy.url()
            .should("include", "/interaction"); 
    },

    clickWebTables(){
        this.elementWebTables()
            .click();
        cy.url()
            .should("include","/webtables");
        this.webTablesHeaderElement()
            .should("be.visible"); 

    },
    clickBrokenLinksImages(){
        this.elementBrokenLinksImages()
            .click();
        cy.url()
            .should("include","/broken") ; 
        this.brokenLinksImagesHeaderElement()
            should("be.visible");    
    },

    clickDroppable(){
        this.elementDroppable()
            .click();
        cy.url()
            .should("include", "/droppable");
        this.dropableHeaderElement()
            .should("be.visible");
    },

    clickToolTip(){
        this.elementToolTip()
            .click();
        cy.url()
            .should("include", "/tool-tips");
        this.tollTipHeaderElement()
            .should("be.visible");
    },
    clickPraticeForms(){
        this.elementDroppable()
            .click();
        cy.url()
            .should("include", "/automation-practice-form");
        this.formsHeaderElement()
            should("be.visible")
    },

    navigateToDragAndDrop(){
        this.clickInteractions();
        this.clickDroppable();      
    },

    clickProgressBar(){
        this.elementProgressBar()
            .click();

        cy.url()
            .should("include", "/progress-bar")

        this.progressBarHeaderElement()
            .should("be.visible");    
    },

    navigateToProgressBar(){
        this.clickWidgets();
        this.clickProgressBar();
    },

    navigateToWebTables(){
        this.clickElements();
        this.clickWebTables();
    },
    
    navigateToBrokenLinksImages(){
        this.clickElements();
        this.clickBrokenLinksImages();
    },

    navigateToToolTip(){
        this.clickWidgets();
        this.clickToolTip();
    },

    navigateToPraticeForm(){
        this.clickForms();
        this.clickPraticeForms();

    }


   
}