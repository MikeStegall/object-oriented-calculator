// !!!!! NO CODE ABOVE THIS LINE !!!!!!
class Calculator {
  constructor (elementId) {
    let el = document.getElementById(elementId)
    if (!elementId) {
      window.alert('Something has gone wrong.')
    }
    // this.idEl = elementIdEl
    this._el = el
    el.innerHTML = this._buildHTML()
  }
  press () {
    // this.on('click')
  }
  lock () {

  }
  unlock () {

  }
  pressButton () {

  }
  value () {

  }
  sayHello () {

  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Private funcions
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  _buildHTML () {
    return `<div class="clear-input-container">
        <button class="clear box">C</button>
        <div class="input box"></div>
      </div><!--end of clear-input-->
      <div class="number-function-container">
        <button class="seven box numbers">7</button>
        <button class="eight box numbers">8</button>
        <button class="nine box numbers">9</button>
        <button class="divide function box">/</button>
        <button class="four box numbers">4</button>
        <button class="five box numbers">5</button>
        <button class="six box numbers">6</button>
        <button class="multiply function box">x</button>
        <button class="one box numbers">1</button>
        <button class="two box numbers">2</button>
        <button class="three box numbers">3</button>
        <button class="minus function box">-</button>
        <button class="zero box numbers">0</button>
        <button class="decimal box">.</button>
        <button class="equals box">=</button>
        <button class="addition function box">+</button>
      </div><!--end of numbers-function-containers-->`
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
