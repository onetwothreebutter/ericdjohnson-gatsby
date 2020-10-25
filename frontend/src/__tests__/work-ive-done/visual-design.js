import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import VisualDesignPage from '../../pages/work-ive-done/visual-design'

test('Visual Design Page should render correctly', () => {
  const wrapper = shallow(<VisualDesignPage />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
