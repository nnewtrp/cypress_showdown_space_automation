describe('1_hunting', () => {
  beforeEach(() => {
    cy.visit('https://showdownspace-rpa-challenge.vercel.app/challenge-hunting-fed83d58/')
    cy.get("button.chakra-button.css-jut409").click()
  })

  it('find the given numbers from boxes', () => {
    cy.get("span.chakra-badge.css-n2903v").then(($el) => {
      const list = []
      
      for (var i=1; i<6; i++) {
        list.push($el.eq(i).text())
      }
      
      for (var j=0; j<64; j++) {
        const index = j
        cy.get("img").eq(j).trigger('mouseover')
        cy.wait(10)
        cy.get("div").eq(-1).then(($hover_val) => {
          if (list.includes($hover_val.text())) {
            cy.get("img").eq(index).click()
          }
        })
      }
    })
  })
})