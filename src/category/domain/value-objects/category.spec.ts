import Category, { CategoryProps } from "./category"
import UniqueEntityId from '../../../shared/domain/value-objects/unique-entity-id'

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

  it('Should validate id field', () => {
    type CategoryData = { props: CategoryProps; id?: UniqueEntityId }
    const data: CategoryData[] = [
      {props: { name: "Movie"}},
      {props: { name: "Movie"}, id: null},
      {props: { name: "Movie"}, id: undefined},
      {props: { name: "Movie"}, id: new UniqueEntityId()},
      {props: { name: "Movie"}},
    ]

    data.forEach(item => {
      const category = new Category(item.props, item.id as any)
      expect(category.id).not.toBeNull()
      expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    })
  })
})