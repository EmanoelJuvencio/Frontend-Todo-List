import styles from './styles.module.css'

interface IListHeaderProps {
  tasksCounter: number
  checkedTasksCounter: number
}

export function ListHeader({
  tasksCounter,
  checkedTasksCounter,
}: IListHeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
