import { useState } from 'react'
import ButtonLoad from '../components/ui/ButtonLoad'

const LoginPage = () => {
    const [loginLoading, setLoginLoading] = useState(false)
    const loginFunc = () => {
        setTimeout(() => {
            console.log('Poop')
            setLoginLoading(false)
        }, 3000)
    }

    return (
        <div>
            <div className="w-full h-screen bg-slate-100 flex flex-col">
                <div className="my-auto mx-auto w-1/4 px-12 py-8 h-1/3 bg-gray-50 shadow-md border border-gray-300 rounded-md flex flex-col">
                    <div className="flex flex-col w-full my-auto">
                        <input
                            className="w-full mx-auto px-2 py-1 rounded-sm bg-none border border-gray-200"
                            placeholder="email"
                        ></input>
                        <input
                            className="w-full mx-auto px-2 py-1 mt-6 rounded-sm bg-none border border-gray-200"
                            placeholder="password"
                        ></input>
                        <ButtonLoad
                            loadingState={loginLoading}
                            setLoadingState={setLoginLoading}
                            buttonVal={'Login'}
                            toPerform={loginFunc}
                            styling="bg-orange-400"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage
