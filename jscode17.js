//Program  to calculate simple and compound intrest
p=5000
t=2
r=5
si=(p*t*r)/100
console.clear()
console.log("Simple Intrest=",si)
ci= p*(Math.pow((1+r/100),t))
console.log("Compound Intrest=",ci-p)