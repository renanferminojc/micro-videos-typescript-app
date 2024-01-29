import Category from "./category"

describe('Category constructor', () => {
  const created_at = new Date();
  const categoryFake: Category = new Category({ 
    name: 'Drama',
    description: 'some description',
    is_active: true,
    created_at
  })
  
  it('Should be able to create a Category with correctly name', () => {
    const expected = {
      name: 'Drama',
      description: 'some description',
      is_active: true,
      created_at
    }

    expect(categoryFake.props).toStrictEqual(expected)
  })
})