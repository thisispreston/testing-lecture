import React from 'react'
import Header from '../components/Header'
import { render, fireEvent } from '@testing-library/react'

// it() is quite equivalent to test()
// queryByTestId can NOT find a match
it('Does not show dropdown menu when mounted', () => {
  const { queryByTestId } = render(<Header/>)

  const dropdown = queryByTestId('dropdown')
  expect(dropdown)
    .not.toBeTruthy()
})

// getByTestId must find a mtc
it('Shows dropdown when hamburger is clicked', () => {
  const { container, getByTestId } = render(<Header/>)

  const hamburger = getByTestId('hamburger-button')

  fireEvent.click(hamburger)

  expect(container.textContent)
    .toContain('Dropdown menu')
})
