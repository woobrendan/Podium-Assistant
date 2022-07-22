/// <reference types="cypress" />
import {getToday} from '../../src/helperFunc';

describe('Creating New Podiums', () => {
  const formatDate = () => {
    const day = [];
    const splitDay = getToday().split('-');
    day.push(splitDay[2], splitDay[0], splitDay[1])
    return day.join('-');
  }

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display date, event & series', () => {

    // cy.get('#date-picker').contains(formatDate())
    // cy.get('.css-1lwbda4-MuiStack-root > .MuiFormControl-root > .MuiOutlinedInput-root').contains(formatDate())
    
  })
  

  it('Should select event', () => {
    cy.get('#mui-component-select-event')
    .parent()
    .click()
    .get('ul > li[data-value="Sonoma Raceway"]')
    .click()
  })


})
