import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (value) => {
        setUsername(value);
    }

    const onPasswordChange = (value) => {
        setPassword(value);
    }

  return (
    <div>
        <div className='px-10 py-10 h-screen bg-black text-white '>
            <div className='bg-black/5 border b-1 mx-10 my-10 py-14 pb-28 rounded w-fit px-16 mx-auto'>
                <div>
                    <h1 className='text-4xl mb-14 text-white'>Account LogIn</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        
                        <div>
                            <input name='username'
                            className=' rounded  px-3 py-2 bg-white mb-2'
                            value={username}
                            onChange={e => onUsernameChange(e.target.value)}
                             placeholder='Username'
                             />
                        </div>
                    </div>
                    <div>
                        
                        <div>
                            <input name='password'
                             placeholder='password'
                             className=' rounded  px-3 py-2 bg-white mb-5'
                             onChange={e => onPasswordChange(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div>
                    <button className='text-3xl rounded bg-[#15a6d6] text-white text-center font-thin px-6 py-2 mt-10' type='submit' >
                      <Link to='/blogs'>
                        Login
                      </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login