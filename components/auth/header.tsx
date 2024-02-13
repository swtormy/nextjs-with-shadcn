import React, { FC } from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

type Props = {
    title: string;
    subtitle: string;
    social?: boolean;
}

const Header: FC<Props> = ({ title, subtitle, social }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex flex-col space-y-1 text-left">
                <h3 className="font-semibold tracking-tight text-2xl">{title}</h3>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            {social && (
                <>
                    <div className="grid grid-cols-2 gap-6">
                        <Button
                            size={"default"}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                            variant={"outline"}
                        >
                            <FcGoogle className="h-5 w-5" />
                        </Button>
                        <Button
                            size={"default"}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                            variant={"outline"}
                        >
                            <FaGithub className="h-5 w-5" />
                        </Button>

                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Или используйте</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Header