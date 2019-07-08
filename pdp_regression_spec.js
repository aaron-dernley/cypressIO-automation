beforeEach( () => {
    cy.server();
});

var regions = ['au']; // will eventually contain other stores, but just au for now

describe('Missguided React PDP', () => {

    context("PDP mobile only tests", () => {
        var viewport = "iphone-6";
        regions.forEach((region) => {
    
            context('Mobile initial page load tests', () => {
                it('the hero image is shown and is selected in the gallery', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="gallery"]').should('be.visible');
                });
                it('the product info section has loaded and has content', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-description"]').should('be.visible').then((productDescription) => {
                        expect(productDescription).to.not.be.empty;
                    });
                });
                it('the add to wishlist button is present', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-add-to-wishlist-button"]').should('be.visible');
                });
                it('the read more button is present and functions correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-read-more-button"]').should('contain', 'read more').and('not.have.text', 'read less').then(() => {
                        cy.get('[data-test="prodInfo-read-more-button"]').click()
                        cy.get('.styles__readMoreText--2ATPU').should('have.css', 'height', '242px');
                    });
                });
                it('the add to bag button is present', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-add-to-bag-button"]').should('be.visible').and('have.text', 'add to bag');
                });
                it('the size guide and delivery & returns links are on the page', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-size-guide"]').should('be.visible').and('have.text', 'size guide');
                    cy.get('[data-test="prodInfo-delivery-and-returns"]').should('be.visible').and('have.text', 'delivery & returns');
                });
                it('the share icon is visible and the contents are not currently showing', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-share-link-mobile"]').should('be.visible')
                    cy.get('[data-test="prodInfo-share-box"]').should('not.be.visible');
                });
            });

            context('Share box', () => {
                context('share link tests', () => {
                    it('should have a mobile whatsapp button present and redirects to whatsapp app ', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.clickShareButton(viewport);
                        cy.get('[data-test="prodInfo-share-whatsapp-link"]').should('be.visible');
                        cy.get('[data-test="prodInfo-share-whatsapp-link"]').should('have.attr', 'href').and('contain', 'whatsapp://send');
                    });
                    it('should have the mobile email share button present and it redirects to mailto', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.clickShareButton(viewport);
                        cy.get('[data-test="prodInfo-share-email-link-mobile"]').should('be.visible');
                        cy.get('[data-test="prodInfo-share-email-link-mobile"]').should('have.attr', 'href').and('contain', 'mailto');
                    });
                });
            });
            context('Shop the look mobile only', () => {
                it('left and right scroll should function correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="shop-this-look-carousel"]').scrollIntoView();
                    cy.get('.styles__productsContainer--3ylvC').should('have.css', 'overflow-x');
                    cy.get('.styles__productsContainer--3ylvC').scrollTo('right', { duration: '2000' });
                    cy.get('.styles__productsContainer--3ylvC div.styles__product--gyQ88:last-child').then((lastProduct) => {
                        expect(lastProduct).to.be.visible;
                    });
                    cy.get('.styles__productsContainer--3ylvC').scrollTo('left', { duration: '2000' });
                    cy.get('.styles__productsContainer--3ylvC div.styles__product--gyQ88:first-child').then((firstProduct) => {
                        expect(firstProduct).to.be.visible;
                    });
                });
            })
        });
    });

    context("PDP desktop only tests", () => {
        var viewport = "macbook-15";
        regions.forEach((region) => {

            context('Desktop initial page load tests', () => {
                it('the hero image is shown and is selected in the gallery', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="gallery"]').should('be.visible');
                    cy.get('[data-test="gallery-thumbnail-1"]').should('be.visible').then((firstImage) => {
                        expect(firstImage).to.have.class('styles__selected--3_99o');
                    })
                });
                it('the product info section has loaded and has content', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-description"]').should('be.visible').then((productDescription) => {
                        expect(productDescription).to.not.be.empty;
                    });
                });
                it('the add to wishlist button is present', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-add-to-wishlist-button"]').should('be.visible');
                });
                it('the read more button is present and functions correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-read-more-button"]').should('contain', 'read more').and('not.have.text', 'read less').then(() => {
                        cy.get('[data-test="prodInfo-read-more-button"]').click();
                        cy.get('.styles__readMoreText--2ATPU').should('have.css', 'height', '242px');
                    });
                });
                it('the add to bag button is present', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-add-to-bag-button"]').should('be.visible').and('have.text', 'add to bag');
                });
                it('the size guide and delivery & returns links are on the page', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-size-guide"]').should('be.visible').and('have.text', 'size guide');
                    cy.get('[data-test="prodInfo-delivery-and-returns"]').should('be.visible').and('have.text', 'delivery & returns');
                });
                it('the share icon is visible and the contents are not currently showing', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-share-link-desktop"]').should('be.visible')
                    cy.get('[data-test="prodInfo-share-box"]').should('not.be.visible');
                });
            
            });
            context('Image zoom', () => { 
                it('should function correctly when clicking on a product image', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="gallery"]').click().should('have.class', 'styles__productGallery--dcW0d styles__fullPage--2lFN7');
                    cy.get('[data-test="gallery"]').click().should('have.class', 'styles__fullPageZoom--36LzA');
                    cy.get('[data-test="full-page-hero-image-close"]').should('be.visible').click();
                });
            });
            context('Share box', () => {
                regions.forEach((region) => {
                    it('should allow the user to click to open the toolbox to allow the user to share', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.clickShareButton(viewport)
                        cy.wait(2000);
                        cy.get('[data-test="prodInfo-share-box"]').should('be.visible');
                    });

                    it('should allow the user to close the share toolbox', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.clickShareButton(viewport);
                        cy.clickShareButton(viewport);
                        cy.get('[data-test="prodInfo-share-box"]').should('not.be.visible');
                    });

                    context('share link tests', () => {
                        it('should open a new tab to share to facebook', () => {
                            cy.viewport(viewport);
                            cy.visitProductPage();
                            cy.clickShareButton(viewport);
                            cy.get('[data-test="prodInfo-share-facebook-link"]').should('be.visible');
                            cy.get('[data-test="prodInfo-share-facebook-link"]').should('have.attr', 'target', '_blank')
                        });
                        it('should open a new tab to share to twitter', () => {
                            cy.viewport(viewport);
                            cy.visitProductPage();
                            cy.clickShareButton(viewport);
                            cy.get('[data-test="prodInfo-share-twitter-link"]').should('be.visible');
                            cy.get('[data-test="prodInfo-share-twitter-link"]').should('have.attr', 'target', '_blank')
                        });
                        it('should open a new tab to share to pinterest', () => {
                            cy.viewport(viewport);
                            cy.visitProductPage();
                            cy.clickShareButton(viewport);
                            cy.get('[data-test="prodInfo-share-pinterest-link"]').should('be.visible');
                            cy.get('[data-test="prodInfo-share-pinterest-link"]').should('have.attr', 'target', '_blank')
                        });
                        it('should have the email share button present', () => {
                            cy.viewport(viewport);
                            cy.visitProductPage();
                            cy.clickShareButton(viewport);
                            cy.get('[data-test="prodInfo-share-email-link-desktop"]').should('be.visible');
                            cy.get('[data-test="prodInfo-share-email-link-desktop"]').should('have.attr', 'href').and('contain', 'mailto');
                        });
                    });
                    context('Shop the look desktop only', () => {
                        it('left and right chevrons function', () => {
                            cy.viewport(viewport);
                            cy.visitProductPage();
                            cy.get('[data-test="shop-this-look-carousel"]').should('be.visible').scrollIntoView();
                            cy.get('[data-test="shop-this-look-carousel-right"]').click({multiple:true});
                            cy.get('.styles__productsContainer--3ylvC div.styles__product--gyQ88:last-child').then((lastProduct) => {
                                expect(lastProduct).to.be.visible;
                            });
                            cy.get('[data-test="shop-this-look-carousel-left"]').click({multiple:true});
                            cy.get('.styles__productsContainer--3ylvC div.styles__product--gyQ88:first-child').then((firstProduct) => {
                                expect(firstProduct).to.be.visible;
                            });
                        });
                    });
                });
            });
        });
    });

    var viewports = ["macbook-15", "iphone-6"];

    // For multiple viewports
    viewports.forEach((viewport) => {
        context('PDP desktop and mobile tests (' + viewport + ')', () => {
            regions.forEach((region) => {
                it('product title should be present be visible', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-title"]').should('be.visible');
                });
                it('description should be present and be visible', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test=prodInfo-description]').should('be.visible');
                });
                
                context('Image gallery tests', () => {
                    it('product image gallery should be present and be visible', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.get('[data-test="gallery"]').should('be.visible');
                    });
                    it('image toggle - toggles left', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.get('.styles__carousel--3RlPx > img').invoke('attr', 'style')
                            .then((style) => {
                                cy.get('[data-test="gallery-hero-image-left"]').click();
                                cy.get('.styles__carousel--3RlPx > img').invoke('attr', 'style')
                                    .then((style2) => {
                                        cy.expect(style).to.not.equal(style2);
                                    });
                            });
                    });
                    it('image toggle - toggles right', () => {
                        cy.viewport(viewport);
                        cy.visitProductPage();
                        cy.get('.styles__carousel--3RlPx > img').invoke('attr', 'style')
                            .then((style) => {
                                cy.get('[data-test="gallery-hero-image-right"]').click();
                                cy.get('.styles__carousel--3RlPx > img').invoke('attr', 'style')
                                    .then((style2) => {
                                        cy.expect(style).to.not.equal(style2);
                                    });
                            });
                    });
                });
                it('price should have correct currency for region: ' + region, () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.checkTerritoryPrice(region);
                });
                it('should open the size guide modal correctly and check for content', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.openSizeGuideModal()
                    cy.get('[data-test="close-modal"]').should('be.visible').then(() => {
                        cy.get('h1.SizeGuideTable__textCenter--2wNGe').invoke('text').then((sizeTitle) => {
                            expect(sizeTitle).to.equal('Size Guide');
                        });
                    });
                });
                it('should close the size guide modal correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.openSizeGuideModal();
                    cy.closePdpModal();
                    cy.get('[data-test="close-modal"]').should('not.be.visible');
                });
                it.only('should open the delivery modal correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.openDeliveryAndReturnsModal();
                    cy.get('[data-test="close-modal"]').should('be.visible').then(() => {
                        cy.get('.InfoContent__subTitle--2l8Bv').should('have.text', 'Delivery Options:Returns:');
                    }); // assert to check for content

                });
                it('should close the delivery modal correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.openDeliveryAndReturnsModal();
                    cy.closePdpModal();
                    cy.get('[data-test="close-modal"]').should('not.be.visible');
                });

            context('Add product to bag', () => {
                it('should allow a user to add a sale product to bag', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.route('POST', /ajax\/cart\/add/)
                        .as('getLogin')
                    cy.addToBagForNewSalePDP();
                });
            });

            context('Alternative colour swatches', () => {
                it('content exists and is visible', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-color-swatches"]').should('be.visible');
                });
                it('are styled correctly', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-color-swatches"]').children().then((colourSwatches) => {
                        for (let index = 0; index < colourSwatches.length; index++) {
                            cy.wrap(colourSwatches[index])
                            .should('have.class','styles__swatch--3PUX6');
                            };
                    });        
                });
                it('can be selected', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-title"]').invoke('text').then((productTitle1) => {
                        cy.get('[data-test="prodInfo-color-swatches"] > a:not(.styles__selected--1w-93)').then((colourSwatches)=> {
                            cy.location('href').then((originalHref)=>{
                                colourSwatches[Math.floor(Math.random() * colourSwatches.length)].click();
                                cy.location('href').should('not.equal',originalHref);
                                cy.get('[data-test="prodInfo-title"]').invoke('text').then((productTitle2) => {
                                    expect(productTitle1).to.not.equal(productTitle2);
                                });
                            });
                        });
                    });
                });
            });

            context('Add to wishlist tests', () => {
                it('logged in user should be able to add an item to the wishlist', () => {
                    cy.viewport(viewport);
                    cy.createUser();
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-add-to-wishlist-button"]').should('be.visible');
                    cy.addToWishlistFromPdp();
                    cy.wishlistHeaderCount();
                });
                it('add to wishlist and log in during flow', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="prodInfo-title"]').invoke('text').then((title) => {
                        cy.get('[data-test="prodInfo-add-to-wishlist-button"]').should('be.visible');
                        cy.addToWishlist();
                        cy.createNewUserWishlist();
                        cy.get('.products-list__name').invoke('text').then((title2) => {
                            expect(title).to.eq(title2);
                            });
                        });
                });
            });
            
            context('Shop the look', () => {
                it('loads on the pdp', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="shop-this-look-carousel"]').scrollIntoView();
                    cy.get('[data-test="shop-this-look-carousel"]').should('be.visible');
                });
                it('contains products', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="carousel-item-1"]').should('be.visible');
                });
                it('select your size drop down functions', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="drop-down-desktop"]').should('be.visible');
                    cy.get('[data-test="carousel-item-1-sizes"] > [data-test="drop-down-desktop"]').click().then((sizeSelect) => {
                        expect(sizeSelect).to.have.class('styles__expanded--3v0S6');
                    });
                });
                it('item can be added to the bag after selecting a size', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="drop-down-desktop"]').should('be.visible');
                    cy.get('[data-test="carousel-item-1-sizes"] > [data-test="drop-down-desktop"]').click().then((sizeSelect) => {
                        expect(sizeSelect).to.have.class('styles__expanded--3v0S6');
                        cy.get('[data-test="carousel-item-1-sizes"] > [data-test="drop-down-desktop"] > li.styles__option---uiVN:not(.styles__disabled--8LSqb)').first().click();
                        cy.get('[data-test="carousel-item-1-add-to-bag"]').click().then(() => {
                            cy.get('.mini-bag__item-qty').invoke('text').should('equal', '1');
                        });
                    });
                });
                it('item cannot be added to the bag without selecting a size', () => {
                    cy.viewport(viewport);
                    cy.visitProductPage();
                    cy.get('[data-test="carousel-item-1-add-to-bag"]').click().then(() => {
                        cy.get('[data-test="drop-down-desktop"]').should('have.class', 'styles__sizeSelectPrompt--2n_xP');
                        cy.get('.mini-bag').should('not.have.text', '1');
                    });
                });
            });
            });
        });
    });
});