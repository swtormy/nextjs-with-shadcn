import { FC, ReactNode } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"

type Props = {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}

const CardWrapper: FC<Props> = ({ header,
    children,
    footer }) => {
    return (
        <Card className="shadow-sm">
            <CardHeader>
                {header}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {footer && (
                <CardFooter>
                    {footer}
                </CardFooter>
            )}
        </Card>
    )
}

export default CardWrapper