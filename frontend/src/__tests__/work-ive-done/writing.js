import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import WritingPage from '../../pages/work-ive-done/writing'

test('Writing Page should render correctly', () => {
  const wrapper = shallow(<WritingPage />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
