import { useState } from "react";
import Modal from "../../ui/modal";

const FormModal = ({ButtonComponent, FormComponent, title}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const Button = ButtonComponent();
    const Form = FormComponent();

    return (
        <div>
            <Button className={'mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'} onClick={() => {setIsModalOpen(true)}} />

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)} title={title}>
                    <Form closeModal={() => setIsModalOpen(false)} />
                </Modal>
            )}
        </div>
    );

}

export default FormModal;