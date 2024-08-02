import { useState } from "react";
import Modal from "../../ui/modal";

const FormModal = ({ButtonComponent, FormComponent, title}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const Button = ButtonComponent();
    const Form = FormComponent();

    return (
        <div>
            <Button onClick={() => {setIsModalOpen(true)}} />

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)} title={title}>
                    <Form closeModal={() => setIsModalOpen(false)} />
                </Modal>
            )}
        </div>
    );

}

export default FormModal;