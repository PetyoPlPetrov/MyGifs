import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should call create command when giff is searched', ()=>{
        const app =  mount(<App />)
        const args = {"args": "", "commandName": "INPUT_CHANGE"}
        const createcommand = jest.spyOn(app.instance(),'dispatchCommand' )
        app.find('input').simulate('change')
        expect(createcommand).toHaveBeenCalledWith(args)
})