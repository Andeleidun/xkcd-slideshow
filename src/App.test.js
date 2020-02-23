import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('should render correctly', () => {
    const component = render(<App />);
  });
  it('should match snapshot', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
