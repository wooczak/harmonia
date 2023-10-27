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

    expect(getByText('Go to test route one')).toBeDefined();
    expect(getByText('Go to test route two')).toBeDefined();
    
  })
})
