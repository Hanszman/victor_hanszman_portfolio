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

const formatList = (title, list, group, nameObject, classGroup) => {
    const newObject = {};
    const newList = [];
    if (group !== '') {
        for (let i = 0; i < list.length; i++) {
            if (!newObject.hasOwnProperty(list[i][group])) {
                newObject[list[i][group]] = [];
            }
            newObject[list[i][group]].push(list[i]);
        }
    } else {
        newObject['Full'] = [];
        for (let i = 0; i < list.length; i++) {
            newObject['Full'].push(list[i]);
        }
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
        group: group !== '' ? true : false,
        list: newList
    }
    return result;
}

const transformDate = (dateString = '') => {
    const newDate = dateString ? new Date(dateString) : new Date();
    const date = new Date(newDate.toISOString().slice(0, -1));
    return date;
}

const formatDateString = (dateString) => {
    const date = transformDate(dateString);
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
    const endDate = transformDate(interval.endDate);
    const startDate = transformDate(interval.startDate);
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
            objectSum[intervalArray[i].environment] = stringSumYears + ' ' + i18n.t('And') + ' ' + stringSumMonths;
        } else if (sumMonths <= 0 && sumYears > 0) {
            objectSum[intervalArray[i].environment] = stringSumYears;
        } else {
            objectSum[intervalArray[i].environment] = stringSumMonths;
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

const getChartObject = (labelsArray, refCodeArray, dataSetLabelsArray, dataSetRefArray, refIsSubItem = false, pieChart = false) => {
    let result;
    let labelsResult = [];
    let dataSetsResult = [];
    for (let i = 0; i < labelsArray.length; i++) {
        labelsResult.push(labelsArray[i]);
    }

    if (!pieChart) {
        for (let i = 0; i < dataSetLabelsArray.length; i++) {
            let objectData = {};
            objectData.label = dataSetLabelsArray[i].name;
            objectData.data = [];
            for (let j = 0; j < refCodeArray.length; j++) {
                let filterData = refIsSubItem
                    ? dataSetRefArray.filter(item => item[refCodeArray[j]].find(subItem => subItem === dataSetLabelsArray[i].code))
                    : dataSetRefArray.filter(item => item[refCodeArray[j]] === dataSetLabelsArray[i].code);
                objectData.data.push(filterData.length);
            }
            dataSetsResult.push(objectData);
        }
    } else {
        for (let i = 0; i < refCodeArray.length; i++) {
            let objectData = {};
            objectData.data = [];
            for (let j = 0; j < dataSetLabelsArray.length; j++) {
                let filterData = refIsSubItem
                    ? dataSetRefArray.filter(item => item[refCodeArray[i]].find(subItem => subItem === dataSetLabelsArray[j].code))
                    : dataSetRefArray.filter(item => item[refCodeArray[i]] === dataSetLabelsArray[j].code);
                objectData.data.push(filterData.length);
            }
            dataSetsResult.push(objectData);
        }
        
    }

    result = {
        labels: labelsResult,
        datasets: dataSetsResult
    };
    return result;
}

const getTranslatedObjectArrayNames = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(i18n.t(array[i].name));
    }
    return result;
}

// Exportation
export {
    addZeroes,
    formatList,
    transformDate,
    formatDateString,
    getAge,
    sumAges,
    getChartObject,
    getTranslatedObjectArrayNames
};