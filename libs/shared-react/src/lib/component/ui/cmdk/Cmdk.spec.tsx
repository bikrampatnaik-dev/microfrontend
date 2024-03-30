import { render } from '@testing-library/react';

import Cmdk from './Cmdk';

describe('Cmdk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cmdk />);
    expect(baseElement).toBeTruthy();
  });
});
