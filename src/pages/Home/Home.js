import styles from './Home.module.css';

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Welcome to Car Rental in Ukraine</h1>
      <p className={styles.description}>
        Your Premier Car Rental Service Provider
      </p>

      <section className={styles.services}>
        <p className={styles.info}>
          At Car Rental Ukraine, we offer a wide range of vehicles for rental in
          various cities across Ukraine. Whether you are traveling for business
          or leisure, we have the perfect car for you.
        </p>
      </section>
    </main>
  );
}
