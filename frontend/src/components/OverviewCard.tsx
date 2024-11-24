import clsx from 'clsx';

type OverviewCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const OverviewCard: React.FC<OverviewCardProps> = ({ title, children, className }) => {
  const containerClass = clsx('bg-white p-8 rounded', className);
  return (
    <div className={containerClass}>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">{title}</h2>
        <button className="text-blue-500">See Details</button>
      </div>
      {children}
    </div>
  )
};

