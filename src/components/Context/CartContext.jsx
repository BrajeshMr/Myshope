import React, { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext(null);

const initialState = {
	items: {}, // { [productId]: { product, quantity } }
};

function cartReducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM": {
			const { product } = action.payload;
			const existing = state.items[product.id];
			const quantity = existing ? existing.quantity + 1 : 1;
			return {
				...state,
				items: {
					...state.items,
					[product.id]: { product, quantity },
				},
			};
		}
		case "SET_QUANTITY": {
			const { productId, quantity } = action.payload;
			if (quantity <= 0) {
				const next = { ...state.items };
				delete next[productId];
				return { ...state, items: next };
			}
			const existing = state.items[productId];
			if (!existing) return state;
			return {
				...state,
				items: {
					...state.items,
					[productId]: { product: existing.product, quantity },
				},
			};
		}
		case "REMOVE_ITEM": {
			const { productId } = action.payload;
			const next = { ...state.items };
			delete next[productId];
			return { ...state, items: next };
		}
		default:
			return state;
	}
}

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: { product } });
	const setQuantity = (productId, quantity) =>
		dispatch({ type: "SET_QUANTITY", payload: { productId, quantity } });
	const removeItem = (productId) => dispatch({ type: "REMOVE_ITEM", payload: { productId } });

	const totals = useMemo(() => {
		const itemsArray = Object.values(state.items);
		const totalItems = itemsArray.reduce((s, it) => s + it.quantity, 0);
		const totalAmount = itemsArray.reduce((s, it) => s + it.quantity * (it.product.price || 0), 0);
		return { totalItems, totalAmount };
	}, [state.items]);

	return (
		<CartContext.Provider
			value={{ items: state.items, addItem, setQuantity, removeItem, ...totals }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
};

export default CartContext;
