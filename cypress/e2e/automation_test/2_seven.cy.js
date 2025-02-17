describe('2_seven', () => {
  beforeEach(() => {
    cy.visit('https://lemon-meadow-0c732f100.5.azurestaticapps.net/ssg')
  })

  it('setting seven segment', () => {
    cy.get(".number.svelte-pqiwpi").then(($el) => {
      const target_number = $el.text()
      const digit_segment_list = [
        [1,1,1,0,1,1,1],
        [0,0,1,0,0,1,0],
        [1,0,1,1,1,0,1],
        [1,0,1,1,0,1,1],
        [0,1,1,1,0,1,0],
        [1,1,0,1,0,1,1],
        [1,1,0,1,1,1,1],
        [1,0,1,0,0,1,0],
        [1,1,1,1,1,1,1],
        [1,1,1,1,0,1,1]
      ]

      for (var i=0; i<target_number.length; i++) {
        const digit = parseInt(target_number[i])
        const digit_segment = digit_segment_list[digit]
        
        for (var j=0; j<digit_segment.length; j++) {
          const isClick = digit_segment[j]
          if (isClick) {
            switch (j) {
              case 0:
                cy.get(".segment.horizontal.svelte-jineh9").eq(i*3).click()
                break;
              case 1:
                cy.get(".segment.vertical.left-top.svelte-jineh9").eq(i).click()
                break;
              case 2:
                cy.get(".segment.vertical.right-top.svelte-jineh9").eq(i).click()
                break;
              case 3:
                cy.get(".segment.horizontal.svelte-jineh9").eq((i*3)+1).click()
                break;
              case 4:
                cy.get(".segment.vertical.left-bottom.svelte-jineh9").eq(i).click()
                break;
              case 5:
                cy.get(".segment.vertical.right-bottom.svelte-jineh9").eq(i).click()
                break;
              case 6:
                cy.get(".segment.horizontal.svelte-jineh9").eq((i*3)+2).click()
                break;
            }
          }
        }
      }
    })
  })
})