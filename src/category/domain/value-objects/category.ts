import UniqueEntityId from "../../../shared/domain/value-objects/unique-entity-id"
import Entity from "../entity/entity"

export type CategoryProps = {
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
}

export default class Category extends Entity<CategoryProps> {
  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    super(props, id)
    this.description = this.props.description
    this.is_active = this.props.is_active
    this.created_at = this.props.created_at
  }

  get name() {
    return this.props.name
  }

  get description() {
    return this.props.description
  }

  private set description (description: string) {
    this.props.description = description || null
  }

  private set is_active (is_active: boolean) {
    this.props.is_active = is_active ?? true
  }

  private set created_at (created_at: Date) {
    this.props.created_at = created_at ?? new Date()
  }

}