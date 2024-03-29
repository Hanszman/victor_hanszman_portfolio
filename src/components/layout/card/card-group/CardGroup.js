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
                {props.children}
            </div>
            <div className='row'>
                {
                    props.arrayObject && props.arrayObject.length > 0 && props.arrayObject.map((item) => (
                        <div
                            id={item.code}
                            key={item.code}
                            title={t(item.name) ? t(item.name) : item.name}
                            className={`card cardClass ${props.classCard}`}
                        >
                            <h3 className='cardTitle'>{t(item.name) ? t(item.name) : item.name}</h3>
                            <div className='cardBody'>
                                <div className={`principal ${props.classPosition}`}>
                                    {
                                        item.imgIcon &&
                                        <img
                                            className={`${props.classImg}`}
                                            src={require(`../../../../assets/img/${item.imgIcon}`)}
                                            alt={t(item.name) ? t(item.name) : item.name}
                                        />
                                    }
                                    {
                                        props.arrayDetails && props.arrayDetails.length > 0 && props.arrayDetails.map((detail) => (
                                            <p
                                                key={detail.detail}
                                                className='text'>
                                                <span className='boldText'>
                                                    {t(detail.detail) ? t(detail.detail) : detail.detail}:&nbsp;
                                                </span>
                                                {formatTypeDetail(detail.type, item[detail.detail])}
                                            </p>
                                        ))
                                    }
                                </div>
                                <div className='detailList'>
                                    {
                                        props.arrayLists && props.arrayLists.length > 0 && props.arrayLists.map((list, index) => (
                                            <CardList
                                                key={index}
                                                item={item}
                                                arrayList={list}
                                            >
                                            </CardList>
                                        ))
                                    }
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