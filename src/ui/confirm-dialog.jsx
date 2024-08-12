import Button from './button';
import XSVG from '../svg/xSVG';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useRef } from 'react';

const ConfirmDialog = ({
    title,
    message,
    onConfirm,
    closeDialog,
}) => {
    
    const ref = useRef();
    useOutsideClick(ref, null, null, closeDialog);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDialog();
        }
    })

    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-gray-500/10 p-2'>
            <div className='max-w-[500px] rounded-lg bg-white p-5' ref={ref}>
                <div className='flex justify-end'>
                    <button onClick={closeDialog}>
                        <XSVG/>
                    </button>
                </div>
                <h1 className='text-3xl mb-2'>{title}</h1>
                <p>{message}</p>

                <div className='mt-3 flex items-center justify-end gap-2'>
                    <Button title='Cancel' variant='secondary' onClick={closeDialog} />
                    <Button title='Confirm' variant='danger' onClick={onConfirm}/>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;