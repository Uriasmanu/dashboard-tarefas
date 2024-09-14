import './_Login.scss'
import user from '../../../imagem/account.svg'
import arrow from '../../../imagem/arrow_forward.svg'

const Login = () => {
    return (
        <div className="ContainerLogin">
            <img src={user} alt="" className='user' />
            <div className='usuario'>
                <p>Login</p>
                <p>exemplo@gmail.com</p>
            </div>
            <img src={arrow} alt="" />
        </div>
    )
}

export default Login