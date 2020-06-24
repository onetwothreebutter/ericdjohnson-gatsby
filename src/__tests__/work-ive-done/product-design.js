import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import ProductDesignPage from '../../pages/work-ive-done/product-design'

test('Product Design Page should render correctly', () => {
  const wrapper = shallow(<ProductDesignPage />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
