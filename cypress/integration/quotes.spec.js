import cy from "cypress"

describe('Quotes app', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })
    const textInput = () => cy.get('input[name=text]')
    const toppingSelect = () => cy.get('input[name=topping]')
    const submitButton = () => cy.get('button[id=submitBtn]')

    it('can type in inputs', () => {
        textInput()
            .should('have.value', '')
            .type('Lirong')
            .should('have.value', 'Lirong')
        toppingSelect().click()
        submitButton().click()  
    
    })

})