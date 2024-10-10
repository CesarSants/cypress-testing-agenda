/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar um contato', () => {
            cy.get('.edit').first().click()

            cy.get('input[type="text"]').clear()
            cy.get('input[type="text"]').type('cesar santos')

            cy.get('input[type="email"]').clear()
            cy.get('input[type="email"]').type('cesarsantos@gmail.com')

            cy.get('input[type="tel"]').clear()
            cy.get('input[type="tel"]').type('1234567890')

            cy.get('.alterar').click()
        })

    it('Deve cancelar a edicao de um contato', () => {
            cy.get('.edit').first().click()

            cy.get('input[type="text"]').clear()
            cy.get('input[type="text"]').type('cesar santos teste test')

            cy.get('input[type="email"]').clear()
            cy.get('input[type="email"]').type('testeteste@gmail.com')

            cy.get('input[type="tel"]').clear()
            cy.get('input[type="tel"]').type('5555555555')

            cy.get('.cancelar').click()
        })

    it('Deve remover um contato', () => {
            cy.get('.delete').first().click()
        })

    it('Deve adicionar um contato', () => {        
        cy.get('input[type="text"]').type('cesar santos teste test')
        cy.get('input[type="email"]').type('testeteste@gmail.com')
        cy.get('input[type="tel"]').type('5555555555')
        cy.get('.adicionar').first().click()
        cy.get('.contato').should('have.length', 4)
        })


        // cy.get('.Vaga_vagaLink__DeFkk').first().click()
    // cy.get('input').should('have.length', 7)
    // cy.screenshot('tela-inscricao')


    // it('Deve preencher o formulario de inscrição e submeter', () => {
    //     cy.get('.Vaga_vagaLink__DeFkk').first().click()
    //     cy.get('input[name="nome-completo"]').type('cesar santos')
    //     cy.get('input[name="email"]').type('cesarsantos@gmail.com')
    //     cy.get('input[name="telefone"]').type('11 12342342')
    //     cy.get('input[name="endereco"]').type('rua Jest, bairro Cypress, Sao Paulo - SP')
    //     cy.get('#linux').check()
    //     cy.get('select[name="escolaridade"]').select('outros')
    //     cy.get('.Aplicacao_button__tw2AE').click()
  
    //     cy.on('window:alert', (conteudo) => {
    //         expect(conteudo).contain('Obrigado pela candidatura!')
    //     })
  
    //     // cy.screenshot('tela-inscricao-preenchido')
    // })
  })
  
  
  
  // describe('Testes para a home', () => {
  //   beforeEach(() => {
  //       cy.visit('https://ebac-jobs-e2e.vercel.app/')
  //   })
  
  //   it('Deve renderizar 4 vagas', () => {
  //       cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
  //   })
  //   it('Deve filtrar por fullstack', () => {
  //       // cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
  //       cy.get('.FormVagas_campo__E1ppF').type('fullstack')
  //       cy.get('button[type="submit"]').click()
  //       cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
  //   })
  // })