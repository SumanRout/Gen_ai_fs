import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, googleAuth } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            if (data?.user) {
                setUser(data.user)
                return data
            }
            return { error: "Invalid email or password" }
        } catch (err) {
            return { error: err.response?.data?.message || "Unable to sign in" }
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            if (data?.user) {
                setUser(data.user)
                return data
            }
            return null
        } catch (err) {
            return { error: err.response?.data?.message || "Unable to create account" }
        } finally {
            setLoading(false)
        }
    }
    const handleGoogleAuth = async (credential) => {
        setLoading(true)
        try {
            const data = await googleAuth({ credential })
            if (data?.user) {
                setUser(data.user)
                return data
            }
            return null
        } catch (err) {
            return { error: err.response?.data?.message || "Unable to sign in with Google" }
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } catch {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    return { user, loading, handleRegister, handleLogin, handleLogout, handleGoogleAuth }
}
