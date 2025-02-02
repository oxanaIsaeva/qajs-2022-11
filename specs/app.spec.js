import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('nameIsValid', () => {
  test.skip ('name.length < 2', function(){
    expect (nameIsValid('O')).toBe(false)
  })
  test.skip ('name.length >= 2', function(){
    expect (nameIsValid('Oxana')).toBe(true)
  })
  test.skip ('name.length = 2', function(){
    expect (nameIsValid('Ox')).toBe(true)
  })
  test.skip ('is not empty', function(){
    expect (nameIsValid(' ')).toBe(false)
  })
});

describe('fullTrim', () => {
  test.skip ('space in the middle', function(){
    expect(fullTrim('te xt')).toBe('text')
  })
  test.skip ('only spaces', function(){
    expect (fullTrim('     ')).toBe('')
  })
  test.skip ('spaces along the edges', function(){
    expect (fullTrim(' text ')).toBe('text')
  })
  test.skip ('numbers spaces and symbols', function(){
    expect (fullTrim('12 *& ||')).toBe('12*&||')
  })
});

describe('getTotal', () => {
  test.skip.each`
  price | quantity| discount     | expected
  ${10} | ${10}   | ${0}         | ${100}
  ${10} | ${1}    | ${0}         | ${10}
  ${10} | ${1}    | ${50}        | ${5}
  ${10} | ${0}    | ${20}        | ${0}
  ${10} | ${10}   | ${10}        | ${90}
  ${10} | ${10}   | ${100}       | ${0}
  ${10} | ${10}   | ${'error'}   | ${'error'}
  ${10} | ${10}   | ${-5}        | ${'error'}
  `('$price $quantity $discount = $expected', function({price, quantity, discount, expected}){
    if (expected==='error') {
      expect(function(){
        getTotal(price, quantity, discount)
      }).toThrow()
    } else {
      expect(getTotal([{price, quantity}], discount)).toBe(expected)
    }
  })
});