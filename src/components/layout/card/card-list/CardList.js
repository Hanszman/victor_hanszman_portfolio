// Imports
import './CardList.css';
import { useTranslation } from 'react-i18next';

// Component
function CardList(props) {
    // Declarations
    const { t } = useTranslation();

    // Functions
    function arraysComparation(listObject, listCompare) {
        const finalArray = [];
        listObject && listObject.length > 0 && listObject.map((object) => {
            if (object) {
                listCompare && listCompare.length > 0 && listCompare.map((compare) => {
                    if (compare) {
                        compare.code === object &&
                        finalArray.push(compare);
                    }
                });
            }
        });
        return finalArray;
    }

    function showHighText(arrayList) {
        if (arrayList.list.length === 1 && arraysComparation(props.item[arrayList.list[0].object], arrayList.list[0].compare).length <= 0) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div>
            {
                props.arrayList &&
                props.arrayList.list &&
                props.arrayList.list.length > 0 &&
                props.arrayList.title &&
                showHighText(props.arrayList) &&
                <p className='text boldText'>
                    {t(props.arrayList.title) ? t(props.arrayList.title) : props.arrayList.title}:
                </p>
            }
            {
                props.arrayList &&
                props.arrayList.list &&
                props.arrayList.list.length > 0 &&
                props.arrayList.list.map((list) => (
                    <div key={list.name}>
                        {
                            props.arrayList.group &&
                            arraysComparation(props.item[list.object], list.compare) &&
                            arraysComparation(props.item[list.object], list.compare).length > 0 &&
                            <p className='text'>
                                {t(list.name) ? t(list.name) : list.name}:
                            </p>
                        }
                        <div className={list.class}>
                            {
                                arraysComparation(props.item[list.object], list.compare) &&
                                arraysComparation(props.item[list.object], list.compare).length > 0 &&
                                arraysComparation(props.item[list.object], list.compare).map((comparedItem) => (
                                    <span
                                        id={comparedItem.code}
                                        key={comparedItem.code}
                                        title={comparedItem.name}
                                    >
                                        {
                                            comparedItem.imgIcon &&
                                            <img
                                                className='cardImgIcon'
                                                src={require(`../../../../assets/img/${comparedItem.imgIcon}`)}
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
    );
}

// Exportation
export default CardList;