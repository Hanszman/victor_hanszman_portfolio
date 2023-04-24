// Imports
import './CardGroup.css';
import { useTranslation } from 'react-i18next';

// Component
function CardGroup(props) {
    // Declarations
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className='row'>
                {
                    props.arrayObject && props.arrayObject.length > 0 && props.arrayObject.map((item) => (
                        <div
                            id={item.code}
                            key={item.code}
                            title={t(item.name) ? t(item.name) : item.name}
                            className={`card ${props.classCard}`}
                        >
                            {
                                item.imgIcon &&
                                <img
                                    className={`card-img-top ${props.classImg}`}
                                    src={require(`../../../assets/img/${item.imgIcon}`)}
                                    alt={t(item.name) ? t(item.name) : item.name}
                                />
                            }
                            <div className='card-body'>
                                <h3 className='card-title highText'>{t(item.name) ? t(item.name) : item.name}</h3>
                                {
                                    props.arrayDetails && props.arrayDetails.length > 0 && props.arrayDetails.map((detail) => (
                                        <p
                                            key={detail}
                                            className='card-text text'>
                                            <span className='boldText'>
                                                {t(detail) ? t(detail) : detail}:&nbsp;
                                            </span>
                                            {t(item[detail]) ? t(item[detail]) : item[detail]}
                                        </p>
                                    ))
                                }
                                <div className={props.classChildren}>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

// Exportation
export default CardGroup;