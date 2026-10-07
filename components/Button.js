import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const styles = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  dark: 'btn-dark',
  line: 'btn-line',
}

const icons = {
  whatsapp: <FaWhatsapp size={18} />,
}

const Button = ({ label, link = '#', type = 'primary', icon, className = '' }) => {
  const classes = `${styles[type] ?? styles.primary} ${className}`
  const content = (
    <>
      {icon ? icons[icon] : null}
      {label}
    </>
  )

  if (/^https?:/.test(link)) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={link} className={classes}>
      {content}
    </Link>
  )
}

export default Button
