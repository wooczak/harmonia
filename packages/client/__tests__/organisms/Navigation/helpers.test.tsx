import React from 'react'
import { render } from '@testing-library/react'
import { renderTabs } from 'src/components/organisms/Navigation/helpers'

// renderTabs
const mockTabs = {
  '/test-route-one': 'Go to test route one',
  '/test-route-two': 'Go to test route two'
}

describe('WHEN the renderTabs receives tabs as argument', function () {
  it('THEN renders them as <li/> elements', function () {
    const { getByText, getAllByRole } = render(<ul>{renderTabs(mockTabs)}</ul>)

    const links = getAllByRole('link');
    const firstRoute = (links[0] as HTMLLinkElement).href;
    const secondRoute = (links[1] as HTMLLinkElement).href;

    expect(getByText('Go to test route one')).toBeDefined();
    expect(getByText('Go to test route two')).toBeDefined();
    expect(firstRoute).toBe("http://test-environment.test/test-route-one");
    expect(secondRoute).toBe("http://test-environment.test/test-route-two");
  })
})
