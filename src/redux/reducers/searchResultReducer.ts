import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Repo, SearchOption, User, createRepoData, createUserData } from "../../types";
import { env } from "../../env";

const { REACT_APP_BACKEND_URL } = env;

interface DataState {
    data: {
        totalCount: number;
        isCompleted: boolean;
        items: User[] | Repo[];
        type: "users" | "repositories";
    };
    loading: boolean;
    error: string | null;
}

interface FetchDataParams {
    type: SearchOption;
    keyword: string;
    page?: number;
    perPage?: number;
}

const initialState: DataState = {
    data: {
        totalCount: 0,
        isCompleted: false,
        items: [],
        type: "users",
    },
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async ({ keyword, type, page, perPage }: FetchDataParams, thunkAPI) => {
        try {
            const response = await axios.post(`${REACT_APP_BACKEND_URL}/api/search/`, {
                search_type: type,
                search_text: keyword,
                per_page: perPage ?? 12,
                page: page ?? 1
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data ?? 'An unknown error occurred');
        }
    }
);

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        eraseData: (state) => {
            state.data = initialState.data;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.data = initialState.data;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                const { isCompleted, items, type, totalCount } = action.payload;

                if (type !== "users" && type !== "repositories") {
                    state.data = initialState.data;
                    state.loading = false;
                    state.error = 'Invalid type';
                    return;
                }

                const typedItems = items.map((item: any) =>
                    type === "users" ? createUserData(item) : createRepoData(item)
                );

                state.data = {
                    isCompleted,
                    items: typedItems,
                    type,
                    totalCount,
                };
                state.loading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'An unknown error occurred';
            });
    },
});

export const { eraseData } = dataSlice.actions;
export default dataSlice.reducer;
