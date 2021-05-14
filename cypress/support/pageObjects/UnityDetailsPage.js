
class UnityDetailsPage{

    //------Getters:

    getMainLabel(){
        return cy.get('h1[class^="typographycomponentstyle"]');
    }

    //------Actions:

    visit(){
        cy.visit("https://www.fleury.com.br/unidades");
    }

    
}

export default new UnityDetailsPage();