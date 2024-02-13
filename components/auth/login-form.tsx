"use client"

import * as z from "zod"
import CardWrapper from '../dashboard/card-wrapper'
import Header from './header'
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import FormError from "./form-error"
import FormSuccess from "./form-success"
import BackButton from "./back-button"

type Props = {}

const LoginForm = (props: Props) => {
    const [isPending, startTransiction] = useTransition()

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")
        startTransiction(() => {

        })
    }
    return (
        <CardWrapper
            header={<Header
                title='Авторизация'
                subtitle='Для входа в профиль введите почту и пароль'
                social
            />}
            footer={
                <BackButton
                    label={"Еще нет аккаунта?"}
                    href={"/registration"}>

                </BackButton>
            }
        >
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className='space-y-4 text-left'>
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Электронная почта</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        disabled={isPending}
                                        placeholder='parser@parsemail.ru'
                                        type='Электронная почта'
                                        className="focus-visible:ring-1 focus-visible:outline-offset-0 focus-visible:outline-1 focus-visible:ring-offset-1"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        disabled={isPending}
                                        placeholder='******'
                                        type='password'
                                        className="focus-visible:ring-1 focus-visible:outline-offset-0 focus-visible:outline-1 focus-visible:ring-offset-1"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >
                        Войти
                    </Button>
                </form>
            </FormProvider>
        </CardWrapper>
    )
}

export default LoginForm