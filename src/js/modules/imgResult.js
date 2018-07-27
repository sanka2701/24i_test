'use strict';

function ImgResult(imgLink) {
    this.imgWrapperDiv = document.createElement('div');

    const _init = function () {
        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', imgLink);

        this.imgWrapperDiv.className = 'table-cell';
        this.imgWrapperDiv.appendChild(imgElement);
    }.bind(this)();

    Result.call(this, this.imgWrapperDiv);
}

ImgResult.prototype = Object.create(Result.prototype);
ImgResult.prototype.constructor = ImgResult;