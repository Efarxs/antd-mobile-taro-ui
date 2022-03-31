import './list.less'
import { List } from './list'
import { ListItem } from './list-item'

export type { ListProps } from './list'
export type { ListItemProps } from './list-item'

export default Object.assign(List, {
  Item: ListItem,
})
