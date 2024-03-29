
var makeFireflyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="firefly"></span>');
  this.setPosition(top, left);
};

makeFireflyDancer.prototype = Object.create(makeDancer.prototype);
makeFireflyDancer.prototype.constructor = makeFireflyDancer;
makeFireflyDancer.prototype.oldStep = makeFireflyDancer.prototype.step;

makeFireflyDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};

makeFireflyDancer.prototype.gatherUp = function () {
  var top = 200;
  var left = 800 + (Math.random() * 200);
  this.setPosition(top, left);
};