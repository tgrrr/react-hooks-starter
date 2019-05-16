/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import App from '../../../src/components/App/App.js'

/* eslint-disable no-undef */
describe('App loads without crashing', () => {
  beforeEach(function () {
    cy.visit('/')
    cy.mount(<App />)
  })

  it('shows App, starts route at home /', () => {
    cy.get('[data-cy="App"]').should('contain', 'Learn React')
  })

  it('changes App on click', () => {
    cy.get('button').click().contains('Test button')
    // TODO: Router - button routes to login
    // cy.contains('Something else')
  })
})
/* eslint-enable no-undef */
