import { validate as uuidValidate } from 'uuid'
import InvalidUuidError from "../../../errors/invalid-uuid.error"
import UniqueEntityId from "../unique-entity-id"

describe('UniqueEntityId Unit Tests', () => {
  it('Should throw an error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalled()
  })

  it('Should accept a uuid passed in constructor', () => {
    const uuid = '21eb0c93-cc1e-499f-837c-d26212059cfc'

    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const valueObject = new UniqueEntityId(uuid)
    expect(valueObject.value).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled()
  })

  it('Should create a valid uuid if no id was passed', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const valueObject = new UniqueEntityId()
    expect(uuidValidate(valueObject.value)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })
})