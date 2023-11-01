import React from 'react'
import { render } from '@testing-library/react'
import { renderTabs } from 'src/components/organisms/Navigation/helpers'

// renderTabs
const mockIsUserAtHomePage: boolean = true

const mockTabs = {
  '/': 'This is a homepage route',
  '/test-route-one': 'Go to test route one',
  '/test-route-two': 'Go to test route two'
}

describe('WHEN the renderTabs receives arguments', function () {
  describe('AND the user is at Homepage', function () {
    it('THEN renders all <li/> elements without the Homepage icon', function () {
      const { getByText, getAllByRole } = render(
        <ul>{renderTabs({ renderHomePageIcon: mockIsUserAtHomePage, tabs: mockTabs })}</ul>
      )

      const links = getAllByRole('link')
      const firstRoute = (links[0] as HTMLLinkElement).href
      const secondRoute = (links[1] as HTMLLinkElement).href
      
      expect(links.length).toEqual(2);
      expect(getByText('Go to test route one')).toBeDefined()
      expect(getByText('Go to test route two')).toBeDefined()
      expect(firstRoute).toBe('http://test-environment.test/test-route-one')
      expect(secondRoute).toBe('http://test-environment.test/test-route-two')
    })
  })

  describe('AND the user is not at Homepage', function() {
    it('THEN renders all <li/> elements with the Homepage icon', function () {
      const { getByText, getAllByRole } = render(
        <ul>{renderTabs({ renderHomePageIcon: !mockIsUserAtHomePage, tabs: mockTabs })}</ul>
      )

      const links = getAllByRole('link')
      const firstRoute = (links[0] as HTMLLinkElement).href
      const secondRoute = (links[1] as HTMLLinkElement).href
      const thirdRoute = (links[2] as HTMLLinkElement).href
      
      expect(links.length).toEqual(3);
      expect(getByText('Go to test route one')).toBeDefined()
      expect(getByText('Go to test route two')).toBeDefined()
      expect(firstRoute).toBe('http://test-environment.test/')
      expect(secondRoute).toBe('http://test-environment.test/test-route-one')
      expect(thirdRoute).toBe('http://test-environment.test/test-route-two')
    })
  })
})
