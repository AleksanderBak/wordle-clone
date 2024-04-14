import { React } from "react";
import AnswerRow from "./AnswerRow";
import { motion } from "framer-motion";

export default function AnswerBoard(props) {
    const rows = [];
    const showAlert = props.showAlert;
    for (let i = 0; i < 5; i++) {
        rows.push(
            <AnswerRow
                key={i}
                rowNum={i}
                activeRow={props.activeRow}
                word={props.word}
                prevWords={props.prevWords}
                answer={props.answer}
            />
        );
    }

    return (
        <>
            <div className="flex justify-center align-middle">
                {showAlert && (
                    <motion.div
                        className="absolute bg-orange-200 mt-8 py-2 px-4 rounded-sm font-Poppins"
                        animate={{ rotate: [0, 3, -3, 3, -3, 0] }}
                    >
                        Word not in dictionary
                    </motion.div>
                )}
            </div>
            <div className="w-[100%] flex flex-row items-center justify-center mt-5">
                <div className="flex flex-col">{rows}</div>
            </div>
        </>
    );
}
