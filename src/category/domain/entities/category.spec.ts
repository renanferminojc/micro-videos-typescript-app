import Category from "./category"

describe('Category constructor', () => {
  const categoryName = 'Drama'
  
  it('Should be able to create a Category with correctly name', () => {
    const category = new Category(categoryName)
    expect(category.name).toBe(categoryName)
  })
})