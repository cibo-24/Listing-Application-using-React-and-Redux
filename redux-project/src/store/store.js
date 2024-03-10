import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

// slice'ları topladığımız ana dizin.

export const store = configureStore({
    reducer: {
        form: formReducer,
        courses: courseReducer,
    },
});