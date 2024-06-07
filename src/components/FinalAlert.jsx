import { motion } from "framer-motion";

const FinalAlert = (props) => {
    const win = props.win;

    const heading = win ? "You Win" : "You Lose";
    const message = win ? "Congratulations!" : "The word was:";

    const AnswerOnAlert = props.answer.split("").map((letter, index) => {
        return (
            <div
                key={index}
                className="flex items-center justify-center bg-[#538d4e] h-12 w-12 mx-1 text-white text-2xl rounded-sm"
            >
                {letter}
            </div>
        );
    });

    return (
        <div className="absolute flex align-middle justify-center font-Poppins w-[100%] h-[100%] bg-main-bg/90">
            <motion.div
                className="flex flex-col items-center absolute w-[20rem] top-[10em] h-[50%] bg-[#3F3F42] rounded-md border-gray-200 border-2"
                animate={{
                    scale: [1, 1.1, 1],
                    transition: { ease: "easeOut", duration: 0.5 },
                }}
            >
                <h1 className="p-5 pt-8 text-4xl text-white font-Poppins">
                    {heading}
                </h1>
                <h2 className="p-5 text-2xl text-white font-Poppins">
                    {message}
                </h2>
                <div className="flex flex-row w-[15em] justify-between">
                    {AnswerOnAlert}
                </div>
            </motion.div>
        </div>
    );
};

export default FinalAlert;
