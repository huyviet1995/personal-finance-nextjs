import { Button as NextUIButton } from "@nextui-org/react";
import clsx from "clsx";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string; // Add className prop
    disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    title,
    onClick,
    className,
    ...props
}: ButtonProps) => {
    const buttonCn = clsx(className, "bg-gray-900 rounded-lg text-white p-4");
    return (
        <NextUIButton
            type="submit"
            onClick={onClick}
            title={title}
            className={buttonCn}
            {...props}
        >
            {title}
        </NextUIButton>
    );
};
