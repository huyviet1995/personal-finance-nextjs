import React from 'react';
import styles from './SpendingSummary.module.scss';

interface SpendingSummaryProps {
  title: string;
}

const SpendingSummary: React.FC<SpendingSummaryProps> = ({ title }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>Details about spending...</p>
    </div>
  );
};

export default SpendingSummary;
