describe('queue test', () => {

  // default: 4px solid rgb(0, 50, 255);
  // changing: 4px solid rgb(210, 82, 225);
  // modified: 4px solid rgb(127, 224, 81);

  it('checking button disabled', () => {
    cy.visit('queue')
    cy.get('button').eq(1).as('addButton')
    cy.get('input').should('have.value', '')
    cy.get('@addButton').should('be.disabled')
  })

  it('test add element in queue', () => {

    cy.clock()

    cy.visit('queue')
    cy.get('input').type('1')
    cy.get('button').eq(1).as('addButton').click()

    cy.get('[class*=queue-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').first().as('firstElement')

    cy.get('@firstElement').children('[class*=circle_circle]').children('p').should('be.empty')
    cy.get('@firstElement').children('[class*=index]').contains('0')
    cy.get('@firstElement').children('[class*=head]').contains('head')
    cy.get('@firstElement').children('[class*=tail]').contains('tail')
    cy.get('@firstElement').children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')

    cy.tick(500)

    cy.get('@firstElement').children('[class*=circle_circle]').children('p').contains('1')
    cy.get('@firstElement').children('[class*=index]').contains('0')
    cy.get('@firstElement').children('[class*=head]').contains('head')
    cy.get('@firstElement').children('[class*=tail]').contains('tail')
    cy.get('@firstElement').children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })

  it('test delete element from queue', () => {

    cy.clock()

    cy.visit('queue')
    cy.get('input').type('1')
    cy.get('button').eq(1).as('addButton').click()

    cy.tick(500)

    cy.get('button').eq(2).as('deleteButton').click()

    cy.get('[class*=queue-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').first().as('firstElement')

    cy.get('@firstElement').children('[class*=circle_circle]').children('p').contains('1')
    cy.get('@firstElement').children('[class*=index]').contains('0')
    cy.get('@firstElement').children('[class*=head]').contains('head')
    cy.get('@firstElement').children('[class*=tail]').contains('tail')
    cy.get('@firstElement').children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')

    cy.tick(500)

    cy.get('@firstElement').children('[class*=circle_circle]').children('p').should('be.empty')
    cy.get('@firstElement').children('[class*=index]').contains('0')
    cy.get('@firstElement').children('[class*=head]').should('be.empty')
    cy.get('@firstElement').children('[class*=tail]').should('be.empty')
    cy.get('@firstElement').children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })

  it('test clear queue', () => {

    cy.clock()

    cy.visit('queue')
    cy.get('input').type('1')
    cy.get('button').eq(1).as('addButton').click()

    cy.tick(500)

    cy.get('input').type('2')
    cy.get('button').eq(1).as('addButton').click()

    cy.tick(500)

    cy.get('button').eq(3).as('clearButton').click()

    cy.get('[class*=queue-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').first().as('firstElement')
    cy.get('@firstElement').next().as('secondElement')

    cy.get('@firstElement').children('[class*=circle_circle]').children('p').should('be.empty')
    cy.get('@firstElement').children('[class*=index]').contains('0')
    cy.get('@firstElement').children('[class*=head]').should('be.empty')
    cy.get('@firstElement').children('[class*=tail]').should('be.empty')
    cy.get('@firstElement').children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')

    cy.get('@secondElement').children('[class*=circle_circle]').children('p').should('be.empty')
    cy.get('@secondElement').children('[class*=index]').contains('1')
    cy.get('@secondElement').children('[class*=head]').should('be.empty')
    cy.get('@secondElement').children('[class*=tail]').should('be.empty')
    cy.get('@secondElement').children('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')  
  })
})