import classNames from 'classnames'
import { useState } from 'react'
import { useFocusRing } from 'react-aria'
import {
    FieldValues,
    UseControllerProps,
    useController,
    useForm,
} from 'react-hook-form'
import Button from '../Button'

type FormValues = {
    firstName: string
    lastName: string
    company: string
    email: string
    message: string
}

const ContactForm = () => {
    const [isSucces, setIsSuccess] = useState<boolean | null>(null)

    const {
        handleSubmit,
        control,
        reset,
        setError,
        formState: { isSubmitting, errors },
    } = useForm<FormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            message: '',
        },
    })

    const onSubmit = async (values: FieldValues) => {
        if (!values) return
        const body = JSON.stringify(values)

        try {
            const response = await fetch('/api/mailgun', {
                method: 'POST',
                body: body,
            })

            const res = await response.json()

            if (res.status === 200) {
                setIsSuccess(true)
                setTimeout(() => {
                    setIsSuccess(false)
                    reset()
                }, 5000)
            }

            if (res.status !== 200) throw new Error()
        } catch {
            setError('root', {
                type: 'custom',
                message: 'Something went wrong, please try again later',
            })
        }
    }

    return (
        <>
            <form
                id="contactForm"
                name="contactForm"
                onSubmit={handleSubmit(onSubmit)}
                className="relative flex flex-row flex-wrap md:gap-x-12 gap-y-10 w-full h-fit justify-between"
                autoComplete="off"
            >
                <ContactFormInput
                    name="firstName"
                    label="First name"
                    placeholder="First name"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'This field is required',
                        },
                    }}
                />
                <ContactFormInput
                    name="lastName"
                    label="Last name"
                    placeholder="Last name"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'This field is required',
                        },
                    }}
                />
                <ContactFormInput
                    name="company"
                    label="Company"
                    placeholder="Company"
                    control={control}
                />
                <ContactFormInput
                    name="email"
                    label="Email address"
                    placeholder="Email address"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'This field is required',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+?\.[a-zA-Z0-9-]{2,3}$/,
                            message: 'Please enter a valid email address',
                        },
                    }}
                    type="email"
                />
                <ContactFormTextArea
                    name="message"
                    label="Message"
                    placeholder="Message"
                    control={control}
                    className="mt-6"
                    rules={{
                        required: {
                            value: true,
                            message: 'This field is required',
                        },
                    }}
                />
                {isSucces && (
                    <span className="absolute -bottom-3 left-0 text-bright-green text-sm">
                        Thank you for your message!
                    </span>
                )}
                {errors && (
                    <span className="absolute -bottom-3 left-0 text-bright-green text-sm">
                        {errors.root?.message}
                    </span>
                )}
            </form>
            <Button
                type="submit"
                form="contactForm"
                className="place-self-start border-purple border-2"
                isDisabled={isSubmitting}
            >
                Send Message
            </Button>
        </>
    )
}

export default ContactForm

type ContactFormInputType = {
    name: string
    label: string
    type?: string
    autoComplete?: string
    ariaLabel?: string
    placeholder?: string
    className?: string
}

const ContactFormInput = (
    props: ContactFormInputType & UseControllerProps<FormValues>
) => {
    const { name, label, type = 'text', ariaLabel, placeholder } = props

    const { focusProps, isFocusVisible } = useFocusRing({ isTextInput: true })
    const {
        field,
        fieldState: { error },
        formState: { isSubmitting },
    } = useController(props)

    return (
        <div className="relative h-fit w-full md:max-w-[40%]">
            <label
                id={`${name}_label`}
                htmlFor={name}
                className="font-medium text-base"
            >
                {label}
            </label>

            <input
                {...field}
                {...focusProps}
                id={name}
                name={name}
                type={type}
                autoComplete="off"
                aria-label={ariaLabel || label}
                aria-labelledby={`${name}_label`}
                disabled={isSubmitting}
                className={classNames(
                    'w-full border-b-2 py-1 border-purple bg-transparent text-purple outline-none placeholder:text-base-variant placeholder:text-purple/25',
                    {
                        'ring-2 ring-pink-dark ring-offset-2 ring-offset-white':
                            isFocusVisible,
                    }
                )}
                placeholder={placeholder}
            />
            {error && (
                <span className="absolute -bottom-5 left-0 text-red-600 text-sm">
                    {error.message}
                </span>
            )}
        </div>
    )
}

const ContactFormTextArea = (
    props: ContactFormInputType & UseControllerProps<FormValues>
) => {
    const { name, label, ariaLabel, placeholder, className } = props
    const { focusProps, isFocusVisible } = useFocusRing({ isTextInput: true })

    const {
        field,
        fieldState: { error },
        formState: { isSubmitting },
    } = useController(props)

    return (
        <div className={classNames('relative h-fit w-full', className)}>
            <label
                id={`${name}_label`}
                htmlFor={name}
                className="font-medium text-base"
            >
                {label}
            </label>

            <textarea
                {...field}
                {...focusProps}
                id={name}
                name={name}
                style={{
                    resize: 'none',
                }}
                aria-label={ariaLabel || label}
                aria-labelledby={`${name}_label`}
                disabled={isSubmitting}
                className={classNames(
                    'w-full h-16 py-1 border-b-2 border-purple bg-transparent outline-none text-purple placeholder:text-base-variant placeholder:text-purple/25',
                    {
                        'ring-2 ring-pink-dark ring-offset-2 ring-offset-white':
                            isFocusVisible,
                    }
                )}
                placeholder={placeholder}
            />
            {error && (
                <span className="absolute -bottom-3 left-0 text-red-600 text-sm">
                    {error.message}
                </span>
            )}
        </div>
    )
}
