import React from 'react'

interface RobotProps {
  id: number
  name: string
  email: string
}

// 泛型參數 P = props
const Robot: React.FC<RobotProps> = ({ id, name, email }: RobotProps) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt='robot' />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

export default Robot
