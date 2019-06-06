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
    cy.get('[data-testid=Home] > div').should('contain', 'Home')
    cy.log('Header loads')
    cy.get('[data-testid=Header] > div').should('contain', 'Header')
    cy.log('Footer loads')
    cy.get('[data-testid=Footer] > div').should('contain', 'Footer')
  })  
})
/* eslint-enable no-undef */
