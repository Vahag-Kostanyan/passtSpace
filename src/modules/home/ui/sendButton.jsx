import SendPasteSVG from "../../../svg/sendPasteSVG";

const SendButton = () => {
    return (
        <button className="text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-800 font-medium rounded-full text-sm  text-center inline-flex items-center me-2">
            <SendPasteSVG/>
        </button>
    );
}

export default SendButton;