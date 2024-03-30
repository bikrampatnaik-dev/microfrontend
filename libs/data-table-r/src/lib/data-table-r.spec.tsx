import { render } from '@testing-library/react';

import DataTableR from './data-table-r';

describe('DataTableR', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataTableR />);
    expect(baseElement).toBeTruthy();
  });
});
