type RecurringBillItemProps = {
    title: string;
    amount: number;
    borderColor?: string;
};

export const RecurringBillItem: React.FC<RecurringBillItemProps> = ({
    title,
    amount,
    borderColor,
}) => {
    return (
        <div
            className={`flex justify-between w-full items-center p-4 bg-[#F8F4F0] border-l-4 border-[${
                borderColor ?? "#277C78"
            }] rounded-lg h-[61px] box-border`}
            style={{ borderColor: borderColor ?? "#277C78" }}
        >
            <h3 className="font-public-sans font-normal text-[14px] leading-[150%] text-[#696868]">
                {title}
            </h3>
            <p className="font-public-sans font-bold text-[14px] leading-[150%] text-[#201F24]">
                ${amount.toFixed(2)}
            </p>
        </div>
    );
};
