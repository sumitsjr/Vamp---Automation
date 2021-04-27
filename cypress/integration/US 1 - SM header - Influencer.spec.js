///<reference types="Cypress" />


describe("US 1 - Verify Social header - Influencer", () => {
  //Visiting website

  it("US 1 - Open Vamp - Create quote page", () => {

    cy.visit("https://vamp.vampdashstaging.com/campaign/create/quote");
    cy.contains('Influencer').click();

  })


  it("Verify display header - Campaign Performance Estimate and breakdown of content", () => {

    // Enter required field
    cy.get('#select-currencyId > .react-select__control').type('AUD{enter}{enter}');

    cy.get('.kvPGEK > .jXBclO > .sc-fubCfw').clear();
    cy.get('.kvPGEK > .jXBclO > .sc-fubCfw').type('5000');
    cy.get('#select-desiredLocation > .react-select__control > .react-select__value-container').type('Australia{enter}');
   

  })

  it("Verify Instagram header bar", () => {
    //Checking individual header bar for Instagram
    cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').contains('Instagram').click();
    cy.get('.gGsdkh > .sc-hKgILt').contains('Instagram');
   
  })

  it("Verify Tik Tok header bar", () => {
    
    //Checking individual header bar for TikTok
    cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').contains('Instagram').click();
    cy.get(':nth-child(3) > :nth-child(2) > .childrenWrapper > .kCpdp').contains('TikTok (Beta)').click();
    cy.get('.btpzUd > .sc-hKgILt').contains('TikTok (Beta)');

  })

  it("Verify Youtube header bar", () => {
    
    //Checking individual header bar for Youtube
    cy.get(':nth-child(3) > :nth-child(2) > .childrenWrapper > .kCpdp').contains('TikTok (Beta)').click();
    cy.get(':nth-child(3) > :nth-child(3) > .childrenWrapper > .kCpdp').contains('YouTube (Beta)').click();
    cy.get('.eXkGVW > .sc-hKgILt').contains('YouTube (Beta)');

  })

  it("Verify All Social media header", () => {
    
    //Checking all social media header bar for Instagram, TikTok & Youtube
    cy.get(':nth-child(3) > :nth-child(2) > .childrenWrapper > .kCpdp').contains('TikTok (Beta)').click();
    cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').contains('Instagram').click();
    cy.get('.igPOLY > .sc-hKgILt').contains('Instagram');
    cy.get('.dSTvOY > .sc-hKgILt').contains('TikTok (Beta)');
    cy.get('.kRlifX > .sc-hKgILt').contains('YouTube (Beta)');
    cy.get('#select-currencyId > .react-select__control').type('AUD{enter}{enter}');

  })
  
})

describe("Verify performance estimates fields are showing for Influencer", () => {

  it(" Social media header should be displayed", () => {

    cy.get('.sc-bdfBwQ > [data-cy=percentage-bar]');
  })

  //[data-cy=performance-stats-container] > :nth-child(1,2,3) are used as placeholders for Custom Images, or  & Custom videos , thus they have been removed from check
  it(" Social Audience PE should be displayed", () => {
    // Social Audience
    cy.get(':nth-child(1) > .incGBy').contains('Social Audience');
    //Range
    cy.get('[data-cy=performance-stat-socialAudience]');
  })

  it(" Impressions PE should be displayed", () => {
    // Impressions
    cy.get(':nth-child(2) > .incGBy').contains('Impressions');
    //Range
    cy.get('[data-cy=performance-stat-impressions]');
  })

  it("Unique Reach PE should be displayed", () => {
    // Unique Reach
    cy.get(':nth-child(3) > .incGBy').contains('Unique Reach');
    //Range
    cy.get('[data-cy=performance-stat-reach]');
  })

  it("Engagements PE should be displayed", () => {
    // Engagements
    cy.get('[data-cy=performance-stats-container] > :nth-child(4)');
    cy.get(':nth-child(4) > .incGBy');
    //Range
    cy.get('[data-cy=performance-stat-engagement]');
  })

  it("Cost Per Engagement PE should be displayed", () => {
    //Cost Per Engagement
    cy.get('[data-cy=performance-stats-container] > :nth-child(5)');
    cy.get(':nth-child(5) > .incGBy');
    //Range
    cy.get('[data-cy=performance-stat-cpe]');
  })

  it("Cost Per 1,000 Impressions PE should be displayed", () => {
    //Cost Per 1,000 Impressions
    cy.get('[data-cy=performance-stats-container] > :nth-child(6)');
    cy.get(':nth-child(6) > .incGBy');
    //Range
    cy.get('[data-cy=performance-stat-cpm]');
  })

  it("Creators PE should be displayed", () => {
    //Creators
    cy.get('[data-cy=performance-stats-container] > :nth-child(7)');
    cy.get(':nth-child(7) > .incGBy');
    //Range
    cy.get('[data-cy=performance-stat-talent]');
  })

  it("Content created PE should be displayed", () => {
    //Content created
    cy.get('[data-cy=performance-stats-container] > :nth-child(8)');
    cy.get(':nth-child(8) > .incGBy');
    //Range
    cy.get('[data-cy=performance-stat-content]');
  })
})