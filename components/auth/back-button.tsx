"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FC } from "react";

type Props = {
    href: string;
    label: string;
}

const BackButton: FC<Props> = ({ href, label }) => {
    return (
        <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

export default BackButton