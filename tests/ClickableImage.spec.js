import React from 'react'
import enzyme, { shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16.3'

const adapter = new Adapter()
enzyme.configure({ adapter })

import { ClickableImage } from '../react/ClickableImage'

describe('ClickableImage', () => {
  it('renders a div', () => {
    const wrapper = shallow(<ClickableImage />)
    expect(wrapper.find('div')).to.have.lengthOf(1)
  })
})
