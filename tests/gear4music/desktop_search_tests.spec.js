const header = require('../../pages/header');
const global = require('../../pages/global');
const homePage = require('../../pages/home');
const plp = require('../../pages/plp');

// Desktop screen width

// Pre-step - clear cookies dismiss cookie banner (for switching from mobile site and vice versa)
describe.only('Search functionality tests', function() {
  beforeEach(function() {
    homePage.open();
    global.closeCookieBanner();
  });
  
  // Enter search term, click the search button and check the URL for search params
  it.skip('complete a search on the homepage', function() {
    header.search('fender guitar'); // enter fender guitar in the search bar and hit enter
    cy.url().should('include', 'search/?str_search_phrase=fender+guitar'); // check URL for search term (case sensitive)
  });
  
  it('performs a search, waits for instant search to load and confirms results are returned', function() {
    const searchTermA = 'red';
    header.dietSearch(searchTermA);
    cy.url().should('include', '?str_search_phrase=' + searchTermA);
    plp.results.should('exist');
  });
  
  it('performs a search, waits for instant seach to load and confirms results aren\'t returned', function () {
    const searchTermB = 'tumeric';
    header.dietSearch(searchTermB);
    cy.url().should('include', '?str_search_phrase=' + searchTermB);
    plp.results.should('not.exist');
  });
}); 