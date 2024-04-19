import { useCallback, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { httpRequest } from "../../utils";
import ClipLoader from "react-spinners/ClipLoader";

export const Login = () => {
    const state = useRef(new URLSearchParams(window?.location?.search).get('state'));
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)


    const submit = useCallback(async (username: string, password: string) => {
        console.log('submit', state, username, password)
        if (!username?.length || !password?.length || !state?.current?.length) {
            return
        }
        try {
            setLoading(true)
            const response = await httpRequest({
                url: 'dev/login',
                method: 'POST',
                data: {
                    username,
                    password
                },
                query: {
                    state: state?.current
                }

            })
            if (response.status !== 200) {
                // TODO
            }

            const redirectTo = response?.data?.redirect
            if (redirectTo) {
                window.location.href = redirectTo
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [state])

    const renderLabel = useCallback((label: string) => {
        return <div className="text-sm">{label}</div>
    }, [])

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full max-w-[400px] max-h-[500px] bg-red-50 p-6 pb-8 rounded-lg space-y-8">
            <div className="w-full text-center text-2xl font-medium">SSO</div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <div>{renderLabel('Username')}</div>
                    <Input value={username} onChange={(e) => setUsername(e?.target?.value)} />
                </div>
                <div className="space-y-2">
                    <div>{renderLabel('Password')}</div>
                    <Input value={password} onChange={(e) => setPassword(e?.target?.value)} type='password' />
                </div>
            </div>
            <div>
                <Button text={loading ? <ClipLoader size="20px" /> : "Login"} onClick={() => submit(username, password)} />
            </div>
        </div>
    </div>
};
