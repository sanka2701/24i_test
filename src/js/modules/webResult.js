'use strict';

var WebResult = function (data) {
    var webWrapperDiv;

    const init = function() {
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

        webWrapperDiv = document.createElement('div');
        webWrapperDiv.className = 'table-cell';
        webWrapperDiv.appendChild(titleElement);
        webWrapperDiv.appendChild(linkElement);
        webWrapperDiv.appendChild(snippetElement);
    }();

    const getElement = function () {
        return webWrapperDiv;
    };

    const remove = function () {
        webWrapperDiv.remove();
    };

    return {
        getElement : getElement,
        remove     : remove
    }
};

// function WebResult(data) {
//     Result.call(document.createElement('div'));
//
//     const init = function () {
//         var pageLink = data.formattedUrl;
//         var snippet  = data.snippet;
//         var title    = data.title;
//
//         var titleElement = document.createElement('h4');
//         titleElement.innerText = title;
//
//         var linkElement  = document.createElement('a');
//         linkElement.innerText  = pageLink;
//         linkElement.setAttribute('href', pageLink);
//
//         var snippetElement = document.createElement('div');
//         snippetElement.innerText = snippet;
//
//         this.wrapper.className = 'table-cell';
//         this.wrapper.appendChild(titleElement);
//         this.wrapper.appendChild(linkElement);
//         this.wrapper.appendChild(snippetElement);
//     }.bind(this)()
// }
//
// WebResult.prototype = Object.create(Result);