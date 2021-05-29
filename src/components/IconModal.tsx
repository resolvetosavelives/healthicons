import Link from 'next/link';
import styles from './IconModal.module.css';

export function IconModal() {
  return (

    <div className={styles.IconModalContainer}>
      <div className={styles.IconModal}>
        <a href="#">close</a>
        <img src="/13_positive.svg" className={styles.IconFull} />

        <h2>hosital_bed_1</h2>
        <p>Tags: <a href="#">Hospital</a> <a href="#">Hospital Bed</a> <a href="#">Bed</a> <a href="#">Inpatient care</a> <a href="#">Equipment</a></p>
        <div className={styles.IconModalButtons}>
          <a href="#" class="button download">SVG</a> <a href="#" class="button download">PNG</a>
        </div>
      </div>
    </div>
  );
}
