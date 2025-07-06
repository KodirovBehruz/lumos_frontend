import { create } from "zustand"
import {IAuth} from "../models/stores/IAuth";
import { persist } from "zustand/middleware";
import {IUserResponseContract} from "../models/delivery/contracts/IUserContracts";
import {delivery} from "../delivery";

export const authStore = create<IAuth, [['zustand/persist', IAuth]]>(
    persist(
        (set, get) => ({
            accessToken: "",
            refreshToken: "",
            user: {
                id: "",
                createdAt: "",
                username: "",
                email: "",
                phoneNumber: "",
                password: "",
                role: "",
            },
            setTokens: (accessToken: string, refreshToken: string) => {
                set({ accessToken, refreshToken })
            },
            setUser: (user: IUserResponseContract) => {
                set({ user })
            },
            refresh: async () => {
                const { value, error } = await delivery.CS.authActions.refreshToken(
                    get().refreshToken,
                )
                if (error) return
                set({
                    accessToken: value?.accessToken,
                    refreshToken: value?.refreshToken,
                })
            },
            logout: () => {
                set({
                    accessToken: "",
                    refreshToken: "",
                })
            },
            getSelf: async () => {
                if (get().accessToken) {
                    const { value, error } = await delivery.CS.authActions.getSelf();
                    if (error) return;
                    set((state) => ({
                        ...state,
                        user: {
                            ...state.user,
                            ...value,
                        },
                    }));
                }
            }
        }),
        {
            name: "auth",
            getStorage: () => localStorage,
        },
    ),
)