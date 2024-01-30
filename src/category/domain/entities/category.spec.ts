import { validate as uuidValidate} from 'uuid'

import Category from "./category"

const defaultDate = new Date(2024, 1, 30, 0)
jest.useFakeTimers('modern').setSystemTime(defaultDate);

describe('Category constructor', () => {
  const defaultCategoryName = 'Drama'
  const defaultCategoryDescription = 'some description'

  it('Should be able to create a Category only with name', () => {
    const category: Category = new Category({ 
      name: defaultCategoryName,
    })

    expect(category.props).toStrictEqual({
      name: defaultCategoryName,
      description: null,
      is_active: true,
      created_at: defaultDate
    })
    expect(category.props.created_at).toBeInstanceOf(Date)
  })

  it('Should be able to create a Category with description', () => {
    const category: Category = new Category({ 
      name: defaultCategoryName,
      description: defaultCategoryDescription
    })

    expect(category.props).toStrictEqual({
      name: defaultCategoryName,
      description: defaultCategoryDescription,
      is_active: true,
      created_at: defaultDate
    })
    expect(category.props.created_at).toBeInstanceOf(Date)
  })

  it('Should be able to create a Category with is_active false', () => {
    const category: Category = new Category({ 
      name: defaultCategoryName,
      is_active: false
    })

    expect(category.props).toStrictEqual({
      name: defaultCategoryName,
      description: null,
      is_active: false,
      created_at: defaultDate
    })
    expect(category.props.created_at).toBeInstanceOf(Date)
  })

  it('Should be able to create a Category with is_active true', () => {
    const category: Category = new Category({ 
      name: defaultCategoryName,
      is_active: true
    })

    expect(category.props).toStrictEqual({
      name: defaultCategoryName,
      description: null,
      is_active: true,
      created_at: defaultDate
    })
    expect(category.props.created_at).toBeInstanceOf(Date)
  })

  it('Should validate uuid if was not provided', () => {
    const category = new Category({ name: defaultCategoryName })
    expect(category.id).not.toBeNull()
    expect(uuidValidate(category.id)).toBeTruthy()
  })

  it('Should validate uuid if null is provided', () => {
    const category = new Category({ name: defaultCategoryName, id: null })
    expect(category.id).not.toBeNull()
    expect(uuidValidate(category.id)).toBeTruthy()
  })

  it('Should validate uuid if undefined is provided', () => {
    const category = new Category({ name: defaultCategoryName, id: null })
    expect(category.id).not.toBeNull()
    expect(uuidValidate(category.id)).toBeTruthy()
  })

  it('Should validate uuid if valid uuid is provided', () => {
    const category = new Category({ name: defaultCategoryName, id: '21eb0c93-cc1e-499f-837c-d26212059cfc' })
    expect(category.id).not.toBeNull()
    expect(uuidValidate(category.id)).toBeTruthy()
  })
})