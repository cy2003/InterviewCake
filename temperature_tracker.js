/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

function TempTracker(){
  //for min and max
  this.maxTemp = null
  this.minTemp = null
  //for mean
  this.totalSum = 0
  this.numberOfTemp = 0
  this.mean = null
  //for mode
  this.mode = null
  this.occurrences = []
  for(var i = 0; i < 111; i++){
    this.occurrences[i] = 0
  }
  this.maxOccurences = 0
}

TempTracker.prototype.insert = function(temperature){

  //for mode
  this.occurrences[temperature]++
  if (this.occurrences[temperature] > this.maxOccurences){
    this.maxOccurences = this.occurrences[temperature]
    this.mode = temperature
  }

  //for mean
  this.totalSum += temperature
  this.numberOfTemp++
  this.mean = this.totalSum / this.numberOfTemp


  if (this.maxTemp === null || temperature > this.maxTemp){
    this.maxTemp = temperature
  }
  if (this.minTemp === null || temperature < this.minTemp){
    this.minTemp = temperature
  }
}

TempTracker.prototype.getMax = function(){
  return this.maxTemp
}

TempTracker.prototype.getMin = function(){
  return this.minTemp
}

TempTracker.prototype.getMean = function(){
  return this.mean
}

TempTracker.prototype.getMode = function(){
  return this.mode
}
