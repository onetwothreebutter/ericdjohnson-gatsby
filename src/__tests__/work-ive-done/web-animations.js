import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import WebAnimationsPage from '../../pages/work-ive-done/web-animations'

test('Web Animations Page should render correctly', () => {
  const wrapper = shallow(<WebAnimationsPage />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
