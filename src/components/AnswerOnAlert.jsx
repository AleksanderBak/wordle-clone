const AnswerOnAlert = ({ answer }) => {
    return (
        <div>
            <div className="flex flex-row w-[15em] justify-between">
                <div className="flex items-center justify-center bg-[#538d4e] h-12 w-12 mx-1 text-white text-2xl rounded-sm">
                    {answer[0]}
                </div>
                <div className="flex items-center justify-center bg-[#538d4e] h-12 w-12 mx-1 text-white text-2xl rounded-sm">
                    {answer[1]}
                </div>
                <div className="flex items-center justify-center bg-[#538d4e] h-12 w-12 mx-1 text-white text-2xl rounded-sm">
                    {answer[2]}
                </div>
                <div className="flex items-center justify-center bg-[#538d4e] h-12 w-12 mx-1 text-white text-2xl rounded-sm">
                    {answer[3]}
                </div>
                <div className="flex items-center justify-center bg-[#538d4e] h-12 w-12 mx-1 text-white text-2xl rounded-sm">
                    {answer[4]}
                </div>
            </div>
        </div>
    );
};

export default AnswerOnAlert;
