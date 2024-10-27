/// <reference = cypress>

describe("Entrando em um canal do youtube", () => {

  beforeEach(() => {
    // Antes de cada teste, visitar a página inicial do YouTube
    cy.visit('https://www.youtube.com/?app=desktop')
  })

  it("Deverá pesquisar um canal e verificar se o título do canal corresponde", () => {
    cy.get('#search-input > #search').type("taylor swift")
    cy.get('#search-icon-legacy').click()
    cy.get('#channel-title > #container > #text-container > #text').should("have.text", "Taylor Swift")
  })

  it("Deverá verificar se algum vídeo ao vivo do canal está disponível", () => {
    cy.get('#search-input > #search').type("one direction")
    cy.get('#search-icon-legacy').click()
    cy.get('#channel-title > #container > #text-container > #text').click()
    cy.get('[tab-title="Ao vivo"] > .yt-tab-shape-wiz__tab').click()
    cy.get('#dismissible > :nth-child(1) > ytd-thumbnail.style-scope > #thumbnail').should("exist")
    
  })

  it("Deverá abrir um vídeo e verificar se o player carrega corretamente", () => {
    cy.get('#search-input > #search').type("harry styles")
    cy.get('#search-icon-legacy').click()
    cy.get('ytd-video-renderer:first .title-and-badge.style-scope').click()
    cy.get('.html5-video-container').should("exist")
  })

  it("Ao tentar se inscrever, deverá estar logado", () => {
    cy.get('#search-input > #search').type("bob esponja")
    cy.get('#search-icon-legacy').click()
    cy.get('#channel-title > #container > #text-container > #text').click()
    cy.get('.yt-flexible-actions-view-model-wiz__action > .yt-spec-button-view-model > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
    cy.get('ytd-modal-with-title-and-button-renderer.style-scope > #title').should("contain.text", "Quer se inscrever neste canal?")
  })

  it("Deverá verificar a presença de um botão de curtida em um vídeo", () => {
    cy.get('#search-input > #search').type("luan santana")
    cy.get('#search-icon-legacy').click()
    cy.get('ytd-video-renderer:first .title-and-badge.style-scope').click()
    cy.get('.ytd-watch-metadata > #top-level-buttons-computed > .YtSegmentedLikeDislikeButtonViewModelHost > .smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > .YtLikeButtonViewModelHost > toggle-button-view-model > .yt-spec-button-view-model > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').should("exist")
  })
  
  it("Deverá verificar se o canal não possui vídeos ao vivo", () => {
    cy.get('#search-input > #search').type("shaun carneiro")
    cy.get('#search-icon-legacy').click()
    cy.get('#channel-title > #container > #text-container > #text').click()
  
    // Verificar se a seção de vídeos ao vivo não existe ou está vazia
    cy.get('ytd-channel-video-player-renderer').should('not.exist')
  })
  
})