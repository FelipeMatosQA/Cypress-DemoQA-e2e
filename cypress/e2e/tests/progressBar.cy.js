import basePage from "../pages/basePage";
import homePage from "../pages/homePage";
import progressBarPage from "../pages/progressBarPage";

describe("Interact with progress bar elements",()=>{

    beforeEach("Access routine",()=>{
        basePage.visitDefaultUrl();
        homePage.navigateToProgressBar();
    })

    it.only("Wait untill progress bar is 100%",()=>{

      progressBarPage.clickStartButton();
      progressBarPage.waitUntilProgressBarIsFull();
      progressBarPage.validateResetButtonText();
        
     }); 
         
    })

    


    