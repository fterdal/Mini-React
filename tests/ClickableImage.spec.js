import React from 'react'
import enzyme, { shallow } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'
import { ClickableImage, Dummy } from '../react/ClickableImage'

import Adapter from 'enzyme-adapter-react-16.3'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('Clickable Image', () => {
  let mySpy
  beforeEach(() => {
    mySpy = sinon.spy()
  })
  it('renders a div', () => {
    const wrapper = shallow(
      <ClickableImage
        handleClick={mySpy}
        image={{id: 1}}
        />
    )
    // console.log('wrapper', wrapper.find('div'))
    expect(mySpy.called).to.equal(false)
    wrapper.find('div').simulate('click')
    console.log('Dummy length', wrapper.find(Dummy))
    expect(mySpy.called).to.equal(true)
    expect(wrapper.find('div')).to.have.lengthOf(1)
    // expect(wrapper.find('img')).to.have.lengthOf(1)
  })
})
