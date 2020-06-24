import React from 'react'
import { shallow } from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import SkillsIHavePage from '../pages/skills-i-have'

test('Skills I Have Page should render correctly', () => {
  const wrapper = shallow(
    <SkillsIHavePage mocks={{ skillsIHaveInit: function() {} }} />
  )
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
