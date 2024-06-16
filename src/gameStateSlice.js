import { createSlice } from "@reduxjs/toolkit";
import words from "./data/words";
import keys from "./data/keys";

const gameStateSlice = createSlice({
    name: "gameState",
    initialState: {
        word: "",
        activeRow: 0,
        prevWords: [],
        gameWon: false,
        answer: words[Math.floor(Math.random() * words.length)].toUpperCase(),
        isGameRunning: true,
        correctLetters: [],
        semiCorrectLetters: [],
    },
    reducers: {
        newLetter: (state, action) => {
            const key = action.payload;
            switch (key) {
                case "ENTER":
                    if (state.word.length === 5) {
                        if (state.word === state.answer) {
                            state.isGameRunning = false;
                            state.gameWon = true;
                        } else if (state.activeRow === 4) {
                            state.isGameRunning = false;
                        } else if (
                            !state.prevWords.includes(state.word) &&
                            words.includes(state.word.toLowerCase())
                        ) {
                            state.activeRow += 1;
                            state.prevWords.push(state.word);
                            for (let i = 0; i < 5; i++) {
                                if (state.word[i] === state.answer[i]) {
                                    state.correctLetters.push(state.word[i]);
                                } else if (
                                    state.answer.includes(state.word[i])
                                ) {
                                    state.semiCorrectLetters.push(
                                        state.word[i]
                                    );
                                }
                            }
                            state.word = "";
                        }
                    }
                    break;
                case "BACKSPACE":
                    state.word = state.word.slice(0, -1);
                    break;
                default:
                    if (keys.includes(key) && state.word.length < 5) {
                        state.word += key;
                    }
                    break;
            }
        },
    },
});

export const { newLetter } = gameStateSlice.actions;
export default gameStateSlice.reducer;
