import useExampleHook from './useExampleHook';
import { mount } from 'enzyme';
import React from 'react';

const Component = () => {
  const state = useExampleHook('jazz');
  return <div>{state}</div>;
};

describe('useExampleHook', () => {
  it('provides correct state', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.text()).toEqual('jazz');
  });
});
