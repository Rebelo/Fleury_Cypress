class UnityPage{

    //------Getters:

    getDetailsFirstUnity(){
        return cy.get('.ver-detalhes').first();
    }
    
    getLabelFirstUnity(){
        return cy.get('h3[class^="typographycomponentstyle"]').first();
    }

    getDropDownBoxFacilidades(){
        return cy.get('#checkoox-select-facilities');
    }

    getCheckboxesFacilidades(){
        return cy.get('div[class^="checkbox-selectcomponentstyle__CheckboxSelectScrollStyled"] > div[class^="checkbox"]');
    }


    
    //------Actions:

    visit(){
        cy.visit("https://www.fleury.com.br/unidades");
    }

    //select all the given "facilidades" checkboxes, inside the DropDown
    selectFilterFacilidade(facilidades){

        //to open the DropDown
        this.getDropDownBoxFacilidades().click();

        //Search by the passed facilidades and click in checkBoxes
        facilidades.forEach((item) => {
            this.getCheckboxesFacilidades().contains(item).click();
        });
    }
}

export default new UnityPage();