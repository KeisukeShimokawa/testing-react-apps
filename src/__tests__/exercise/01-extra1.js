// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = '';
})

test('counter increments and decrements when the buttons are clicked', () => {
  // `div` 要素を作成して HTML の `body` に追加する
  const div = document.createElement('div');
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div);
  console.log(document.body.innerHTML);

  // ReactDOM を使用してレンダリングする
  ReactDOM.render(<Counter />, div);
  console.log(document.body.innerHTML);

  // メッセージを取得して検証する
  const message = div.firstChild.querySelector('div');
  console.log(message.textContent);
  expect(message.textContent).toBe('Current count: 0');

  // 複数あるボタンはスプレッド構文で取得する
  const [decrement, increment] = div.firstChild.querySelectorAll('button')

  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    buttons: 0  // 左クリック
  })

  // ボタン要素のクリックイベントを発火させる
  increment.dispatchEvent(incrementClickEvent);
  expect(message.textContent).toBe('Current count: 1');

  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    buttons: 0  // 左クリック
  })

  // ボタン要素のクリックイベントを発火させる
  decrement.dispatchEvent(decrementClickEvent);
  expect(message.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
