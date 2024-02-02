import valueObject from "../value-object";

class StubValueObject extends valueObject {}
describe('ValueObject Unit Tests', () => {
  it('Should set value', () => {
    let vo = new StubValueObject('string value')
    expect(vo.value).toBe('string value')

    vo = new StubValueObject({prop1: 'value1'})
    expect(vo.value).toStrictEqual({prop1: 'value1'})
  })
})