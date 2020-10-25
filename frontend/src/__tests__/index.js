import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import IndexPage from '../pages'

test('Index Page should render correctly', () => {
  const wrapper = shallow(<IndexPage />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
