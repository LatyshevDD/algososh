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
    cy.get('input').filter('[placeholder="Введите индекс"]').should('have.value', '')
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

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
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

  it('test add element in tail', () => {
    cy.clock()

    cy.visit('http://localhost:3000/list')
    cy.get('input').filter('[placeholder="Введите текст"]').type('2')
    cy.get('button').filter(':contains("Добавить в tail")').as('addTailButton').click()
    cy.get('[class*=lis-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4)
    cy.get('@circleContainer').children('[class*=content]').last().as('lastElement')
    cy.get('@lastElement').find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
    cy.get('@lastElement').find('[class*="small"]').contains('2')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
    cy.get('@lastElement').contains('2')
    cy.get('@lastElement').find('[class*=index]').contains('4')
    cy.get('@lastElement').find('[class*=tail]').contains('tail')
    cy.get('@lastElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
    cy.get('@lastElement').contains('2')
    cy.get('@lastElement').find('[class*=index]').contains('4')
    cy.get('@lastElement').find('[class*=tail]').contains('tail')
    cy.get('@lastElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })

  it('test add element by index', () => {
    cy.clock()

    cy.visit('http://localhost:3000/list')
    cy.get('input').filter('[placeholder="Введите текст"]').type('3')
    cy.get('input').filter('[placeholder="Введите индекс"]').type('2')
    cy.get('button').filter(':contains("Добавить по индексу")').as('addIndexButton').click()
    cy.get('[class*=lis-page_circles]').as('circleContainer')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').contains('3')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').contains('head')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').contains('3')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').contains('head')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').contains('3')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
    cy.get('@circleContainer').children('[class*=content]').eq(2).as('newElement')
    cy.get('@newElement').find('[class*=index]').contains('2')
    cy.get('@newElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(127, 224, 81)')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
    cy.get('@newElement').find('[class*=index]').contains('2')
    cy.get('@newElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })

  it('test delete element from head', () => {
    cy.clock()

    cy.visit('http://localhost:3000/list')
    cy.get('input').filter('[placeholder="Введите текст"]').type('1')
    cy.get('button').filter(':contains("Добавить в head")').as('addTailButton').click()

    cy.tick(500)

    cy.tick(500)

    cy.get('button').filter(':contains("Удалить из head")').as('deleteHeadButton').click()

    cy.get('[class*=lis-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
    cy.get('@circleContainer').children('[class*=content]').first().as('firstElement')
    cy.get('@firstElement').find('[class*=text_type_circle]').should('be.empty')
    cy.get('@firstElement').find('[class*=index]').contains('0')
    cy.get('@firstElement').find('[class*="head"]').contains('head')
    cy.get('@firstElement').find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
    cy.get('@firstElement').find('[class*="small"]').contains('1')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4)
    cy.get('@firstElement').find('[class*=index]').contains('0')
    cy.get('@firstElement').find('[class*=text_type_circle]').should('not.be.empty')
    cy.get('@firstElement').find('[class*="head"]').contains('head')
    cy.get('@firstElement').find('[class*="tail"]').should('be.empty')
    cy.get('@firstElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })

  it('test delete element from tail', () => {
    cy.clock()

    cy.visit('http://localhost:3000/list')
    cy.get('input').filter('[placeholder="Введите текст"]').type('2')
    cy.get('button').filter(':contains("Добавить в tail")').as('addTailButton').click()

    cy.tick(500)

    cy.tick(500)

    cy.get('button').filter(':contains("Удалить из tail")').as('deleteTailButton').click()

    cy.get('[class*=lis-page_circles]').as('circleContainer')
    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5)
    cy.get('@circleContainer').children('[class*=content]').last().as('lasttElement')
    cy.get('@lasttElement').find('[class*=text_type_circle]').should('be.empty')
    cy.get('@lasttElement').find('[class*=index]').contains('4')
    cy.get('@lasttElement').find('[class*="head"]').should('be.empty')
    cy.get('@lasttElement').find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
    cy.get('@lasttElement').find('[class*="small"]').contains('2')

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4)
    cy.get('@lasttElement').find('[class*=index]').contains('3')
    cy.get('@lasttElement').find('[class*=text_type_circle]').should('not.be.empty')
    cy.get('@lasttElement').find('[class*="head"]').should('be.empty')
    cy.get('@lasttElement').find('[class*="tail"]').contains('tail')
    cy.get('@lasttElement').find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
  })

  it('test delete by index', () => {
    cy.clock()

    cy.visit('http://localhost:3000/list')
    cy.get('input').filter('[placeholder="Введите текст"]').type('3')
    cy.get('input').filter('[placeholder="Введите индекс"]').type('2')
    cy.get('button').filter(':contains("Добавить по индексу")').as('addIndexButton').click()
  
    cy.tick(500)

    cy.tick(500)

    cy.tick(500)

    cy.tick(500)

    cy.tick(500)

    cy.get('input').filter('[placeholder="Введите индекс"]').type('2')
    cy.get('button').filter(':contains("Удалить по индексу")').click()

    cy.tick(500)

    cy.get('[class*=lis-page_circles]').as('circleContainer')

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').contains('head')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=text_type_circle]').contains('3')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').contains('head')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=text_type_circle]').contains('3')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').contains('head')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=text_type_circle]').contains('3')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 5).each(($circle, index) => {
      if(index === 0) {
        cy.wrap($circle).find('[class*=index]').contains('0')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').contains('head')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 1) {
        cy.wrap($circle).find('[class*=index]').contains('1')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*=tail]').should('be.empty')
      }

      if(index === 2) {
        cy.wrap($circle).find('[class*=index]').contains('2')
        cy.wrap($circle).find('[class*=text_type_circle]').should('be.empty')
        cy.wrap($circle).find('[class*=circle_circle]').should('have.css', 'border', '4px solid rgb(0, 50, 255)')
        cy.wrap($circle).find('[class*=head]').should('be.empty')
        cy.wrap($circle).find('[class*="small"]').should('have.css', 'border', '4px solid rgb(210, 82, 225)')
        cy.wrap($circle).find('[class*="small"]').contains('3')
      }
    })

    cy.tick(500)

    cy.get('@circleContainer').children('[class*=content]').should('have.length', 4)
  })
})