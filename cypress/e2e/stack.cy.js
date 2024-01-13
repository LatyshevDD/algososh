describe('stack test', () => {

  // default: 4px solid rgb(0, 50, 255);
  // changing: 4px solid rgb(210, 82, 225);
  // modified: 4px solid rgb(127, 224, 81);

  it('checking button disabled', () => {
    cy.visit('http://localhost:3000/stack')
    cy.get('button').eq(1).as('addButton')
    cy.get('input').should('have.value', '')
    cy.get('@addButton').should('be.disabled')
  })

  it('test add element in stack', () => {

    cy.clock()

    cy.visit('http://localhost:3000/stack')
    cy.get('input').type('1')
    cy.get('button').eq(1).as('addButton').click()

    cy.get('[class*=stack-page_circles]').as('circleContainer')

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 1).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1')
          cy.wrap($circle).children('[class*=index]').contains('0')
          cy.wrap($circle).children('[class*=head]').contains('top')
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 1).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1')
          cy.wrap($circle).children('[class*=index]').contains('0')
          cy.wrap($circle).children('[class*=head]').contains('top')
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
    })

    cy.get('input').type('2')
    cy.get('@addButton').click()

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 2).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1')
          cy.wrap($circle).children('[class*=index]').contains('0')
          cy.wrap($circle).children('[class*=head]').should('be.empty')
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }

      if (index === 1) {
        cy.wrap($circle).contains('2')
        cy.wrap($circle).children('[class*=index]').contains('1')
        cy.wrap($circle).children('[class*=head]').contains('top')
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
    }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 2).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1')
          cy.wrap($circle).children('[class*=index]').contains('0')
          cy.wrap($circle).children('[class*=head]').should('be.empty')
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }

      if (index === 1) {
        cy.wrap($circle).contains('2')
        cy.wrap($circle).children('[class*=index]').contains('1')
        cy.wrap($circle).children('[class*=head]').contains('top')
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
    }
    })
  })

  it('test delete element from stack', () => {

    cy.clock()

    cy.visit('http://localhost:3000/stack')
    cy.get('input').type('1')
    cy.get('button').eq(1).as('addButton').click()

    cy.tick(500)

    cy.get('input').type('2')
    cy.get('@addButton').click()

    cy.tick(500)

    cy.get('button').eq(2).as('deleteButton').click()

    cy.get('[class*=stack-page_circles]').as('circleContainer')

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 2).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1')
          cy.wrap($circle).children('[class*=index]').contains('0')
          cy.wrap($circle).children('[class*=head]').should('be.empty')
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }

      if (index === 1) {
        cy.wrap($circle).contains('2')
        cy.wrap($circle).children('[class*=index]').contains('1')
        cy.wrap($circle).children('[class*=head]').contains('top')
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
    }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 1).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1')
          cy.wrap($circle).children('[class*=index]').contains('0')
          cy.wrap($circle).children('[class*=head]').contains('top')
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
    })
  })

  it('test clear button', () => {

    cy.clock()

    cy.visit('http://localhost:3000/stack')
    cy.get('input').type('1')
    cy.get('button').eq(1).as('addButton').click()

    cy.tick(500)

    cy.get('input').type('2')
    cy.get('@addButton').click()

    cy.tick(500)

    cy.get('button').eq(3).as('clearButton').click()
    cy.get('[class*=stack-page_circles]').as('circleContainer').should('be.empty')
  })
})