/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import Home from '../../../src/pages/Home/Home.js'

/* eslint-disable no-undef */
describe('Home loads without crashing', () => {
  beforeEach(function () {
    cy.mount(<Home />)
    cy.visit('/home')
  }) 

  it('Home', () => {
    cy.visit('/')
    cy.get('[data-testid=Home] > div').should('contain', 'Home')
    cy.log('Header loads')
  })


})
/* eslint-enable no-undef */
