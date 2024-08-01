import { useState } from "react";
import Modal from "../../ui/modal";

const FormModal = (prop) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Button = prop.ButtonComponent;
    // const Form = prop.FormComponent;

    console.log(Button);
    return (
        <div>
            <Button onClick={() => setIsModalOpen(true)} />

            {/* {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)} title={title}>
                    <Form closeModal={() => setIsModalOpen(false)} />
                </Modal>
            )} */}
        </div>
    );

}

export default FormModal;