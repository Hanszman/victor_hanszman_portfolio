// Imports
import i18n from 'i18next';

// Functions
const addZeroes = (num, len) => {
    let numberWithZeroes = String(num);
    let counter = numberWithZeroes.length;
    while (counter < len) {
      numberWithZeroes = '0' + numberWithZeroes;
      counter++;
    }
    return numberWithZeroes;
};

const formatDateString = (dateString) => {
    const newDate = new Date(dateString);
    const date = new Date(newDate.toISOString().slice(0, -1));
    const day = addZeroes(date.getDate().toString(), 2);
    const month = addZeroes(date.getMonth() + 1, 2).toString();
    const year = date.getFullYear();
    const currentLang = i18n.language || window.localStorage.i18nextLng;
    let formatedDate = '';
    if (currentLang === 'en') {
        formatedDate = month + "/" + day + "/" + year;
    } else {
        formatedDate = day + "/" + month + "/" + year;
    }
    return formatedDate;
};

const getAge = (interval) => {
    const lastDate = interval.endDate ? new Date(interval.endDate) : new Date();
    const endDate = new Date(lastDate.toISOString().slice(0, -1));
    const firstDate = new Date(interval.startDate);
    const startDate = new Date(firstDate.toISOString().slice(0, -1));
    const monthDifference = endDate.getMonth() - startDate.getMonth();
    const ageMonths = monthDifference >= 0 ? monthDifference : 12 + monthDifference;
    let ageYears = endDate.getFullYear() - startDate.getFullYear();
    if (monthDifference < 0 || (monthDifference === 0 && endDate.getDate() < startDate.getDate())) {
        ageYears--;
    }
    return {ageMonths, ageYears};
}

const sumAges = (intervalArray) => {
    const objectSum = {};
    let fullMonths = 0;
    let fullYears = 0;
    for (let i = 0; i < intervalArray.length; i++) {
        let sumMonths = getAge(intervalArray[i]).ageMonths;
        let sumYears = getAge(intervalArray[i]).ageYears;
        let stringSumMonths = sumMonths !== 1 ? sumMonths + ' ' + i18n.t('Months') : sumMonths + ' ' + i18n.t('Month');
        let stringSumYears = sumYears !== 1 ? sumYears + ' ' + i18n.t('Years') : sumYears + ' ' + i18n.t('Year');
        if (sumMonths > 0 && sumYears > 0) {
            objectSum[intervalArray[i].type] = stringSumYears + ' ' + i18n.t('And') + ' ' + stringSumMonths;
        } else if (sumMonths <= 0 && sumYears > 0) {
            objectSum[intervalArray[i].type] = stringSumYears;
        } else {
            objectSum[intervalArray[i].type] = stringSumMonths;
        }

        let sumFullMonths = fullMonths + sumMonths;
        let monthDifference = sumFullMonths >= 12 ? 1 : 0;
        sumFullMonths = monthDifference === 1 ? sumFullMonths - 12 : sumFullMonths;
        let sumFullYears = fullYears + sumYears + monthDifference;
        fullMonths = sumFullMonths;
        fullYears = sumFullYears;
    }

    const stringFullMonths = fullMonths !== 1 ? fullMonths + ' ' + i18n.t('Months') : fullMonths + ' ' + i18n.t('Month');
    const stringFullYears = fullYears !== 1 ? fullYears + ' ' + i18n.t('Years') : fullYears + ' ' + i18n.t('Year');
    if (fullMonths > 0 && fullYears > 0) {
        objectSum['full'] = stringFullYears + ' ' + i18n.t('And') + ' ' + stringFullMonths;
    } else if (fullMonths <= 0 && fullYears > 0) {
        objectSum['full'] = stringFullYears;
    } else {
        objectSum['full'] = stringFullMonths;
    }

    return objectSum;
}

const groupByList = (title, list, group, nameObject, classGroup) => {
    const newObject = {};
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        if (!newObject.hasOwnProperty(list[i][group])) {
            newObject[list[i][group]] = [];
        }
        newObject[list[i][group]].push(list[i]);
    }
    Object.keys(newObject).forEach((item) => {
        if (newObject[item] && newObject[item].length > 0) {
            newList.push({
                name: item,
                class: classGroup,
                object: nameObject,
                compare: newObject[item]
            });
        }
    });
    const result = {
        title: title,
        list: newList
    }
    return result;
}

// Exportation
export {
    addZeroes,
    formatDateString,
    getAge,
    sumAges,
    groupByList
};