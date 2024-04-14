import AnswerOnAlert from "./AnswerOnAlert";
import { motion } from "framer-motion";

const FinalAlert = (props) => {
    const win = props.win;
    return (
        <div className="absolute flex align-middle justify-center font-Poppins w-[100%] h-[100%] bg-main-bg/90">
            <motion.div
                className="flex flex-col items-center absolute w-[20rem] top-[10em] h-[50%] bg-[#3F3F42] rounded-md border-gray-200 border-2"
                animate={{
                    scale: [1, 1.1, 1],
                    transition: { ease: "easeOut", duration: 0.5 },
                }}
            >
                <h1 className="text-white text-4xl font-Poppins p-5 pt-8">
                    {win ? "You Win" : "You Lose"}
                </h1>
                <h2 className="text-white text-2xl font-Poppins p-5">
                    {win ? "Congratulations!" : "The word was:"}
                </h2>
                {win ? "" : <AnswerOnAlert answer={props.answer} />}
            </motion.div>
        </div>
    );
};

export default FinalAlert;
