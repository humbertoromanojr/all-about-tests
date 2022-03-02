//import { render } from '@testing-library/react';
const render = require('@testing-library/react')

import App from './App';

describe('Add component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />);

    expect(getByText('Shirley')).toBeInTheDocument()
  })
})