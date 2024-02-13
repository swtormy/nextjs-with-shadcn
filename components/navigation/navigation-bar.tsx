"use client"
import { User } from "lucide-react"
import { Button, buttonVariants } from "../ui/button"
import { Input } from "../ui/input"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import Link from "next/link"

type Props = {}

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "Wineshopper - один из самых популярных интернет магазинов с приемлимыми ценами.",
    },
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "Simplewine - не менее популярный интернет магазин, с большим выбором элитного алкоголя.",
    },
]
const NavigationBar = (props: Props) => {
    return (
        <header className="fixed flex top-0 left-0 right-0 h-16 w-full z-[15] bg-white border-b-[1px] items-center justify-between px-4">


            <div className="flex items-center">
                <Link href='/'>
                    <h2 className="text-3xl font-bold tracking-tight">SParse</h2>
                </Link>
            </div>

            <NavigationMenu className="md:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Начать пользоваться</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                SParse
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Мы дотянемся до любой информации необходимой вашему бизнесу. В рамках закона, конечно {'=)'}
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <a href="/docs" title="Introduction">
                                    Наш анализ рынка по критериям
                                </a>
                                <a href="/docs/installation" title="Installation">
                                    Каталог отчетов цен
                                </a>
                                <a href="/docs/primitives/typography" title="Typography">
                                    Заказ персональных услуг
                                </a>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Компоненты</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <a
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </a>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={""}>
                                О нас
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
                <Input type="text" placeholder="Поиск" className="focus-visible:ring-1 focus-visible:outline-offset-0 focus-visible:outline-1 focus-visible:ring-offset-1" />

                <Link
                    className={buttonVariants({
                        size: 'default',
                    })}
                    href='/login'>
                    <User className="mr-2 h-4 w-4" />{' '}Профиль
                </Link>
            </div>
        </header >
    )
}

export default NavigationBar