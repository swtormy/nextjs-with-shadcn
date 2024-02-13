"use client"

import * as z from "zod"
import CardWrapper from '../dashboard/card-wrapper'
import Header from './header'
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import FormError from "./form-error"
import FormSuccess from "./form-success"
import BackButton from "./back-button"

type Props = {}

const RegistrationForm = (props: Props) => {
    const [isPending, startTransiction] = useTransition()

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")
        startTransiction(() => {

        })
    }
    return (
        <CardWrapper
            header={<Header
                title='Регистрация'
                subtitle='Укажите ваше имя, почту и пароль'
            />}
            footer={
                <BackButton
                    label={"Уже зарегистрированы?"}
                    href={"/login"}>

                </BackButton>
            }
        >
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className='space-y-4 text-left'>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ваш имя</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        disabled={isPending}
                                        placeholder='Иван'
                                        type='name' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
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
                        Зарегистрироваться
                    </Button>
                </form>
            </FormProvider>
        </CardWrapper>
    )
}

export default RegistrationForm