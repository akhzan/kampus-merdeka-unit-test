import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('renders input name', () => {
  render(<App />)
  const inputName = screen.getByLabelText(/name/i)
  expect(inputName).toBeInTheDocument()
})

test('renders input type', () => {
  render(<App />)
  const inputType = screen.getByLabelText(/type/i)
  expect(inputType).toBeInTheDocument()
})

test('renders button submit', () => {
  render(<App />)
  const submitBtn = screen.getByRole('button', { name: /submit/i })
  expect(submitBtn).toBeInTheDocument()
})

test('submit filled form', () => {
  const submit = jest.fn()
  render(<App submit={submit} />)

  const inputName = screen.getByLabelText(/name/i)
  const inputType = screen.getByLabelText(/type/i)
  const submitBtn = screen.getByRole('button', { name: /submit/i })

  userEvent.type(inputName, 'Chameleon')
  userEvent.type(inputType, 'fire')
  userEvent.click(submitBtn)

  expect(submit).toHaveBeenCalled()
  expect(submit).toHaveBeenCalledWith({
    name: 'Chameleon',
    type: 'fire',
  })
})

test('Cancel button must be disabled when name is filled', () => {
  render(<App />)
  const cancelBtn = screen.getByRole('button', { name: /cancel/i })
  const inputName = screen.getByLabelText(/name/i)

  expect(cancelBtn).toBeEnabled()

  userEvent.type(inputName, 'Chameleon')

  expect(cancelBtn).toBeDisabled()
})
