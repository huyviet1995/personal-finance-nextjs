import { SpendingCard } from '@/components/SpendingCard';
import { OverviewCard } from '@/components/OverviewCard';
import Image from 'next/image';
import React from 'react';
import { TransactionItem } from '@/components/TransactionItem';
import { Divider } from '@nextui-org/react';

// Define the new SavingPotDetail component
const SavingPotDetail: React.FC<{ title: string; amount: number; borderColor: string }> = ({ title, amount, borderColor = 'blue' }) => (
  <div className="bg-gray-100 rounded-lg flex flex-1 flex-col pl-4 relative">
    <div className="absolute left-0 top-0 bottom-0 w-[5px] rounded" style={{ backgroundColor: borderColor }}></div>
    <h3 className="w-[45px] h-[18px] font-public-sans font-normal text-[12px] leading-[150%] text-[#696868] flex-none order-0 flex-grow-0">{title}</h3>
    <p className="font-public-sans font-bold text-[14px] leading-[150%] text-[#201F24] flex-none order-1 flex-grow-0">${amount}</p>
  </div>
);

// Define the new PotCard component
const OverviewPage: React.FC = () => {
  console.log('OverviewPage');
  return (
    <div className='flex flex-col gap-6'>
      <h1 className={'p-2 font-bold text-gray-900 text-[32px]'}>Overview</h1>
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
            <div className="bg-white p-4 shadow rounded">
              <h2 className="font-bold text-xl">Card 1</h2>
              {/* Add Card 1 content here */}
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="font-bold text-xl">Card 2</h2>
              {/* Add Card 2 content here */}
            </div>
          </div>
        </div>
      </section>

      {/************** TRANSACTIONS CARD **************/}
      <section className='transaction-cards'>
      </section>
    </div>
  );
};

export default OverviewPage;
