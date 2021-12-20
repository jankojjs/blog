import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface ThemeState {
  themeName: "dark" | "light";
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeName: "dark",
  } as ThemeState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.themeName === "dark") {
        state.themeName = "light";
        document.querySelector(".dark")?.classList.add("light");
        document.querySelector(".dark")?.classList.remove("dark");
      } else {
        state.themeName = "dark";
        document.querySelector(".light")?.classList.add("dark");
        document.querySelector(".light")?.classList.remove("light");
      }
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const getTheme = (state: RootState) => state.theme.themeName;
// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
