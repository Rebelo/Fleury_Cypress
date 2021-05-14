class HomePage{

    

    //------Getters:

    getUnidadeMenu(){
        return cy.get('#button-title-desktop-header.unidades');
    }


    //------Actions:
    visit(){
        cy.visit("https://www.fleury.com.br/");
    }

}

export default new HomePage();