import { useState } from 'react'

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <>
          <form>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' onChange={ (e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' id='lastName' onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email Address:</label>
                <input type='email' id='email' onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' id='confirmPassword' onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
          </form>

          <div className='row'>
            <div className='col test'>
                <p>First Name:</p>
                <p>Last Name:</p>
                <p>Email:</p>
                <p>Password:</p>
                <p>Confirm Password:</p>
            </div>
            <div className='col'>
                <p>{ firstName }</p>
                <p>{ lastName }</p>
                <p>{ email }</p>
                <p>{ password }</p>
                <p>{ confirmPassword }</p>
            </div>
          </div>
        </>
    )
}

export default HookForm