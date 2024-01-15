describe('list test', () => {

  // default: 4px solid rgb(0, 50, 255);
  // changing: 4px solid rgb(210, 82, 225);
  // modified: 4px solid rgb(127, 224, 81);

  it('checking button disabled', () => {
    cy.visit('http://localhost:3000/list')
    cy.get('button').filter(':contains("Добавить в head")').as('addHeadButton')
    cy.get('button').filter(':contains("Добавить в tail")').as('addTailButton')
    cy.get('button').filter(':contains("Добавить по индексу")').as('addIndexButton')
    cy.get('button').filter(':contains("Удалить по индексу")').as('deleteIndexButton')
    cy.get('input').filter('[placeholder="Введите текст"]').should('have.value', '')
    cy.get('@addHeadButton').should('be.disabled')
    cy.get('@addTailButton').should('be.disabled')
    cy.get('@addIndexButton').should('be.disabled')
    cy.get('@deleteIndexButton').should('be.disabled')
  })

  it('test initial array', () => {
    cy.visit('http://localhost:3000/list')
    cy.get('[class*=lis-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4).each(($circle, index) => {
      if (index === 0) {
          cy.wrap($circle).find('[class*=text_type_circle]').should('not.be.empty')
          cy.wrap($circle).find('[class*=index]').contains('0')
          cy.wrap($circle).find('[class*=head]').contains('head')
          cy.wrap($circle).find('[class*=tail]').should('be.empty')
          cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }

      if (index === 1) {
        cy.wrap($circle).find('[class*=text_type_circle]').should('not.be.empty')
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }

      if (index === 2) {
        cy.wrap($circle).find('[class*=text_type_circle]').should('not.be.empty')
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }

      if (index === 3) {
        cy.wrap($circle).find('[class*=text_type_circle]').should('not.be.empty')
        cy.wrap($circle).find('[class*=index]').contains('3')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').contains('tail')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
      }
    })
  })

  it('test add element in head', () => {
    cy.clock()

    cy.visit('http://localhost:3000/list')
    cy.get('input').filter('[placeholder="Введите текст"]').type('1')
    cy.get('button').filter(':contains("Добавить в head")').as('addHeadButton').click()
    cy.get('[class*=lis-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4)
    cy.get('@circleContainer').children('[class*=content]').first().as('firstElement')
    cy.get('@firstElement').find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
    cy.get('@firstElement').find('[class*="small"]').contains('1')

    cy.tick(500)

    cy.get('@firstElement').contains('1')
    cy.get('@firstElement').find('[class*=index]').contains('0')
    cy.get('@firstElement').find('[class*=head]').contains('head')
    cy.get('@firstElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')

    cy.tick(500)

    cy.get('@firstElement').contains('1')
    cy.get('@firstElement').find('[class*=index]').contains('0')
    cy.get('@firstElement').find('[class*=head]').contains('head')
    cy.get('@firstElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })




})