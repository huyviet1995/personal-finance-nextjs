interface SpendingCardProps {
  amount: number;
  title: string;
  selected?: boolean;
}

export const SpendingCard: React.FC<SpendingCardProps> = ({ amount, title, selected }) => {
  const textColor = selected ? 'text-white' : 'text-black';
  const bgColor = selected ? 'bg-gray-900' : 'bg-white';
  return (
    <div className={`flex flex-col items-start p-6 gap-3 flex-1 h-[119px] ${bgColor} border rounded-lg order-0 flex-grow-1`}>
      <h2 className={`w-[106px] h-[21px] font-public-sans font-normal text-[14px] leading-[150%] ${textColor} flex-none order-0 flex-grow-0`}>
        {title}
      </h2>
      <h1 className={`w-[166px] h-[38px] font-public-sans font-bold text-[32px] leading-[120%] flex-none order-0 flex-grow-0 ${textColor}`}>
        {amount}
      </h1>
    </div>
  );
};

