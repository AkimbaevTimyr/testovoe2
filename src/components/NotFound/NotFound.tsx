import React, {FC} from 'react'


interface NotFoundProps {
  text: string;
}

const NotFound: FC<NotFoundProps> = ({text}) => {
  return (
    <div>{text}</div>
  )
}

export default NotFound