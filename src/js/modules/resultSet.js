'use strict';

const ResultSet = function(parentDiv, childPrototype, pageSize) {
    const itemsPerPage = pageSize || 9;
    const container = parentDiv;
    const child     = childPrototype;
    var resultSet = [];

    const _removeResultsFromDOM = function () {
        for(var i = 0; i< resultSet.length; i++) {
            resultSet[i].remove();
        }
    };

    const _clearResultSet = function() {
        while(resultSet.length) {
            resultSet.shift().remove();
        }
    };

    const _render = function (index) {
        const lowLimit  = index * itemsPerPage;
        const highLimit = lowLimit + itemsPerPage;
        const subSet = resultSet.slice(lowLimit, highLimit);

        for(var i = 0; i < subSet.length; i++) {
            container.appendChild(subSet[i].getElement())
        }
    };

    const setResults = function(items) {
        if (resultSet.length !== 0) {
            _clearResultSet();
        }

        for(var i = 0; i < items.length; i++) {
            var imgResult = new child(items[i]);
            resultSet.push(imgResult);
        }

        _render(0);
    };

    const setPage = function (pageIndex) {
        _removeResultsFromDOM();
        _render(pageIndex);
    };

    return {
        setResults : setResults,
        setPage    : setPage
    }
};