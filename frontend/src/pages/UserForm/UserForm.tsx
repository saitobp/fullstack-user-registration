type Props = {
  mode: 'create' | 'edit' | 'view'
}

export function UserForm(props: Props) {
  const { mode } = props

  return <div>User Form on mode: {mode}</div>
}
