import { SpendingCard } from '@/components/SpendingCard';
import React from 'react';

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
      <section>
        <div className="flex flex-row gap-6">
          <div className="w-7/12 flex flex-col gap-6">
            <div className="bg-white p-4 shadow rounded">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">Saving Pot</h2>
                <button className="text-blue-500">See Details</button>
              </div>
              <div className="flex flex-row gap-6 mt-4">
                <div className="w-6/12 flex flex-col justify-between bg-gray-100 p-4 rounded">
                  <h3 className="font-bold">Title 1</h3>
                  <p>$100</p>
                </div>
                <div className="w-6/12 flex flex-col gap-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-bold">Title 2</h3>
                    <p>$200</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-bold">Title 3</h3>
                    <p>$300</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="font-bold text-xl">Transactions</h2>
              {/* Add Transactions content here */}
            </div>
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
    </div>
  );
};

export default OverviewPage
