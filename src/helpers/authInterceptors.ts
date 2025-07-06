import {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {authStore} from "../store/auth";

export const setAuthInterceptors = (connector: AxiosInstance) => {
    connector.interceptors.request.use(
        (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${authStore.getState().accessToken}`,
                },
            } as InternalAxiosRequestConfig
        },
    )
    connector.interceptors.response.use(res => res, async error => {
        const originalRequest = error.config
        const statusCode = error.response.status
        if (statusCode === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const textCode = error.response.data.error.code
            if (textCode === 'TOKEN EXPIRED' && authStore.getState().refreshToken) {
                await authStore.getState().refresh()
                originalRequest.headers.Authorization = `Bearer ${authStore.getState().accessToken}`
                return await connector.request(originalRequest)
            }
            if (textCode === 'TOKEN INVALID') {
                authStore.getState().logout()
            }
        }
        originalRequest._retry && authStore.getState().logout()
        return error
    })
}