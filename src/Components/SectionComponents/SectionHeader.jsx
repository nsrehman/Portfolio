import styles from './SectionHeader.module.css'

function SectionHeader({ children, id }) {
    return(
        <div className={styles.headerBackDrop}>
            <h1 id={id} className={styles.sectionHeader}>{children}</h1>
        </div>
    )
}

export default SectionHeader;