// // @errors: 2683
// function myClickHandler(event: Event) {
//     this.disabled = true // Typescript will error out because what haven't specified any info as to what 'this' should be
//   }
//   myClickHandler(new Event("click")) // seems ok
// @errors: 2684
function myClickHandler(event) {
    this.disabled = true;
    //   ^?
}
myClickHandler;
// ^?
const myButton = document.getElementsByTagName("button")[0];
const boundHandler = 
//    ^?
myClickHandler.bind(myButton);
boundHandler(new Event("click")); // bound version: ok
myClickHandler.call(myButton, new Event("click")); // also ok
