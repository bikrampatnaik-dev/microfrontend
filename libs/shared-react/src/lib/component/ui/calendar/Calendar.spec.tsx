import { render } from '@testing-library/react';

import Calendar from './Calendar';

describe('Calendar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Calendar />);
    expect(baseElement).toBeTruthy();
  });
});
