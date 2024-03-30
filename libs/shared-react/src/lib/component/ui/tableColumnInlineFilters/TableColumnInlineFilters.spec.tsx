import { render } from '@testing-library/react';

import TableColumnInlineFilters from './TableColumnInlineFilters';

describe('TableColumnInlineFilters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableColumnInlineFilters />);
    expect(baseElement).toBeTruthy();
  });
});
