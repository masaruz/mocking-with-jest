import reducer from '../../reducers/textReducer'
import { actionType, setText, typeText } from '../../actions'

describe('text reducer', () => {
  it('should set state every typing', () => {
    const action = text => {
      return {
        type: 'TYPE_TEXT',
        payload: text
      }
    }
    expect([
      typeText('x'), 
      typeText('y'), 
      typeText('z')]
      .reduce(reducer, ''))
      .toEqual('xyz')

    expect([
      typeText('x'), 
      typeText('y123'), 
      typeText('z')]
      .reduce(reducer, ''))
      .toEqual('xy123z')

    expect([
      typeText('x'), 
      typeText('y123'), 
      typeText('')]
      .reduce(reducer, ''))
      .toEqual('xy123')
    
      expect([
      setText('x'), 
      setText('y123'), 
      setText('z')]
      .reduce(reducer, ''))
      .toEqual('z')
  })
})