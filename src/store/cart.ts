import { ICartItem } from "../models/stores/ICart";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { delivery } from "../delivery";

interface ICartState {
    items: ICartItem[];
    loading: boolean;
    error: string | null;
    getCart: () => Promise<void>;
    addToCart: (productId: string, quantity?: number) => Promise<void>;
    removeFromCart: (productId: string) => Promise<void>;
    clearCart: () => void;
    totalPrice: number;
}

export const cartStore = create<ICartState>() (
    persist(
        (set, get) => ({
            items: [],
            totalPrice: 0,
            loading: false,
            error: null,

            getCart: async () => {
                set({ loading: true, error: null });
                try {
                    const response = await delivery.CS.cartActions.getCart();
                    if (!response || response.value) {
                        set({ loading: false })
                        return
                    }

                    set({
                        items: value.result.data.map(item => ({
                            id: item.id,
                            name: item.name,
                            price: Number(item.price) || 0,
                            quantity: item.CartProduct?.quantity || 1,
                            finalPrice: Number(item.finalPrice) || 0
                        })),
                        totalPrice: value.result.meta?.totalPrice ?? 0,
                        loading: false
                    })
                } catch (error) {
                    set({ error: error.message, loading: false });
                }
            },
            removeFromCart: async (productId: string) => {
                set({ loading: true });
                try {
                    const response = await delivery.CS.cartActions.removeFromCart(productId);
                    if (!response || response.value) {
                        set({ loading: false })
                        return
                    }
                    set(state => ({
                        items: state.items.filter(item => item.id !== productId),
                        loading: false
                    }))
                } catch (error) {
                    set({ error: error.message, loading: false });
                }
            },
            addToCart: async (productId: string, quantity = 1) => {
                set((state) => {
                    const existingItem = state.items.find(item => item.id === productId);
                    const newItems = existingItem
                        ? state.items.map(item =>
                            item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
                        )
                        : [...state.items, { id: productId, quantity, price: 0 }];
                    return {
                        items: newItems,
                        loading: true
                    };
                })
                try {
                    const response = await delivery.CS.cartActions.addToCart(productId, quantity);
                    if (!response || response.value) {
                        set({ loading: false })
                        return
                    }
                    await get().getCart();
                } catch (error) {
                    set({ error: error.message, loading: false });
                }
            },

            clearCart: () => {
                set({ items: [], totalPrice: 0 });
            }
        }),
        {
            name: "cart",
            getStorage: () => localStorage
        }
    )
);
