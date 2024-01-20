import { getNameInitials } from '@/utilities'
import { Avatar as AntdAvatar , AvatarProps } from 'antd'
type Props = AvatarProps & {
    name: string

}

const CustomAvatar = ({name,style,...rest} : Props) => {
  return (
    <AntdAvatar 
    alt={name} 
    size="small" 
    style={{
        display: 'flex',
        alignItems: 'center',
        border:"none",
        backgroundColor : '#87d068',
      ...style
      }}
        {...rest}
        >
        {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvatar