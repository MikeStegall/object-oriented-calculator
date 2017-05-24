// !!!!! NO CODE ABOVE THIS LINE !!!!!!
/* global $ */
class Calculator {
  constructor (elementId) {
    let el = document.getElementById(elementId)
    if (!elementId) {
      window.alert('Something has gone wrong.')
    }
    this.idEl = elementId
    this._el = el
    el.innerHTML = this._buildHTML()
    this._numArr = []
    this._numInput = ''
    this._result = 0
    this._addEvents()
    this.isLocked = false
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Public funcions
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  press (button) {
    // do nothing if the calculator is locked
    if (this.isLocked) return
    let buttonStr = button.toString()

    if (buttonStr === 'clear') {
      this.clearAll()
    } else if (buttonStr === '=') {
      // TODO: need to do something here
    } else if (buttonStr === '.') {
      $('.decimal').attr('disabled', true)
    } else if (buttonStr.length > 1) {
      return
    } else { // then it should be a normal number
      this._numArr.push(buttonStr)
      console.log(this._numArr)
    }
    this._updateScreen()
  }

  lock () {
    this.isLocked = true
  }
  unlock () {
    this.isLocked = false
  }
  pressButton (button) {
    this.press(button)
  }
  value () {
    let inputArr = this._numArr
    if (inputArr.length === 0) {
      return null
    } else if (inputArr.length === 1) {
      return inputArr[0]
    }
    let x = parseFloat(inputArr[0])
    let y = parseFloat(inputArr[2])
    let operator = inputArr[1]
    if (operator === '+') {
      this._result = x + y
    } else if (operator === '-') {
      this._result = x - y
    } else if (operator === 'x') {
      this._result = x * y
    } else if (operator === '/') {
      this._result = x / y
    }
    // console.log(this._result)
    return this._result
  }
  sayHello () {
    this.clearAll()
    this._numArr.push(0.7734)
  }

  clearAll () {
    this._numInput = ''
    this._numArr = []
    this.value()
  }

  toString () {
    let numStr = this._numArr.join(' ')
    return numStr
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Private funcions
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  _addEvents () {

  }

  _buildHTML () {
    return `<div class="clear-input-container">
        <button value="clear" class="clear box">C</button>
        <div id='input' class="input box"></div>
      </div><!--end of clear-input-->
      <div class="number-function-container">
        <button class="seven box numbers" input="7">7</button>
        <button class="eight box numbers" input="8">8</button>
        <button class="nine box numbers" input="9">9</button>
        <button class="divide function box" input="/">/</button>
        <button class="four box numbers" input="4">4</button>
        <button class="five box numbers" input="5">5</button>
        <button class="six box numbers" input="6">6</button>
        <button class="multiply function box" input="x">x</button>
        <button class="one box numbers" input="1">1</button>
        <button class="two box numbers" input="2">2</button>
        <button class="three box numbers" input="3">3</button>
        <button class="minus function box" input="-">-</button>
        <button class="zero box numbers" input="0">0</button>
        <button class="decimal box" input=".">.</button>
        <button class="equals box" input="=">=</button>
        <button class="addition function box" input="+">+</button>
      </div><!--end of numbers-function-containers-->`
  }
  _updateScreen () {
    $('#' + this.idEl + ' .input').html(this.value())
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
