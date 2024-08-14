import { useContext } from "react";
import { StateContext } from "../../../index.jsx";
import Loading from "../../../../../ui/loading.jsx";
import { convertDateTime } from "../../../../../helpers/date.js";

const List = ({RightClickComponent}) => {
    const context = useContext(StateContext);

    return (
        <ul className="flex flex-col-reverse items-end gap-4">
            {!context.state.isPastesLoading ? (
                <>
                    {context?.state?.pastes?.map(item => {
                        return <li
                            onContextMenu={RightClickComponent}
                            key={item.id}
                            className={`p-2 px-3 bg-gray-200 rounded-xl flex flex-col gap-2 ${!context.state.isSmallScreen && 'max-w-2/3'}`}
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

export default List;