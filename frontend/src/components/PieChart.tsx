'use client'
import React from 'react';
import { PieChart as Chart } from 'react-minimal-pie-chart';

type PieChartProps = {
  data: { title: string; value: number; color: string }[];
  lineWidth: number;
  radius: number;
  amount: number;
  limit: number;
};

export const PieChart = ({ data, lineWidth, radius, amount, limit }: PieChartProps) => {
  return (
    <div className="flex flex-row gap-4 h-full justify-between items-center">
      <div className="w-[60%] relative flex flex-col items-center justify-center">
        <div className="relative">
          <Chart
            data={data}
            lineWidth={lineWidth}
            radius={radius}
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
            <div className="absolute inset-0 m-auto w-5/6 h-5/6 bg-white opacity-25 rounded-full"></div>
            <h1 className="font-public-sans font-bold text-[32px] leading-[120%] text-center text-[#201F24] flex-none order-0 flex-grow-0">
              {formatAmount(amount)}
            </h1>
            <h3 className="font-public-sans font-normal text-[12px] leading-[150%] text-[#696868] text-center flex-none order-1 flex-grow-0">
              of {formatAmount(limit)} limit
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full items-center justify-center">
        {data.map((item, index) => (
            <div key={index} className="flex justify-between flex-col border-l-4 pl-4" style={{ borderColor: item.color, borderLeftWidth: '5px', borderRadius: '5px' }}>
            <span className="w-[81px] h-[18px] font-public-sans font-normal text-[12px] leading-[150%] text-[#696868] flex-none order-0 flex-grow-0">{item.title}</span>
            <span className="w-[50px] h-[21px] font-public-sans font-bold text-[14px] leading-[150%] text-[#201F24] flex-none order-1 flex-grow-0">{formatAmount(item.value, true)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatAmount = (amount: number, showDecimal?: boolean) => {
  return showDecimal ? `$${amount.toFixed(2)}` : `$${Math.round(amount)}`;
};

