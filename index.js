var katzDeliLine = []
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  console.log(`Welcome, ${name}. You are number ${position} in line.`)
}
function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0]
  console.log(`Currently serving ${serving}.`)
  katzDeliLine.shift()
}
