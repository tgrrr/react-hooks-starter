describe('App', function () {
  it('App loads', function () {
    cy.visit('/')

    cy.get("[data-cy='App']")
  // .click()

    cy.url().should('include', '/')

  })
})