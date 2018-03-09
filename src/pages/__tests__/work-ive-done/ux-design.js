import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import UXDesignPage from '../../work-ive-done/ux-design'

test('UX Design Page should render correctly', () => {
    const wrapper = shallow(
        <UXDesignPage/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});