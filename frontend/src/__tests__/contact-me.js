import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import ContactMePage from '../pages/contact-me'

test('Contact Me Page should render correctly', () => {
  const wrapper = shallow(<ContactMePage />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
