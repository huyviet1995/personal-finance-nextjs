
import Image from "next/image";

type TransactionItemProps = {
  avatar: string;
  name: string;
  amount: number;
  timestamp: string;
};
// Define the new TransactionItem component
export const TransactionItem: React.FC<TransactionItemProps> = ({ avatar, name, amount, timestamp }) => (
  <div className="flex flex-row justify-between items-center bg-white rounded py-3">
    <div className="flex flex-row items-center gap-4">
      <Image src={avatar} alt="Avatar" width={40} height={40} className="rounded-full" />
      <span className="font-public-sans font-bold text-[14px] leading-[150%] text-[#201F24]">{name}</span>
    </div>
    <div className="flex flex-col items-end gap-2">
      <span className="font-public-sans font-bold text-[14px] leading-[150%] text-[#201F24]">-${amount.toFixed(2)}</span>
      <span className="font-public-sans font-normal text-[12px] leading-[150%] text-[#696868]">{timestamp}</span>
    </div>
  </div>
);
