describe('routing test', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('string page routing test', () => {
    cy.visit('http://localhost:3000/recursion')
    cy.contains('Строка')
  })

  it('fibonacci page routing test', () => {
    cy.visit('http://localhost:3000/fibonacci')
    cy.contains('Фибоначчи')
  })

  it('sorting page routing test', () => {
    cy.visit('http://localhost:3000/sorting')
    cy.contains('Сортировка массива')
  })

  it('stack page routing test', () => {
    cy.visit('http://localhost:3000/stack')
    cy.contains('Стек')
  })

  it('queue page routing test', () => {
    cy.visit('http://localhost:3000/queue')
    cy.contains('Очередь')
  })

  it('list page routing test', () => {
    cy.visit('http://localhost:3000/list')
    cy.contains('Связный список')
  })

})