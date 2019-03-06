// Desktop screen width

// Home page header tests
describe('Desktop home page header tests', function() {
  beforeEach(function() {
    cy.visit(''); // Go to gear4music site - configured in cypress.json as baseUrl
    cy.contains('Dismiss').click(); // Dismiss the cookie banner
  });

// Check the page title to ensure it contains the correct text
  it('title contains "Gear4music | Shop Music Equipment & Musical Instruments" in the title', function() {
    cy.title().should('contain', 'Gear4music | Shop Music Equipment & Musical Instruments'); // page title in the browser tab
  });

// Check the home page header to ensure header items are visible at full desktop width
  it('desktop home page has visible header items', function() {
    cy.get('.header-logo').should('be.visible'); // Gear4music logo
    cy.get('.header-search').should('be.visible'); // search bar
    cy.get('.header-search-button').should('be.visible'); // search button
    cy.get('.header-trustpilot').should('be.visible'); // trustpilot logo and score
    cy.get('.icon-help-information').should('be.visible'); // help and information icon
    cy.get('.icon-my-account').should('be.visible'); // my account icon
    cy.get('.icon-basket').should('be.visible'); // basket icon is visible
    cy.get('.icon-language').should('be.visible'); // language selector is visible
  });

// Open the country/store switcher and check the flag icons exist
  it('', function() {
    
  });

});