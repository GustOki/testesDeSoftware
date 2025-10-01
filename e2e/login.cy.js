describe('Testes de Login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    });

    it('Caso de Teste 01: login com credenciais válidas', () => {
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        cy.url().should('include', '/logged-in-successfully/');
        cy.contains('Congratulations').should('be.visible');
        cy.contains('successfuly logged in').should('be.visible');
    });

    it('Caso de Teste 02: login com user inexistente', () => {
        cy.get('#username').type('userInv');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        cy.get('#error').should('be.visible');
        cy.get('#error').should('contain', 'Your username is invalid!');
    });

    it('Caso de Teste 03: login com senhada errada', () => {
        cy.get('#username').type('student');
        cy.get('#password').type('senhaerrada');
        cy.get('#submit').click();

        cy.get('#error').should('be.visible');
        cy.get('#error').should('contain', 'Your password is invalid!');
    });

    it('Caso de Teste 04: login com user de apenas 1 caractere', () => {
        cy.get('#username').type('a');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        cy.get('#error').should('be.visible');
        cy.get('#error').should('contain', 'Your username is invalid!');
    });

    it('Caso de Teste 05: login com user vazio', () => {
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        cy.get('#error').should('be.visible');
        cy.get('#error').should('contain', 'Your username is invalid!');
    });

    it('Caso de Teste 06: login com senha vazia', () => {
        cy.get('#username').type('student');
        cy.get('#submit').click();

        cy.get('#error').should('be.visible');
        cy.get('#error').should('contain', 'Your password is invalid!');
    });

    it('Caso de Teste 07: login com user e senha vazios', () => {
        cy.get('#submit').click();

        cy.get('#error').should('be.visible');
    });
})