import { faker } from '@faker-js/faker/locale/en'
//eslint-disable-next-line no-undef
describe('Sign up', () => {
  const emailAddress = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
  //eslint-disable-next-line no-undef
  const password = Cypress.env('USER_PASSWORD')
  //eslint-disable-next-line no-undef
  it('successfully signs up using confirmation code sent via email', () => {
    //eslint-disable-next-line no-undef
    cy.fillSignupFormAndSubmit(emailAddress, password)
    //eslint-disable-next-line no-undef
    cy.contains('h1', 'Your Notes').should('be.visible')
    //eslint-disable-next-line no-undef
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})