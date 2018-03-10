import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import UIComponentsPage from '../../pages/work-ive-done/ui-components'

test('UI Components Page should render correctly', () => {
    const wrapper = shallow(
        <UIComponentsPage/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});