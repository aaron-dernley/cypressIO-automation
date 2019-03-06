class Header {
  
  get inputSearch() {return cy.get('#srch-str');}
  get buttonSearch() {return cy.get('#header-search-button');}

  search(searchTerm){
    this.inputSearch.type(searchTerm);
    return this.buttonSearch.click();
  }

  dietSearch(searchTerm){
    this.inputSearch.type(searchTerm);
    cy.wait(5000);
    return this.buttonSearch.click();
  }

}

module.exports = new Header();