/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import Login from '../../../src/pages/Login/Login.js'

/* eslint-disable no-undef */
describe('Test Login UI unit Tests', () => {
  beforeEach(function () {
    cy.mount(<Login />)
  })
  it('Login loads', () => {
    cy.get('[data-id=Login] > div').should('contain', 'Login Page')
  })

  it('Test form errors', () => {
    cy.log('no email entered');
    cy.get('button[data-id=Login__submit]').click();
    // Error message should appear
    cy.get('[data-id=Login__email--error]')
    .contains('Required')

    cy.log('input wrong email')
    cy.get('[data-id=Login__email]').type('testemail.com')

    cy.get('button[data-id=Login__submit]').click();
    // Error message should appear
    cy.get('[data-id=Login__email--error]')
    .contains('Invalid email address')
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
