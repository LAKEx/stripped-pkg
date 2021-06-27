import ExampleContextConsumer from './ExampleContextConsumer';
import ExampleContextProvider from '../ExampleContextProvider/ExampleContextProvider';
import React from 'react';
import { mount } from 'enzyme';

const Component = () => {
  const context = ExampleContextConsumer();
  return <div>{context}</div>;
};

describe('ExampleContextConsumer', () => {
  it('gets correct value from provider', () => {
    const wrapper = mount(
      <ExampleContextProvider value={null}>
        <Component />
      </ExampleContextProvider>
    );
    expect(wrapper.text()).toEqual('');
    wrapper.setProps({ value: 'You like jazz?' });
    expect(wrapper.text()).toEqual('You like jazz?');
  });
});
