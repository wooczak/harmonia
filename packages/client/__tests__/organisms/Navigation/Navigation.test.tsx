import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from '../../../src/components/organisms/Navigation/Navigation'
import { Heading, NavigationTabs } from '../../../src/app/(dashboard)/constants'

describe('WHEN the Navigation organism is rendered', function () {
  it('THEN should render correctly', function () {
    const tree = renderer
      .create(<Navigation isUserAtHomePage={false} tabs={NavigationTabs} titleContent={Heading.AppName} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
