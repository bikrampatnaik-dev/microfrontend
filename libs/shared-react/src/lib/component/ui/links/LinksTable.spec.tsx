import { render } from '@testing-library/react';

import LinksTable from './LinksTable';

describe('LinksTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinksTable />);
    expect(baseElement).toBeTruthy();
  });
});
