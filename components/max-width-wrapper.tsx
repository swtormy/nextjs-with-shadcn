import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react"

type Props = {
    className?: string;
    children: ReactNode
}

const MaxWidthWrapper: FC<Props> = ({ children, className }) => {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>
    )
}

export default MaxWidthWrapper