describe('string test', () => {

  it('checking button disabled', () => {
    cy.visit('recursion')
    cy.get('input').should('have.value', '')
    cy.get('button').should('be.disabled')

  })

  it('string algorithm', () => {
    cy.clock()

    cy.visit('recursion')
    cy.get('input').type('string')
    cy.get('button').eq(1).click()


    cy.get('[class*=string_circles]').as('circleContainer')

    cy.tick(1000)

      // default: 4px solid rgb(0, 50, 255);
      // changing: 4px solid rgb(210, 82, 225);
      // modified: 4px solid rgb(127, 224, 81);

      cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
        if (index === 0) {
            cy.wrap($circle).contains('s');
            cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        }
        if (index === 1) {
          cy.wrap($circle).contains('t');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        }
        if (index === 2) {
          cy.wrap($circle).contains('r');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        }
        if (index === 3) {
          cy.wrap($circle).contains('i');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        }
        if (index === 4) {
          cy.wrap($circle).contains('n');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        }
        if (index === 5) {
          cy.wrap($circle).contains('g');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        }
      });

    cy.tick(1000)
    
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('g');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 1) {
        cy.wrap($circle).contains('t');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 2) {
        cy.wrap($circle).contains('r');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 3) {
        cy.wrap($circle).contains('i');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 4) {
        cy.wrap($circle).contains('n');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 5) {
        cy.wrap($circle).contains('s');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
    });

    cy.tick(1000)
    
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('g');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 1) {
        cy.wrap($circle).contains('t');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
      }
      if (index === 2) {
        cy.wrap($circle).contains('r');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 3) {
        cy.wrap($circle).contains('i');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 4) {
        cy.wrap($circle).contains('n');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
      }
      if (index === 5) {
        cy.wrap($circle).contains('s');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
    });

    cy.tick(1000)
    
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('g');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 1) {
        cy.wrap($circle).contains('n');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 2) {
        cy.wrap($circle).contains('r');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 3) {
        cy.wrap($circle).contains('i');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 4) {
        cy.wrap($circle).contains('t');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 5) {
        cy.wrap($circle).contains('s');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
    });

    cy.tick(1000)
    
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('g');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 1) {
        cy.wrap($circle).contains('n');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 2) {
        cy.wrap($circle).contains('r');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
      }
      if (index === 3) {
        cy.wrap($circle).contains('i');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
      }
      if (index === 4) {
        cy.wrap($circle).contains('t');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
      if (index === 5) {
        cy.wrap($circle).contains('s');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')
      }
    });

    cy.tick(1000)
    
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 6).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).contains('g');
          cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 1) {
        cy.wrap($circle).contains('n');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 2) {
        cy.wrap($circle).contains('i');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 3) {
        cy.wrap($circle).contains('r');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 4) {
        cy.wrap($circle).contains('t');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
      if (index === 5) {
        cy.wrap($circle).contains('s');
        cy.wrap($circle).children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
    });
  })
})