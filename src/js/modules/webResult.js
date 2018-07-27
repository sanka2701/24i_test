'use strict';

function WebResult(data) {
    this.wrapper = document.createElement('div');

    const _init = function () {
        var pageLink = data.formattedUrl;
        var snippet  = data.snippet;
        var title    = data.title;

        var titleElement = document.createElement('h4');
        titleElement.innerText = title;

        var linkElement  = document.createElement('a');
        linkElement.innerText  = pageLink;
        linkElement.setAttribute('href', pageLink);

        var snippetElement = document.createElement('div');
        snippetElement.innerText = snippet;

        this.wrapper.className = 'table-cell';
        this.wrapper.appendChild(titleElement);
        this.wrapper.appendChild(linkElement);
        this.wrapper.appendChild(snippetElement);
    }.bind(this)();

    Result.call(this, this.wrapper);
}

WebResult.prototype = Object.create(Result.prototype);
WebResult.prototype.constructor = WebResult;