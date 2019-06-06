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
  it('Navigates to login when we click the header login button', () => {
    cy.get('[data-testid=Main__login--button]').click()
    cy.get('[data-testid=Login] > div').should('contain', 'Login Page')
  })

  it('Navigates to login when we click login button', () => {
    cy.get('[data-testid=Header__login--button]').click()
    cy.get('[data-testid=Login] > div').should('contain', 'Login Page')
  })


})
/* eslint-enable no-undef */
