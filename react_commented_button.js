
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom' // component react router

// Icon
import { Icon } from '@blueprintjs/core'

// lib
import { colors } from '../lib/constants'
import { fontFamily } from '../lib/fonts'

// on se fait pas chier au niveau du test
const BaseButton = ({ to, href, ...props }) => { // on "extrait" les props to et href de props -> juste lisibilité, margin-leftis ca fait qu'ils sont accessibles directement sans passser par "props" ex. :props.machin
  if (to) {
    return <Link to={to} {...props} />
  }

  if (href) {
    return <a href={href} {...props} />
  }

  return <button {...props} />
}
// toujours passer le plus possible par des container pour styliser les choses, même pour un prop d'un span
const IconContainer = styled.span`
  margin-left: 10px;
`

//on part d'un button de base qu'on differenciera par la suite avec les props qu'il a donc on renvoie
// un component BaseButton qui renvoie des tag différent en fonction des props
// avoir un seul button de base permet de styliser tous les button en un coup avec les lignes plus loin
const LogicalButton = ({ children, iconName, secondary, disabled, onClick, ...props }) => (
  <BaseButton
    onClick={e => {
      if (disabled) e.preventDefault()
      else if (typeof onClick === 'function') onClick()
    }}
    {...props}
  >
    {children}
    {iconName && ( // si iconName est true on renvoie un container sinon rien
      <IconContainer>
        <Icon icon={iconName} />
      </IconContainer>
    )}
  </BaseButton>
)


const Button = styled(LogicalButton)`
  background: ${colors.primary};
  border-radius: 20px;
  padding: 12px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
  ${fontFamily({ weight: 'bold', size: '13px' })};

  :hover {
    color: ${props => colors.light};
    cursor: pointer;
  }

  ${props => props.secondary && `
    background: ${colors.button__secondary};
  `}
  ${props => props.disabled && `
    background: ${colors.button__disabled};
  `}
`

export default Button
