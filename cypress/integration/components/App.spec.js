/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import App from '../../../src/components/App/App.js'

/* eslint-disable no-undef */
describe('App loads without crashing', () => {
  beforeEach(function () {
    cy.mount(<App />)
    cy.visit('/home')
  })
  it('App, header & footer load without crashing', () => {
  cy.visit('/')
    cy.get('[data-cy=Home] > div').should('contain', 'Home')
    cy.log('Header loads')
    cy.get('[data-cy=Header] > div').should('contain', 'Header')
    cy.log('Footer loads')
    cy.get('[data-cy=Footer] > div').should('contain', 'Footer')
  })

  it('Navigates to login when we click login button', () => {
    cy.get('[data-cy=Login__button]').click()
    cy.get('[data-cy=Login] > div').should('contain', 'Login Page')
  })
})
/* eslint-enable no-undef */
