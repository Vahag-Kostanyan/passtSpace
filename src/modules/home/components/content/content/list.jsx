import { useContext } from "react";
import { StateContext } from "../../../index.jsx";
import Loading from "../../../../../ui/loading.jsx";
import { convertDateTime } from "../../../../../helpers/date.js";
import useLongPress from "../../../../../hooks/useLongPress.js";
import { isLink } from "../../../helpers/isLink.js";

const List = ({RightClickComponent}) => {
    const context = useContext(StateContext);
    const longPressHandlers = useLongPress(RightClickComponent, 1000);

    return (
        <ul className="flex flex-col-reverse items-end gap-4">
            {!context.state.isPastesLoading ? (
                <>
                    {context?.state?.pastes?.map(item => {
                        return <li
                            {...longPressHandlers}
                            onContextMenu={(e) => RightClickComponent(e, item)}
                            key={item.id}
                            className={`whitespace-pre-wrap p-2 px-3 bg-gray-200 rounded-xl flex flex-col gap-2 max-w-full select-none ${!context.state.isSmallScreen && 'max-w-2/3'}`}
                        >
                            <div className="word-break">{isLink(item.paste) ? 
                            (<a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"  target="_blank"  href={item.paste}>{item.paste}</a>) :
                            (<>{item.paste}</>)
                        }</div>
                            <div className="flex justify-end text-xs" >{convertDateTime(item.createdAt)}</div>
                        </li>
                    })}
                </>
            ) : (<div className="flex justify-center w-full"><Loading /></div>)}
        </ul>
    );
}

export default List;