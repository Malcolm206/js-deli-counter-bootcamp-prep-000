var katzDeliLine = []
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine === []) {
    return `There is nobody waiting to be served.`
  }
  else {
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}`
  }
}
