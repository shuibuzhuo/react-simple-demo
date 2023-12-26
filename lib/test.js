function Greeter(greeting) {
  this.greeting = greeting;
}
Greeter("hi");
var Animals = /*#__PURE__*/function (Animals) {
  Animals[Animals["Fish"] = 0] = "Fish";
  return Animals;
}(Animals || {});
console.log(Animals.Fish);