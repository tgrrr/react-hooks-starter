/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import Login from '../../../src/pages/Login/Login.js'

// NOTE: These are tests for Login UI, not for testing authentication

/* eslint-disable no-undef */
describe('Test Login UI unit Tests', () => {
  beforeEach(function () {
    cy.mount(<Login />)
    cy.get('button[data-id=Login__submit]').invoke('width').should('be.greaterThan', 0)
    // TODO: cy.get(loading indicator).should('not.be.visible')  // If you have loading indicator
  })

  it('Login loads', () => {
    cy.get('[data-id=Login] > div').should('contain', 'Login Page')
  })

  it('Test email field errors', () => {
    cy.log('no email entered');
    // cy.wait(500) // necessary if button has no width https://github.com/cypress-io/cypress/issues/695
    cy.get('button[data-id=Login__submit]').click();
    cy.get('[data-id=Login__email--error]')
    .contains('Required')

    cy.log('error in email input')
    cy.get('[data-id=Login__email]').type('testemail.com')

    cy.get('button[data-id=Login__submit]').click();
    cy.get('[data-id=Login__email--error]')
    .contains('Invalid email address')
  })

  it('Test password errors', () => {
    cy.log('no password entered');
    cy.get('button[data-id=Login__submit]').click();
    cy.get('[data-id="Login__password--error"]')
      .contains('Required')
  })

  it('Test form works', () => {

    cy.log('input email');
    cy.get('[data-id=Login__email]').type('test@email.com');
    cy.log('Input password')
    cy.get('[data-id=Login__password]').type('1234')
    cy.get('button[data-id=Login__submit]').click();
    // cy.get('[data-id=Login__email--error]').contains('Invalid email address');
  });




})
/* eslint-enable no-undef */
