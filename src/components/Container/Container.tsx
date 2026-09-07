import type { ReactNode } from 'react'
import './Container.css'

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>
}

export default Container
