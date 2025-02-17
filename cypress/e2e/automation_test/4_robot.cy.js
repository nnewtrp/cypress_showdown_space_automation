describe('4_robot', () => {
  beforeEach(() => {
    cy.visit('https://showdownspace-rpa-challenge.vercel.app/challenge-robot-d34b4b04/')
    cy.get("button.chakra-button.css-jut409").click()
  })

  it('control a robot', () => {
    const go_forward = cy.get(".css-1psercc>button")
    const left_button = cy.get("button.chakra-button.css-ez23ye").eq(0)
    const right_button = cy.get("button.chakra-button.css-ez23ye").eq(1)

    for (var i=0; i<1000; i++) {
      cy.get("#wallInFront").invoke('attr', 'data-state').then((state) => {
        if (state == "absent") {
          go_forward.click()
        } else {
          cy.get("#wallToTheRight").invoke('attr', 'data-state').then((state) => {
            if (state == "absent") {
              right_button.click()
            } else {
              cy.get("#wallToTheLeft").invoke('attr', 'data-state').then((state) => {
                if (state == "absent") {
                  left_button.click()
                } else {
                  right_button.click()
                  right_button.click()
                }
              })
            }
          })
        }
      })
    }
  })
})