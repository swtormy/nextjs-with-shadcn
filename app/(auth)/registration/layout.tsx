import { FC, ReactNode } from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Регистрация",
    description: "Регистрация аккаунта",
};

type Props = {
    children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default AuthLayout