import { createSlice } from '@reduxjs/toolkit';

export const doorLinks = createSlice({
    name: "doorLinks",
    initialState: {
        discord: false,
        twitch: false,
        reddit: false
    },
    reducers: {
        showDiscord: (state) => {
            state.discord = true;
            console.log('show reducer clicked for discord:' + state.discord);
        },
        showTwitch: (state) => {
            state.twitch = true;
            console.log('show reducer clicked for twitch:' + state.twitch);
        },
        showReddit: (state) => {
            state.reddit = true;
            console.log('show reducer clicked for reddit:' + state.reddit);
        },
        hideDiscord: (state) => {
            state.discord = false;
            console.log('hide reducer clicked for discord:' + state.discord);
        },
        hideTwitch: (state) => {
            state.twitch = false;
            console.log('hide reducer clicked for twitch:' + state.twitch);
        },
        hideReddit: (state) => {
            state.reddit = false;
            console.log('hide reducer clicked for reddit:' + state.reddit);
        }
    }
});

export const { showDiscord, showTwitch, showReddit, hideDiscord, hideReddit, hideTwitch } = doorLinks.actions;
export default doorLinks.reducer;