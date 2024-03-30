import { render } from '@testing-library/react';

import ContextMenu from './ContextMenu';

describe('ContextMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextMenu />);
    expect(baseElement).toBeTruthy();
  });
});
