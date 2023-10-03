import homePage from "../pages/homePage"
import basePage from "../pages/basePage"
import dragAndDropPage from "../pages/dragAndDropPage"

describe('Interact with drag and drop elements ',()=> {

    beforeEach("Access routine",()=>{
        basePage.visitDefaultUrl();
        homePage.navigateToDragAndDrop();
    })
    it("Simple drag and drop",()=>{
        dragAndDropPage.dragAndDropElement();
    })

})