// Imports
import './CardGroup.css';
import { useTranslation } from 'react-i18next';
import { sumAges, formatDateString } from '../../../../utils/Utils';
import CardList from '../card-list/CardList';

// Component
function CardGroup(props) {
    // Declarations
    const { t } = useTranslation();

    function formatTypeDetail(type, detail) {
        let result = '';
        if (type === 'date') {
            result = detail ? formatDateString(detail) : `(${t('currently')})`;
        } else if (type === 'interval') {
            result = detail && detail.length && detail.length > 0 ? sumAges(detail).full : '';
        } else {
            result = t(detail) ? t(detail) : detail;
        }
        return result;
    }

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
                                    src={require(`../../../../assets/img/${item.imgIcon}`)}
                                    alt={t(item.name) ? t(item.name) : item.name}
                                />
                            }
                            <div className='card-body'>
                                <h3 className='card-title highText'>{t(item.name) ? t(item.name) : item.name}</h3>
                                {
                                    props.arrayDetails && props.arrayDetails.length > 0 && props.arrayDetails.map((detail) => (
                                        <p
                                            key={detail.detail}
                                            className='card-text text'>
                                            <span className='boldText'>
                                                {t(detail.detail) ? t(detail.detail) : detail.detail}:&nbsp;
                                            </span>
                                            {formatTypeDetail(detail.type, item[detail.detail])}
                                        </p>
                                    ))
                                }
                                <CardList
                                    item={item}
                                    arrayLists={props.arrayLists}
                                >
                                </CardList>
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