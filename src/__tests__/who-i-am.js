import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import WhoIAm from '../pages/who-i-am'

test('Who I Am Page should render correctly', () => {
    const wrapper = shallow(
        <WhoIAm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});