describe('5_button', () => {
  beforeEach(() => {
    cy.visit('https://showdownspace-rpa-challenge.vercel.app/challenge-buttons-a9808c5e/')
    cy.get("button.chakra-button.css-jut409").click()
  })
  
  it('answer the math question', () => {
    for (var i=0; i<100; i++) {
      cy.get("p.chakra-text.css-157wn8n").then(($val) => {
        const question = $val.text().split(" ")
        const val1 = parseInt(question[0].replaceAll(",", ""))
        const val2 = parseInt(question[2].replaceAll(",", ""))
        const symbol = question[1]

        var answer = 0

        switch (symbol) {
          case "+":
            answer = val1+val2
            break
          case "-":
            answer = val1-val2
            break
          case "×":
            answer = val1*val2
            break
          case "/":
            answer = val1/val2
            break
        }

        const button_positions = [9,6,7,8,3,4,5,0,1,2]

        const answer_str = answer.toString()

        for (var i=0; i<answer_str.length; i++) {
          cy.get(".css-0>button").eq(button_positions[parseInt(answer_str[i])]).click()
        }

        cy.get(".css-tuh9u2>button").click()
      })
    }
  })
})