// cardsSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCard, (state, action) => {
      state.push(action.payload);
    });
  },
});

// Selector: Encuentra una tarjeta por ID
export const selectCardById = (state, cardId) =>
  state.cards.find((card) => card.id === cardId);

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
