import React from "react";
import { mount } from 'enzyme';

import AppetizerScreen from '../views/menu_dinner/AppetizerScreen.js';

describe("show item menu on phone", () => {
    let wrapper;

    it("should show appetizer menu", () => {
        wrapper = mount(<AppetizerScreen items={items} />);
        expect(wrapper.props().items).toEqual(items);
    });

});

