import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import WhatImLookingFor from '../what-im-looking-for'

test('What Im Looking For Page should render correctly', () => {
    const wrapper = shallow(
        <WhatImLookingFor />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});