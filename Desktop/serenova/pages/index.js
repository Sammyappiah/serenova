import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>{t('welcome')}</h1>
          <p>{t('subtitle')}</p>
          <button className={styles.cta}>{t('contact')}</button>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
