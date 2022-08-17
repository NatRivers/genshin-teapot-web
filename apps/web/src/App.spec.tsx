import { ReactElement } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { RenderResult, render, fireEvent } from '@testing-library/react';

import App from './App';

const renderWithRouter = (children: ReactElement): RenderResult =>
  render(<BrowserRouter>{children}</BrowserRouter>);

describe('App', () => {
  it('render home page by default', () => {
    const { getByTestId } = renderWithRouter(<App />);

    expect(getByTestId('home-page')).toBeInTheDocument();
  });

  it('unmatched route: defaults to rendering the home page', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(
      <>
        <Link to="/some/unmatched/route" data-testid="link" />
        <App />
      </>
    );

    fireEvent.click(getByTestId('link'));

    expect(await findByTestId('home-page')).toBeInTheDocument();
  });

  it.each([
    { path: '/', testId: 'home-page' },
    { path: '/example', testId: 'example-page' },
  ])(
    'navigate to $path: renders the expected page',
    async ({ path, testId }) => {
      const { getByTestId, findByTestId } = renderWithRouter(
        <>
          <Link to={path} data-testid={path} />
          <App />
        </>
      );

      // navigate to `path`
      fireEvent.click(getByTestId(path));

      expect(await findByTestId(testId)).toBeInTheDocument();
    }
  );
});
