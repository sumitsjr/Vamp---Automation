///<reference types="Cypress" />


describe("US 4 - Content Campaign - Verify Social media bars and performance estimates are not displayed in Header", () => {

    it(" Open Vamp - Create quote page", () => {

        cy.visit("https://vamp.vampdashstaging.com/campaign/create/quote");
        cy.get(':nth-child(1) > .cshnUt > .fWVOjf > .sc-dIUggk > :nth-child(2) > .childrenWrapper > .kCpdp > .jXBclO > .sc-eCssSg > .sc-hKgILt')
            .contains('Content').click();

    })
})

describe("Verify Social media header and performance estimates are hidden for Content Campaign", () => {

    it(" Social media header should not be displayed", () => {

        cy.get('.sc-bdfBwQ > [data-cy=percentage-bar]').should('not.exist');
    })

   //[data-cy=performance-stats-container] > :nth-child(1,2,3) are used as placeholders for Custom Images, or  & Custom videos , thus they have been removed from check
    it(" Social Audience PE should not be displayed", () => {
        // Social Audience
        cy.get(':nth-child(1) > .incGBy').contains('Social Audience').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-socialAudience]').should('not.exist');
    })

    it(" Impressions PE should not be displayed", () => {
        // Impressions
        cy.get(':nth-child(2) > .incGBy').contains('Impressions').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-impressions]').should('not.exist');
    })

    it("Unique Reach PE should not be displayed", () => {
        // Unique Reach
        cy.get(':nth-child(3) > .incGBy').contains('Unique Reach').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-reach]').should('not.exist');
    })
    
    it("Engagements PE should not be displayed", () => {
        // Engagements
        cy.get('[data-cy=performance-stats-container] > :nth-child(4)').should('not.exist');
        cy.get(':nth-child(4) > .incGBy').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-engagement]').should('not.exist');
    })
    
    it("Cost Per Engagement PE should not be displayed", () => {
        //Cost Per Engagement
        cy.get('[data-cy=performance-stats-container] > :nth-child(5)').should('not.exist');
        cy.get(':nth-child(5) > .incGBy').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-cpe]').should('not.exist');
    })

    it("Cost Per 1,000 Impressions PE should not be displayed", () => {
        //Cost Per 1,000 Impressions
        cy.get('[data-cy=performance-stats-container] > :nth-child(6)').should('not.exist');
        cy.get(':nth-child(6) > .incGBy').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-cpm]').should('not.exist');
    })

    it("Creators PE should not be displayed", () => {
        //Creators
        cy.get('[data-cy=performance-stats-container] > :nth-child(7)').should('not.exist');
        cy.get(':nth-child(7) > .incGBy').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-talent]').should('not.exist');
    })

    it("Content created PE should not be displayed", () => {
        //Content created
        cy.get('[data-cy=performance-stats-container] > :nth-child(8)').should('not.exist');
        cy.get(':nth-child(8) > .incGBy').should('not.exist');
        //Range
        cy.get('[data-cy=performance-stat-content]').should('not.exist');
    })
})

describe("Verify Social media objectives and channel are hidden in Content Plan", () => {

    it("Obejective widgets should not be displayed", () =>{
        //Objective
        cy.get('.fWVOjf > :nth-child(2) > :nth-child(1) > .bDULZC').should('not.exist');
        cy.get(':nth-child(2) > :nth-child(1) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(2) > :nth-child(2) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(2) > :nth-child(3) > .childrenWrapper > .kCpdp').should('not.exist');
    })

    it("Social media widgets should not be displayed", () => {
        //Social media widgets
        cy.get(':nth-child(3) > :nth-child(3) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(3) > :nth-child(2) > .childrenWrapper > .kCpdp').should('not.exist');
        cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').should('not.exist');
    })

    it("Followers bar section should not be displayed", () => {
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

describe("Verify Content Campaign shows the estimates for Image and Video content", () => {

    it("Custom Images should be displayed", () =>{
        //Custom Images
        cy.get('[data-cy=performance-stats-container] > :nth-child(1)');
        cy.get(':nth-child(1) > .incGBy').contains('Custom Images');
        //Image Count
        cy.get('[data-cy=performance-stat-imageContent]');
    })

    it("Custom Images should be displayed", () =>{
        //Custom Images
        cy.get('[data-cy=performance-stats-container] > :nth-child(2)');
        cy.get(':nth-child(3) > .incGBy').contains('Custom Videos');
        //Image Count
        cy.get('[data-cy=performance-stat-videoContent]');
    })    
    
})