///<reference types="Cypress" />


describe("US 3 - Content Campaign - Verify Content Campaign fields against Influencer fields", () => {

    it(" Open Vamp - Create quote page", () => {
        
        cy.visit("https://vamp.vampdashstaging.com/campaign/create/quote");
        cy.get(':nth-child(1) > .cshnUt > .fWVOjf > .sc-dIUggk > :nth-child(2) > .childrenWrapper > .kCpdp > .jXBclO > .sc-eCssSg > .sc-hKgILt')
        .contains('Content').click();
    
    })

    it("Event Attendance Checkbox should not be displayed", () =>{
        
        //Event Attendance
        cy.get('.jgXwEM > .PcUGH > .jXBclO > .fiEAxu > .sc-hBEYos').should('not.exist');

    })
        
    it("Content Plan field should not be displayed", () =>{
        //Content Plan
        cy.get(':nth-child(5) > .cshnUt > .fWVOjf > .gHyZqX').should('not.exist');
    })

    it("Obejective widgets should not be displayed", () =>{
        //Objective
        cy.get('.fWVOjf > :nth-child(2) > :nth-child(1) > .bDULZC').should('not.exist');
        cy.get(':nth-child(2) > :nth-child(1) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(2) > :nth-child(2) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(2) > :nth-child(3) > .childrenWrapper > .kCpdp').should('not.exist');
    })

    it("Social media widgets should not be displayed", () =>{
        //Select multiple social channels - Social media icons
        cy.get(':nth-child(3) > :nth-child(3) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(3) > :nth-child(2) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').should('not.exist');
    })

    it("Followers bar section should not be displayed", () =>{
        // Followers
        cy.get('.gApNMd').should('not.exist');

        //0-10k
        cy.get(':nth-child(2) > .coXFEQ').should('not.exist');
        cy.get(':nth-child(2) > [data-cy=percentage-bar]').should('not.exist');

        //10-25k
        cy.get(':nth-child(3) > .coXFEQ').should('not.exist');
        cy.get(':nth-child(3) > [data-cy=percentage-bar]').should('not.exist');

        //25-50k
        cy.get(':nth-child(3) > .coXFEQ').should('not.exist');
        cy.get(':nth-child(3) > [data-cy=percentage-bar]').should('not.exist');

        //50-100k
        cy.get(':nth-child(3) > .coXFEQ').should('not.exist');
        cy.get(':nth-child(3) > [data-cy=percentage-bar]').should('not.exist');

        //100k+
        cy.get(':nth-child(3) > .coXFEQ').should('not.exist');
        cy.get(':nth-child(3) > [data-cy=percentage-bar]').should('not.exist');

    })

})

