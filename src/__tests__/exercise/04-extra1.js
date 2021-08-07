// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // let submittedData
  // const handleSubmit = (data) => (submittedData = data)
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  // レンダリングされる要素を STDOUT で確認する
  // screen.debug()

  // テスト用の値を指定する
  const username = 'keisuke'
  const password = 'shimokawa'

  // 入力する場所を検索する
  const usernameInputArea = screen.getByLabelText(/username/i)
  const passwordInputArea = screen.getByLabelText(/password/i)
  
  // 値を入力するイベントを作成する
  userEvent.type(usernameInputArea, username)
  userEvent.type(passwordInputArea, password)

  // クリックする場所を特定する
  const clickArea = screen.getByRole('button', {name: /submit/i});

  // クリックするイベントを発火する
  userEvent.click(clickArea);

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
