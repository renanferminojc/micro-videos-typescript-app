export type CategoryProps = {
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
}

export default class Category {
  constructor(public readonly props: CategoryProps) {
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

  get is_active() {
    return this.props.is_active
  }

  private set is_active (is_active: boolean) {
    this.props.is_active = is_active ?? true
  }

  get created_at() {
    return this.props.created_at
  }
  
  private set created_at (created_at: Date) {
    this.props.created_at = created_at || new Date()
  }

}