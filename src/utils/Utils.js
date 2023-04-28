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

const getAge = (firstDate, lastDate = '') => {
    const today = lastDate ? new Date(lastDate) : new Date();
    const date = new Date(firstDate);
    let birthDate = new Date(date.toISOString().slice(0, -1));
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const groupByList = (list, group, nameObject, classGroup) => {
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
    return newList;
}

// Exportation
export {
    addZeroes,
    formatDateString,
    getAge,
    groupByList
};