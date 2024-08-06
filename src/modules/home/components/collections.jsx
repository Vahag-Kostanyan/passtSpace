import FormModal from "../../../components/modals/formModal";
import { changeCollection, getCollections } from "../actions";
import AddButton from "../ui/addButton";
import AddCollectionForm from "../components/form/addCollectionForm";
import { useEffect, useState } from "react";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { getAndCheckUser } from "../../../actions/currentUser";
import { useQueryParams } from "../../../hooks/useQueryParams";

const Collections = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);
    const [authUser, setAuthUser] = useState(null);
    const [data, setData] = useState([]);
    const queryParams = useQueryParams()    
    getAndCheckUser((user) => setAuthUser(user));

    useWindowResize(setIsSmallScreen);

    useEffect(() =>  {
        ( async () => {
            if(authUser){
                await getCollections(authUser).then(res => {
                    setData(res);
                })
            }
        })();
    }, [authUser, queryParams]);


    return (
        <div className={`flex-4 p-3 border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg flex flex-col gap-2 min-w-56 ${isSmallScreen ? "w-full" : "max-w-56"}`}>
            <div className="flex flex-col  border-b-2 pb-2">
                <FormModal ButtonComponent={() => AddButton} FormComponent={() => AddCollectionForm} title={'New Collection'} />
            </div>
            <div className="flex flex-col gap-2 pt-4">
                {data && data.length > 0 ? (
                    <>
                        {data.map(item => {
                            return <div key={item.id} onClick={() => changeCollection(item.id)} className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2 ">{item.name}</div>
                        })}
                    </>
                ) : (<></>)}
            </div>
        </div>
    );
}

export default Collections;