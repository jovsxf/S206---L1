/// <reference = cypress>

describe('Página Inicial', () => {
  it('Deve carregar a página inicial com o título correto', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.title().should('eq', 'STORE'); // Verifica o título da página
    cy.get('#navbarExample').should('be.visible'); // Verifica o menu de navegação
  });
});

describe('Carrinho de Compras', () => {
  it('Deve adicionar um item ao carrinho', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Samsung galaxy s6').click(); // Clica no item
    cy.contains('Add to cart').click(); // Adiciona ao carrinho
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added'); // Valida o alerta
    });
  });
});

describe('Checkout', () => {
  it('Não deve permitir checkout sem produtos no carrinho', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Cart').click(); // Navega para o carrinho
    cy.contains('Place Order').click(); // Tenta fazer checkout
    cy.get('.modal-title').should('contain', 'Place order'); // Valida que o modal abre
    cy.get('#name').type('Teste'); // Preenche o formulário parcialmente
    cy.get('#country').type('Brasil');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click;
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please fill out'); // Valida a mensagem de erro
    });
  });
});

// Função para verificar mensagens de alerta na página
function verificarAlerta(mensagemEsperada) {
  cy.on('window:alert', (text) => {
    expect(text).to.contains(mensagemEsperada);
  });
}