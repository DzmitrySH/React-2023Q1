/// <reference types="cypress" />
import '@cypress/code-coverage/support';

describe('e2e Testing', () => {
  it('Visits http://localhost:3000/', () => {
    cy.visit('/');
    cy.contains('About US').click();
    cy.contains('Form Page').click();
    cy.contains('Start Wines').click();
  });

  it('form fills out correctly', () => {
    cy.visit('/form');
    cy.get('[type="submit"]').click();
    cy.get('[placeholder="name product: Wine..."]').type('Wines merlot');
    cy.get('[data-testid="description-input"]').type('Wines is very much');
    cy.get('[placeholder="set a price"]').type('249');
    cy.get('[data-testid="date-input"]').type('2023-04-28');
    cy.get('[data-testid="rule-input"]').click();
    cy.get('[type="radio"]').last().check();
    cy.get('[data-testid="category-select-input"]').select('starswine');
    cy.get('input[type=file]').selectFile('src/assets/bottle.png', { force: true });
    cy.get('[type="submit"]').click();
  });
  it('open modal window', () => {
    cy.visit('/');
    cy.contains('Producer: Toro Albalá').click();
    cy.contains('Rating: 4.7');
    cy.get('[class="product-modal__close-btn"]').click();
  });
  it('search wines in magazine', () => {
    cy.visit('/');
    cy.get('[placeholder="Search Wine..."]').type('Don PX Pedro Ximenez Sherry 1987{enter}');
    cy.contains('About Page').click();
    cy.contains('Form Page').click();
    cy.contains('Start Wines').click();
    cy.get('[placeholder="Search Wine..."]').should(
      'have.value',
      'Don PX Pedro Ximenez Sherry 1987'
    );
  });
  it('error page 404', () => {
    cy.visit('/none');
    cy.contains('Page not found 404');
  });
  it('Does not do much!', () => {
    cy.visit('/');
    expect(true).to.equal(true);
  });
});
