'use strict';

const ImgResult = function (imgLink) {
    var imgWrapperDiv;

    const _init = function () {
        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', imgLink);

        imgWrapperDiv = document.createElement('div');
        imgWrapperDiv.className = 'table-cell';
        imgWrapperDiv.appendChild(imgElement);
    }();

    const getElement = function () {
        return imgWrapperDiv;
    };

    const remove = function () {
        imgWrapperDiv.remove();
    };

    return {
        getElement : getElement,
        remove     : remove
    }
};