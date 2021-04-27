///<reference types="Cypress" />


describe("US 2 - Verify Save Quote - Influencer", () => {

  it(" Open Vamp - Create quote page", () => {

    cy.visit("https://vamp.vampdashstaging.com/campaign/create/quote");
    cy.contains('Influencer').click();

  })

  it("Required fields validation message check - Saving Incomplete Campaign details", () => {

    //Clear Budget & Product/Gift value field
    cy.get('.kvPGEK > .jXBclO > .sc-fubCfw').clear();
    cy.get('.gdbLrW > .jXBclO > .sc-fubCfw').clear();
    cy.contains('Save quote').click();

    //Verify Required message are displayed on all the fields

    //Budget - Currency
    cy.get('.dDrNpr > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Budget - Amt
    cy.get('.kvPGEK > [data-cy=input-error]').contains('This value is required');

    //Product/Gift value
    cy.get('.bmOZbr > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //How will you supply the product to the creator?
    cy.get('.ejanri > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Age
    cy.get('.dzSwvm > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Gender
    cy.get('.jQrgUF > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Location
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');

    // social channel
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');
    

  })

  it("Data - Currency & Amount field", () => {
    
    cy.get('.kvPGEK > .jXBclO > .sc-fubCfw').type("7000");
    cy.get('#select-currencyId > .react-select__control > .react-select__value-container').type('AUD{enter}{enter}');
    cy.contains('Save quote').click();
    
   
    //Product/Gift value
    cy.get('.bmOZbr > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //How will you supply the product to the creator?
    cy.get('.ejanri > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Age
    cy.get('.dzSwvm > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Gender
    cy.get('.jQrgUF > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Location
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');

    // social channel
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');
  })

  
  it("Product/Gift value field", () => {
     
    cy.get('.gdbLrW > .jXBclO > .sc-fubCfw').type("200");
    cy.contains('Save quote').click();

    //How will you supply the product to the creator?
    cy.get('.ejanri > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Age
    cy.get('.dzSwvm > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Gender
    cy.get('.jQrgUF > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Location
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');

    // social channel
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');
  })

  it("How will you supply the product to the creator? field", () => {
     
    cy.get('#select-productDistributionType > .react-select__control > .react-select__value-container').type("The product will be shipped to the creator{enter}{enter}");
    cy.contains('Save quote').click();

        //Age
    cy.get('.dzSwvm > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Gender
    cy.get('.jQrgUF > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Location
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');

    // social channel
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');
  })

  it("Age field", () => {
     
    cy.get('#select-desiredAgeRanges > .react-select__control').type("25-35{enter}{enter}");
    cy.contains('Save quote').click();

    //Gender
    cy.get('.jQrgUF > .gdbLrW > [data-cy=input-error]').contains('This value is required');

    //Location
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');

    // social channel
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');
  })

  it("Gender field", () => {
     
    cy.get('#select-desiredGenders > .react-select__control').type('All{enter}{enter}');
    cy.contains('Save quote').click();

    //Location
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');

    // social channel
    cy.get('.fWVOjf > :nth-child(3) > :nth-child(1) > [data-cy=input-error]').contains('This value is required');
  })

  it("Location", () => {
     
    cy.get('#select-desiredLocation > .react-select__control > .react-select__value-container').type('Australia{enter}').type('Japan{enter}');
    cy.contains('Save quote').click();
    cy.reload(true);
    cy.get('.kvPGEK > .jXBclO > .sc-fubCfw').clear();

  })

  it("Renter data into required fields", () => {
    
    cy.get('.kvPGEK > .jXBclO > .sc-fubCfw').type("7000");
    cy.get('#select-currencyId > .react-select__control > .react-select__value-container').type('AUD{enter}');
    cy.get('.gdbLrW > .jXBclO > .sc-fubCfw').clear();
    cy.get('.gdbLrW > .jXBclO > .sc-fubCfw').type("200");
    cy.get('#select-productDistributionType > .react-select__control > .react-select__value-container').type("The product will be shipped to the creator{enter}{enter}");
    cy.get('#select-desiredAgeRanges > .react-select__control').type("25-35{enter}");
    cy.get('#select-desiredGenders > .react-select__control').type('All{enter}');
    cy.get('#select-desiredLocation > .react-select__control > .react-select__value-container').type('Australia{enter}').type('Japan{enter}');

    cy.get('.bsQnQg > .PcUGH > .jXBclO > .fiEAxu > .cNvSrh > .sc-hKgILt > .StyledIconBase-ea9ulj-0').click();

    cy.get(':nth-child(3) > :nth-child(3) > .childrenWrapper > .kCpdp').contains('YouTube (Beta)').click();
    cy.get(':nth-child(3) > :nth-child(2) > .childrenWrapper > .kCpdp').contains('TikTok (Beta)').click();
    cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').contains('Instagram').click();

    cy.contains('Save quote').click();
	
  })

  it("Verify Save modal required fields", () => {
   
    cy.get('.dialog-popup__wrapper-btns > .bumTBh').click();
    cy.get(':nth-child(1) > [data-cy=input-error]').contains('This value is required');
    cy.get(':nth-child(2) > [data-cy=input-error]').contains('This value is required');
    cy.get('.dialog-popup__wrapper-btns > .DlUtN').click();

    
  })
  
  it("Verify Save Quote", () => {

    cy.contains('Save quote').click();
    cy.get('form > :nth-child(1) > .jXBclO > .sc-fubCfw').type('US 2 - Verify Save Quote');
    cy.get(':nth-child(2) > .jXBclO > .sc-fubCfw').type('shk.sumit@gmail.com');
    cy.get('.dialog-popup__wrapper-btns > .bumTBh').click();
    
  }) 
 
 
})