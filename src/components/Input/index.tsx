import styles from './styles.module.css'

export function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.container} {...rest} />
}
