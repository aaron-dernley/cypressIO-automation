class Home {

  open(){
    return cy.visit('');
  }

}

module.exports = new Home();