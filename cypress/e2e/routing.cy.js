describe('routing test', () => {
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('string page routing test', () => {
    cy.visit('recursion')
    cy.contains('Строка')
  })

  it('fibonacci page routing test', () => {
    cy.visit('fibonacci')
    cy.contains('Фибоначчи')
  })

  it('sorting page routing test', () => {
    cy.visit('sorting')
    cy.contains('Сортировка массива')
  })

  it('stack page routing test', () => {
    cy.visit('stack')
    cy.contains('Стек')
  })

  it('queue page routing test', () => {
    cy.visit('queue')
    cy.contains('Очередь')
  })

  it('list page routing test', () => {
    cy.visit('list')
    cy.contains('Связный список')
  })

})