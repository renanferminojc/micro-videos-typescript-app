import {validate as uuidValidate} from 'uuid'
import UniqueEntityId from "../../../shared/domain/value-objects/unique-entity-id"
import Entity from "./entity"

class StubEntity extends Entity<{prop1: string; prop2: number}> {}

describe('Entity Unit Tests',() => {
  const arrange = { prop1: 'prop1 value', prop2: 10};
  const uniqueEntityId = new UniqueEntityId();

  it('Should set props and id',() => {
    const entity = new StubEntity(arrange)
    expect(entity.props).toStrictEqual(arrange)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it('should accpet a valid uuid', () => {
    const entity = new StubEntity(arrange, uniqueEntityId)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).toBe(uniqueEntityId.value)
  })

  it('Should convert an entity to a JavaScript Object', () => {
    const entity = new StubEntity(arrange, uniqueEntityId)
    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...arrange
    })
  })
})