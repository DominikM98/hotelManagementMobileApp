import React from "react";
import { mount } from "enzyme";

import LoginScreen from '../LoginScreen.js';

describe('Test register new mobile user', () => {
    let wrapper;

    it("should phone number is correct", () => {
        wrapper = mount(<LoginScreen />);
        wrapper.find('TextInput').simulate("change", {
            target: {id: "phoneNumber", value: '889552331'}
        });
        expect(wrapper.state('phoneNumber')).toEqual("889552331")
    });

    it("should password is correct", () => {
            wrapper = mount(<LoginScreen />);
            wrapper.find('TextInput').simulate("change", {
                target: {id: "password", value: '_A)q@4Nvw0'}
            });
            expect(wrapper.state('password')).toEqual("_A)q@4Nvw0")
     });


    it("register new client", () => {
        wrapper = mount(<LoginScreen />);
        wrapper
          .find('TextInput')
          .simulate("change", { target: { id: "phoneNumber", value: "517601105" } });
        wrapper
          .find('TextInput')
          .simulate("change", { target: { id: "password", value: "_A)q@4Nvw0" } });
        wrapper.find("button").simulate("click");
        expect(wrapper.state("register")).toBe(true);
     });

     it("login check with right data", () => {
             wrapper = mount(<LoginScreen />);
             wrapper
               .find('TextInput')
               .simulate("change", { target: { id: "phoneNumber", value: "889552331" } });
             wrapper
               .find('TextInput')
               .simulate("change", { target: { id: "password", value: "abcd" } });
             wrapper.find("button").simulate("click");
             expect(wrapper.state("loggedIn")).toBe(true);
      });
});