import basePage from "../pages/basePage"
import brokenImagePage from "../pages/brokenImagePage";
import homePage from "../pages/homePage";

describe("Interact with Broken images",()=>{

    beforeEach("Access routine",()=>{
        basePage.visitDefaultUrl();
        homePage.navigateToBrokenLinksImages();
    })

    it("Veify broken and valid images",()=>{
        brokenImagePage.validadeValidImage();
        brokenImagePage.valitadeBrokenImage();
    })
})