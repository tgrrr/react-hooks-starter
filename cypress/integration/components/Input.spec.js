/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import Input from '../../../src/common/ui/Input/Input.js'

/* eslint-disable no-undef */
describe('Input loads without crashing', () => {
  beforeEach(function () {
    cy.mount(<Input />)
  }) 

  // TODO:
  it('Input exists', () => {
    cy.log('Input loads')
    cy.get('[data-testid=Input]').find('input')
  })
  // MaterialInput
  it('Can type text into the input', () => {
    cy.log('Can type text into the input')
    cy.get('[data-testid=Input]')
      .find('input')
      .type('123456')
      .should('have.value', '123456')
  })
  it('Can type text into the input', () => {
    cy.log('Can type text into the input')
    cy.get('[data-testid=Input]')
      .find('input')
      .type('123456')
      .should('not.have.value', '')
  })



  // InputWrapper
})
/* eslint-enable no-undef */
