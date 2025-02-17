describe('6_typing', () => {
  beforeEach(() => {
    cy.visit('https://learn.manoonchai.com/')
  })

  it('typing with Manoonchai Keyboard', () => {
    cy.get("p.sentence>span").then(($val) => {
      const char_convert = {
        "น": "f",
        "ม": "g",
        "อ": "h",
        "า": "j",
      }

      const input = cy.get(".flex.items-center>input")
      const text = $val.text()
      const char_list = Object.keys(char_convert)
      var text_convert = text

      // for (var i=0; i<char_list.length; i++) {
      //   var char = char_list[i]
      //   text_convert = text_convert.replaceAll(char, char_convert[char])
      // }

      char_list.forEach((char) => {
        text_convert = text_convert.replaceAll(char, char_convert[char])
      })

      input.type(text_convert)
    })
  })
})