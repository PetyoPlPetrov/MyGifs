import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { INPUT_CHANGE } from './constants'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should call createInputChangeCommand when typing in search box', ()=>{
        const app =  mount(<App />)
        const args = {"args": "dog", "commandName": INPUT_CHANGE}
        const createInputChangeCommand = jest.spyOn(app.instance(),'dispatchCommand' )
        app.find('input').simulate('change', {target: {value: 'dog'}})
        expect(createInputChangeCommand).toHaveBeenCalledWith(args)
})