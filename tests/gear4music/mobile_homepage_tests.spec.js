// Mobile screen width

// Set a cookie to load mobile site, load the homepage at iPhone 6 res and dismiss cookie banner
describe('Set Mobile width and load Gear4music mobile home page', function() {
  beforeEach(function(){
    cy.visit('www.gear4music.com');
    cy.clearCookies();
    cy.setCookie('user_device_preference', 'mobile', {domain : ".gear4music.com"});
    cy.reload();
    cy.viewport('iphone-6');
    cy.contains('Dismiss').click();
  });

// Check for the mobile burger menu  
  it('Check for the mobile menu icon',function(){
    cy.get('.hamburger-menu-icon').should('be.visible');
  });
  
});