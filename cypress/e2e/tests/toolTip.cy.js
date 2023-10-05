import basePage from "../pages/basePage";
import homePage from "../pages/homePage";
import toolTipPage from "../pages/toolTipPage";

describe("Interact with toolTip elements", ()=>{

    beforeEach("Access routine",()=>{
        basePage.visitDefaultUrl();
        homePage.navigateToToolTip();
    })
    it("Verify the ToolTip text",()=>{

        toolTipPage.hoverButton();
        toolTipPage.validateToolTipText();
    })
})