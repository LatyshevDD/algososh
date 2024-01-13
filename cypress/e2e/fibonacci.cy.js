describe('fibonacci test', () => {

  it('checking button disabled', () => {
    cy.visit('http://localhost:3000/fibonacci')
    cy.get('input').should('have.value', '')
    cy.get('button').should('be.disabled')

  })

  it('fibonacci algorithm', () => {
    cy.clock()

    cy.visit('http://localhost:3000/fibonacci')
    cy.get('input').type('5')
    cy.get('button').eq(1).click()

    cy.get('[class*=fibonacci-page_circles]').as('circleContainer')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 1).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1');
          cy.wrap($circle).children('[class*=index]').contains('0')
      }
    });

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 2).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1');
          cy.wrap($circle).children('[class*=index]').contains('0')
      }

      if (index === 1) {
        cy.wrap($circle).contains('1');
        cy.wrap($circle).children('[class*=index]').contains('1')
      }
    });

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 3).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1');
          cy.wrap($circle).children('[class*=index]').contains('0')
      }

      if (index === 1) {
        cy.wrap($circle).contains('1');
        cy.wrap($circle).children('[class*=index]').contains('1')
      }

      if (index === 2) {
        cy.wrap($circle).contains('2');
        cy.wrap($circle).children('[class*=index]').contains('2')
      }
    });

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1');
          cy.wrap($circle).children('[class*=index]').contains('0')
      }

      if (index === 1) {
        cy.wrap($circle).contains('1');
        cy.wrap($circle).children('[class*=index]').contains('1')
      }

      if (index === 2) {
        cy.wrap($circle).contains('2');
        cy.wrap($circle).children('[class*=index]').contains('2')
      }

      if (index === 3) {
        cy.wrap($circle).contains('3');
        cy.wrap($circle).children('[class*=index]').contains('3')
      }
    });

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1');
          cy.wrap($circle).children('[class*=index]').contains('0')
      }

      if (index === 1) {
        cy.wrap($circle).contains('1');
        cy.wrap($circle).children('[class*=index]').contains('1')
      }

      if (index === 2) {
        cy.wrap($circle).contains('2');
        cy.wrap($circle).children('[class*=index]').contains('2')
      }

      if (index === 3) {
        cy.wrap($circle).contains('3');
        cy.wrap($circle).children('[class*=index]').contains('3')
      }

      if (index === 4) {
        cy.wrap($circle).contains('5');
        cy.wrap($circle).children('[class*=index]').contains('4')
      }
    });

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('1');
          cy.wrap($circle).children('[class*=index]').contains('0')
      }

      if (index === 1) {
        cy.wrap($circle).contains('1');
        cy.wrap($circle).children('[class*=index]').contains('1')
      }

      if (index === 2) {
        cy.wrap($circle).contains('2');
        cy.wrap($circle).children('[class*=index]').contains('2')
      }

      if (index === 3) {
        cy.wrap($circle).contains('3');
        cy.wrap($circle).children('[class*=index]').contains('3')
      }

      if (index === 4) {
        cy.wrap($circle).contains('5');
        cy.wrap($circle).children('[class*=index]').contains('4')
      }

      if (index === 5) {
        cy.wrap($circle).contains('8');
        cy.wrap($circle).children('[class*=index]').contains('5')
      }
    });
  })
})