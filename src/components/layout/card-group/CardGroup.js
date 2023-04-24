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
                                {
                                    props.arrayLists && props.arrayLists.length > 0 && props.arrayLists.map((list) => (
                                        <div
                                            key={list.object}
                                            className={list.class}
                                        >
                                            {
                                                item[list.object] && item[list.object].length > 0 && item[list.object].map((object) => (
                                                    list.compare && list.compare.length > 0 && list.compare.map((compare) => (
                                                        compare.code === object &&
                                                        <span
                                                            id={compare.code}
                                                            key={compare.code}
                                                            title={compare.name}
                                                        >
                                                            {
                                                                compare.imgIcon &&
                                                                <img
                                                                    className='cardImgIcon'
                                                                    src={require(`../../../assets/img/${compare.imgIcon}`)}
                                                                    alt={compare.name}
                                                                />
                                                            }
                                                        </span>
                                                    ))
                                                ))
                                            }
                                        </div>
                                    ))
                                }
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