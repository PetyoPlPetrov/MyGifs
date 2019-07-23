import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { INPUT_CHANGE } from './constants'
import Gif from './components/Gif'

configure({ adapter: new Adapter() })
const props = { urls: [{ images: { preview_gif: { url: 'myGiff1', title: 'title' } } }] }

describe('test layout changing commands', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('should call createInputChangeCommand when typing in search box', () => {
        const app = mount(<App />)
        app.setState({ urls: props.urls })
        const args = { 'args': 'dog', 'commandName': INPUT_CHANGE }
        const dispatchSpy = jest.spyOn(app.instance(), 'dispatchCommand')
        app.find('input').simulate('change', { target: { value: 'dog' } })
        expect(dispatchSpy).toHaveBeenCalledWith(args)
    })

    it('should change layout when toggle the column btn', () => {
        const app = mount(<App {...props} />)
        app.setState({ urls: props.urls })
        app.find('.toggle-test').at(1).simulate('click')
        expect(app.find('.threeColumnsContainer').length).toBe(1)
    })
})

describe('test Gif component', () => {
    it('should render giffs', () => {
        const wrapper = mount(<Gif urls={[{url: 'some url', title: 'someTitle'}]}/>)
        expect(wrapper.find('.gif').length).toBe(1)
    })
})