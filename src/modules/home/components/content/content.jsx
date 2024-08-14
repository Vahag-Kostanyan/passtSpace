import { convertDateTime } from "../../../../helpers/date.js";
import Loading from "../../../../ui/loading.jsx";
import { StateContext } from "../../index.jsx";
import { useContext } from "react";

const Content = () => {
    const context = useContext(StateContext);

    return (
        <ul className={`flex flex-col-reverse items-end gap-4 p-4 h-full px-8 ${!context.state.isLoading && '-mb-base  overflow-y-scroll '}`}>
            {!context.state.isPastesLoading ? (
                <>
                    {context?.state?.pastes?.map(item => {
                        return <li
                            key={item.id}
                            className={`p-2 px-3 bg-gray-200 rounded-xl max-w-2/3 flex flex-col gap-2`}
                        >
                            <div>{item.paste}</div>
                            <div className="flex justify-end text-xs" >{convertDateTime(item.createdAt)}</div>   
                        </li>
                    })}
                </>
            ) : (<div className="flex justify-center w-full"><Loading /></div>)}
        </ul>
    );
}

export default Content;