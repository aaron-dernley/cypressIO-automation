class Global {

  get bannerCookieUse() {return cy.get('.g4m-btn-tertiary');}

  closeCookieBanner(){
    return this.bannerCookieUse.click();
  }

}

module.exports = new Global();