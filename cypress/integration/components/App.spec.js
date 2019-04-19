/* eslint-disable no-undef */
describe('App', function () {
  it('App loads', function () {
    cy.visit('/')
    cy.get('[data-cy="App"]')
    cy.url().should('include', '/')

  })
})
/* eslint-enable no-undef */