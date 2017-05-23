// !!!!! NO CODE ABOVE THIS LINE !!!!!!
/* global $ */
class Calculator {
  constructor (elementId) {
    let el = document.getElementById(elementId)
    if (!elementId) {
      window.alert('Something has gone wrong.')
    }
    // this.idEl = elementIdEl
    this._el = el
    el.innerHTML = this._buildHTML()
    this._numArr = []
    this._result = 0
    this._addEvents()
    this.calcUnlock = true
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Public funcions
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  press (calcInput) {
    if (this.calcUnlock) {
      let that = this
      that.input = calcInput
      if (that.input === 'clear') {
        that.clearAll()
      }
      if (calcInput === '=') {
        that._updateScreen(that.value())
      }
      that._numArr.push(that.input)
    }
  }
  lock () {
    this.calcUnlock = false
    $('.box').prop('disabled', true)
  }
  unlock () {
    this.calcUnlock = true
    $('.box').prop('disabled', false)
  }
  pressButton () {
    this.press()
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
    console.log(this._result)
    return this._result
  }
  sayHello () {
    this.clearAll()
    this._numArr.push(0.7734)
  }

  clearAll () {
    this._numArr = []
    this.value()
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Private funcions
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  _addEvents () {

  }

  _buildHTML () {
    return `<div class="clear-input-container">
        <button value="clear" class="clear box">C</button>
        <div id='input' class="box"></div>
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
    return $('#input').html(this.value())
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
