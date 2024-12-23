import React from 'react';
import { PieChart } from '@/components/PieChart';
import SpendingSummary from '@/components/SpendingSummary';
import styles from './BudgetsPage.module.scss';

const dummyData = [
  { title: 'Rent', value: 500, color: '#FF6384' },
  { title: 'Groceries', value: 300, color: '#36A2EB' },
  { title: 'Utilities', value: 200, color: '#FFCE56' },
  { title: 'Entertainment', value: 100, color: '#4BC0C0' },
  { title: 'Savings', value: 150, color: '#9966FF' },
];

const BudgetsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <PieChart 
          data={dummyData} 
          lineWidth={20} 
          radius={50} 
          amount={1250} 
          limit={1500} 
          summaryPlacement='bottom'
        />
      </div>
      <div className={styles.column}>
        <SpendingSummary title="Card 1" />
        <SpendingSummary title="Card 2" />
        <SpendingSummary title="Card 3" />
        <SpendingSummary title="Card 4" />
      </div>
    </div>
  );
};

export default BudgetsPage;