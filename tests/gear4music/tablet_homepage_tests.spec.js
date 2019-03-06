// Tablet screen width
  
// Change viewport size to 768x1024 (iPad tablet), load home page and dismiss cookie banner
describe('load home page with a 768x1024 (tablet) viewport', function() {
  beforeEach(function() {
    cy.viewport(768, 1024);
    cy.visit('www.gear4music.com');
    cy.setCookie('user_device_preference', 'tablet');
    cy.contains('Dismiss').click();
  });

// Check that the right hand side clearance banner does not display on tablet
  it('right hand promo banner does not exist', function(){
    cy.get('.promo-sidebar-brands').should('not.be.visible');
  });

});  