import styles from './styles.module.css'

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: TButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  )
}
