import basePage from "./basePage";
export default{

    //Elements

    startButton(){
        return basePage.findElement("#startStopButton");   
    },

    progressBar(){
        return basePage.findElementWithWait("#progressBar",30000);
    },

    resetButton(){
        return basePage.findElement("#resetButton");
    },

    //Actions

    clickStartButton(){
        this.startButton()
            .click();
    },

    waitUntilProgressBarIsFull(){
        this.progressBar()
            .should("have.text","100%",{timeout:30000});
    },

    validateResetButtonText(){
        this.resetButton()
            .should("have.text","Reset");
    }

}