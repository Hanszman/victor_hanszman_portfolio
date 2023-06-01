// Imports
import './Message.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Component
function Message(props) {
    // Declarations
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!props.msg)
            setVisible(false);
        else
            setVisible(true);
    }, [props.msg]);

    return (
        <div className='displayMessage'>
            {
                visible && (
                    <div className={`message ${props.type}`}>
                        {t(props.msg)}
                    </div>
                )
            }
        </div>
    );
}

// Exportation
export default Message;