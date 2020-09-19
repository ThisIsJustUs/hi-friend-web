import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import { LeanFooter } from '../components/Footer';

interface RegistrationForm {
    firstName: string;
    lastName: string;
    email: string;
}

type InputProps = {
    label: string;
    idName: string;
    placeholder: string;
    type?: string;
};

const Input: React.FC<InputProps> = ({
    label,
    idName,
    placeholder,
    type = 'text',
}) => {
    return (
        <div className='my-5'>
            <label className='font-display' htmlFor='email'>
                {label}
            </label>
            <Field
                id={idName}
                name={idName}
                placeholder={placeholder}
                type={type}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green2'
            />
        </div>
    );
};

const Register: React.FC<{}> = () => {
    // Inital Values
    const initialValues: RegistrationForm = {
        firstName: '',
        lastName: '',
        email: '',
    };

    return (
        <div>
            <div className='flex flex-col justify-between px-5 bg-gradient-to-tr from-green2 via-green3 to-green-400'>
                <h2 className='text-white py-8 px-3 font-display text-2xl'>
                    Hi Friend
                </h2>
                <h4 className='text-white py-8 px-3 font-display text-3xl'>
                    Sign up and change lives for humans and animals 🐶❤️
                </h4>
            </div>
            <div className='px-5 py-10'>
                <div>
                    <h2 className='font-display text-3xl'>
                        Tell us about yourself
                    </h2>
                    <span>It won’t take a minute!</span>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
                >
                    <Form>
                        <div className='flex flex-col'>
                            <Input
                                label='Firstname'
                                idName='firstName‚'
                                placeholder='Justus'
                            />
                            <Input
                                label='Lastname'
                                idName='lastName'
                                placeholder='Hebenstreit'
                            />
                            <Input
                                label='Email'
                                idName='email'
                                placeholder='justus@hifriend.com'
                                type='email'
                            />
                        </div>
                        <button
                            className='bg-green2 mt-5 w-full text-white py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline'
                            type='submit'
                        >
                            Sign up
                        </button>
                    </Form>
                </Formik>
            </div>
            <LeanFooter />
        </div>
    );
};

export default Register;
