import { useState } from 'react'

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    // first name validation
    const handleFirstName = (e) => {
        setFirstName(e.target.value)

        if ( e.target.value.length < 1 || e.target.value.length > 2 ) {
            setFirstNameError('')
        }
        else {
            setFirstNameError('First Name must be at least 3 characters long.')
        }
    }

    // last name validation
    const handleLastName = (e) => {
        setLastName(e.target.value)

        if ( e.target.value.length < 1 || e.target.value.length > 2 ) {
            setLastNameError('')
        }
        else {
            setLastNameError('Last Name must be at least 3 characters long.')
        }
    }

    // email validation
    const handleEmail = (e) => {
        setEmail(e.target.value)

        if ( e.target.value.length < 1 || e.target.value.length > 5) {
            setEmailError('')
        }
        else {
            setEmailError('Email must be at least 5 characters long.')
        }
    }

    // password validation
    const handlePassword = (e) => {
        setPassword(e.target.value)

        if ( e.target.value.length < 1 || e.target.value.length > 7 ) {
            setPasswordError('')
        }
        else {
            setPasswordError('Password must be at least be 8 characters long.')
        }
    }

    // password confirmation validation
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)

        console.log(password, confirmPassword)

        if ( password === e.target.value ) {
            setConfirmPasswordError('')
        }
        else {
            setConfirmPasswordError('Passwords must match.')
        }
    }

    return (
        <>
          <form>

            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' onChange={ handleFirstName }/>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> : undefined
                }
            </div>

            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' id='lastName' onChange={ handleLastName }/>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> : undefined
                }
            </div>

            <div>
                <label htmlFor='email'>Email Address:</label>
                <input type='email' id='email' onChange={ handleEmail }/>
                {
                    emailError ?
                    <p>{ emailError }</p> : undefined
                }
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' onChange={ handlePassword }/>
                {
                    passwordError ?
                    <p>{ passwordError }</p> : undefined
                }
            </div>

            <div>
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' id='confirmPassword' onChange={ handleConfirmPassword }/>
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> : undefined
                }
            </div>

          </form>
        </>
    )
}

export default HookForm