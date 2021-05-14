/// <reference types="Cypress" />

import HomePage from "../../../support/pageObjects/HomePage";
import UnityPage from "../../../support/pageObjects/UnityPage";
import UnityDetailsPage from "../../../support/pageObjects/UnityDetailsPage";
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

let labelValidation = "";

Given('I am in unity page', () => {

    //Go to the home page
    HomePage.visit();

    //Click in the option "Unidades" in top menu 
    HomePage.getUnidadeMenu().click();

});

When('I choose the {string}', (facilities) => {  

    // Split the "facilidades" string sequence to an array
    // Select all of them
    UnityPage.selectFilterFacilidade(facilities.split(","));

});

And('click the first one unity presented in the card grid', () => {

    // get the label of the card and store in a variable to compare after
    UnityPage.getLabelFirstUnity().then($label1 => {
        labelValidation = $label1.text();
    });

    // click in the first one unit
    UnityPage.getDetailsFirstUnity().click();
    
});

Then('the unity datail page is shown, with the same title shown in the grid', () => {

    // To wait the page to charge
    cy.location('pathname', {timeout: 10000}).should('include', '/unidades/');
    
    // Compare the card's label to the detail's page label
    UnityDetailsPage.getMainLabel().invoke("text").should("eq", labelValidation);

});

