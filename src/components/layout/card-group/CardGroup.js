// Imports
import './CardGroup.css';
import { useTranslation } from 'react-i18next';
import { sumAges, formatDateString } from '../../../utils/Utils';

// Component
function CardGroup(props) {
    // Declarations
    const { t } = useTranslation();

    // Functions
    function arraysComparation(listObject, listCompare) {
        const finalArray = [];
        listObject && listObject.length > 0 && listObject.map((object) => {
            listCompare && listCompare.length > 0 && listCompare.map((compare) => {
                compare.code === object &&
                finalArray.push(compare);
            });
        });
        return finalArray;
    }

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
                                    src={require(`../../../assets/img/${item.imgIcon}`)}
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
                                {
                                    props.arrayLists && props.arrayLists.list && props.arrayLists.list.length > 0 && props.arrayLists.title &&
                                    <p className='text boldText'>
                                        {t(props.arrayLists.title) ? t(props.arrayLists.title) : props.arrayLists.title}:
                                    </p>
                                }
                                {
                                    props.arrayLists && props.arrayLists.list && props.arrayLists.list.length > 0 && props.arrayLists.list.map((list) => (
                                        <div key={list.name}>
                                            {
                                                arraysComparation(item[list.object], list.compare) &&
                                                arraysComparation(item[list.object], list.compare).length > 0 &&
                                                <p className='text'>
                                                    {t(list.name) ? t(list.name) : list.name}:
                                                </p>
                                            }
                                            <div className={list.class}>
                                                {
                                                    arraysComparation(item[list.object], list.compare) &&
                                                    arraysComparation(item[list.object], list.compare).length > 0 &&
                                                    arraysComparation(item[list.object], list.compare).map((comparedItem) => (
                                                        <span
                                                            id={comparedItem.code}
                                                            key={comparedItem.code}
                                                            title={comparedItem.name}
                                                        >
                                                            {
                                                                comparedItem.imgIcon &&
                                                                <img
                                                                    className='cardImgIcon'
                                                                    src={require(`../../../assets/img/${comparedItem.imgIcon}`)}
                                                                    alt={comparedItem.name}
                                                                />
                                                            }
                                                        </span>
                                                    ))
                                                }
                                            </div>
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