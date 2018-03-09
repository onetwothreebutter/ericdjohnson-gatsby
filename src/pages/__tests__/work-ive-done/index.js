import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import WorkIveDonePage from '../../work-ive-done/index'

test('Work Ive Done Page should render correctly', () => {
    const wrapper = shallow(
        <WorkIveDonePage/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});