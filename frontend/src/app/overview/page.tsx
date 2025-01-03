'use client'
import { useEffect, useState } from 'react';
import { SpendingCard } from '@/components/SpendingCard';
import { OverviewCard } from '@/components/OverviewCard';
import Image from 'next/image';
import React from 'react';
import { TransactionItem } from '@/components/TransactionItem';
import { Divider } from '@nextui-org/react';
import { PieChart } from '@/components/PieChart';
import { RecurringBillItem } from '@/components/RecurringBillItem';

// Define the new SavingPotDetail component
const SavingPotDetail: React.FC<{ title: string; amount: number; borderColor: string }> = ({ title, amount, borderColor = 'blue' }) => (
  <div className="bg-gray-100 rounded-lg flex flex-1 flex-col pl-4 relative">
    <div className="absolute left-0 top-0 bottom-0 w-[5px] rounded" style={{ backgroundColor: borderColor }}></div>
    <h3 className="w-[45px] h-[18px] font-public-sans font-normal text-[12px] leading-[150%] text-[#696868] flex-none order-0 flex-grow-0">{title}</h3>
    <p className="font-public-sans font-bold text-[14px] leading-[150%] text-[#201F24] flex-none order-1 flex-grow-0">${amount}</p>
  </div>
);

const formatAmount = (amount: number | string) => {
  if (typeof amount === 'number') {
    return `$${amount.toFixed(2)}`;
  }
  return amount;
};

// Define the new PotCard component
const OverviewPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  const pieChartData = [
    { title: 'Bill', value: 250, color: '#FF5733' }, // Red-Orange
    { title: 'Personal Care', value: 30, color: '#33FF57' }, // Green
    { title: 'Entertainment', value: 25, color: '#3357FF' }, // Blue
    { title: 'Dining out', value: 67, color: '#FF33A1' }, // Pink
  ]

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='flex flex-col gap-6'>
      <section className='flex flex-row justify-between gap-6'>
        <SpendingCard amount={200} title={'Spent'} selected />
        <SpendingCard amount={500} title={'Income'} />
        <SpendingCard amount={300} title={'Saved'} />
      </section>
      <section className="pot-cards">
        <div className="flex flex-row gap-6">
          <div className="w-7/12 flex flex-col gap-6">
            {/************** POTS CARD **************/}
            <OverviewCard title="Saving Pot">
              <div className="flex flex-row items-center gap-5 mt-4">
                <div className="w-5/12 flex flex-col justify-between bg-gray-100 p-4 rounded">
                  <div className="flex flex-row items-center gap-4 bg-[#F8F4F0] rounded-[12px]">
                    <Image src="/images/icon-pot.svg" alt="Logo" width={30} height={30} className="h-10 w-10" />
                    <div className={'flex flex-col gap-3 rounded-lg'}>
                      <h3 className="flex flex-row items-center p-0 gap-[11px] flex-none order-0 flex-grow-0">Total Saved</h3>
                      <p className="font-public-sans font-bold text-[32px] leading-[120%] text-[#201F24]">$400</p>
                    </div>
                  </div>
                </div>
                <div className="w-7/12 flex flex-col gap-4">
                  <div className='flex flex-row gap-4 flex-1'>
                    <SavingPotDetail title="Title 2" amount={200} borderColor="#FF0000" />
                    <SavingPotDetail title="Title 3" amount={300} borderColor="#00FF00" />
                  </div>
                  <div className={'flex flex-row gap-4 flex-1'}>
                    <SavingPotDetail title="Title 4" amount={400} borderColor="#0000FF" />
                    <SavingPotDetail title="Title 5" amount={500} borderColor="#FFFF00" />
                  </div>
                </div>
              </div>
            </OverviewCard>
            <OverviewCard title="Transactions">
              <TransactionItem avatar="/images/avatars/serenity-spa-and-wellness.jpg" name="Item 1" amount={25} timestamp="29 Aug 2024, 21:46" />
              <Divider />
              <TransactionItem avatar="/images/avatars/elevate-education.jpg" name="Item 2" amount={50} timestamp="28 Aug 2024, 20:30" />
              <Divider />
              <TransactionItem avatar="/images/avatars/pixel-playground.jpg" name="Item 3" amount={75} timestamp="27 Aug 2024, 19:15" />
              <Divider />
              <TransactionItem avatar="/images/avatars/fork-and-knife.jpg" name="Item 4" amount={100} timestamp="26 Aug 2024, 18:00" />
              <Divider />
              <TransactionItem avatar="/images/avatars/swift-ride-share.jpg" name="Item 5" amount={125} timestamp="25 Aug 2024, 16:45" />
            </OverviewCard>
          </div>
          <div className="w-5/12 flex flex-col gap-6">
            <OverviewCard title="My Budgets" className={"min-h-[428px]"}>
              <PieChart
                data={pieChartData}
                lineWidth={30}
                radius={50}
                amount={200}
                limit={500}
              />
            </OverviewCard>
            <OverviewCard title="Recurring bills" className='flex flex-col gap-4'>
              <RecurringBillItem title="Total recurring bills" amount={1550} borderColor="#277C78" />
              <RecurringBillItem title="Remaining this month" amount={1230} borderColor="#F2CDAC"/>
              <RecurringBillItem title="Total bill due soon" amount={40} borderColor="#82C9D7" />
            </OverviewCard>
          </div>
        </div>
      </section>

      {/************** RECURRING BILLS **************/}
      <section className='transaction-cards'>
      </section>
    </div>
  );
};

export default OverviewPage;
