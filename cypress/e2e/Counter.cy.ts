describe('Counter component Test', () => {
  it('Test successfully loads', () => {
    cy.visit('/')
  })

  it('Test that initial counter is setted', () => {
    cy.visit('/')

    cy.contains('Count: 10');
  })

  it('Test that a click on "increment" button increments the displayed count', () => {
    cy.visit('/')

    cy.contains('Count: 10');

    cy.get('button').contains('Increment').click();    
    cy.contains('Count: 11');
    cy.get('button').contains('Increment').click();    
    cy.contains('Count: 12');
    cy.get('button').contains('Increment').click();     
    cy.contains('Count: 13'); 
  })

  it('Test that a click on "decrement" button decrements the displayed count', () => {
    cy.visit('/')

    cy.contains('Count: 10');

    cy.get('button').contains('Decriment').click();    
    cy.contains('Count: 9');
    cy.get('button').contains('Decriment').click();    
    cy.contains('Count: 8');
    cy.get('button').contains('Decriment').click();  
  })
})