var katzDeliLine = []
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var line = `The line is currently:`
    for(var i = 1; i < katzDeliLine.length + 1; i++){
      line = line + ` ${i}. ${katzDeliLine[i - 1]}`
      if(1<i<katzDeliLine){
        line = line + ','
      }
    }
    return line
  }
}
