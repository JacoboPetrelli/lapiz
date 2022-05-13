let canv = document.querySelector("#myCanvas")
let ctx = canv.getContext ("2d")
ctx.fillStyle = "#a88f32"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.rect (150, 100, 50, 200)
ctx.stroke()
ctx.fill()
 
ctx.fillStyle = "#a86732"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(150,300)
ctx.lineTo(175,350)
ctx.lineTo(200,300)
ctx.lineTo(150,300)
ctx.stroke()
ctx.fill()
 
ctx.beginPath()
ctx.moveTo(162.5, 100)
ctx.lineTo(162.5, 300)
ctx.stroke()
ctx.fill()
 
ctx.beginPath()
ctx.moveTo(175, 100)
ctx.lineTo(175, 300)
ctx.stroke()
ctx.fill()
 
ctx.beginPath()
ctx.moveTo(187.5, 100)
ctx.lineTo(187.5, 300)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(175,350)
ctx.lineTo(187.5, 324)
ctx.lineTo(162, 324)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "pink"
ctx.strokeStyle = "pink"
ctx.beginPath()
ctx.arc(175, 100, 26, 1*Math.PI,0*Math.PI)
ctx.stroke()
ctx.fill()