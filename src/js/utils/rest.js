'use strict';

const RestApi = function () {

    function _buildImageQuery(searchedString) {
      return "&searchType=image&q=" + searchedString;
    }

    function _buildWebQuery(searchedString) {
      return "&q=" + searchedString;
    }

    function _getQuery(searchString, type) {
        switch (type) {
            case Constants.QUERY_TYPE_IMG:
                return _buildImageQuery(searchString);
            case Constants.QUERY_TYPE_WEB:
                return _buildWebQuery(searchString);
            default:
                console.error('Unsupported query type');
        }
    }

    function executeQuery(searchString, type, onReadyStateCallback) {
      const query = _getQuery(searchString, type);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          var responseObject = JSON.parse(xhttp.response);
          onReadyStateCallback(responseObject.items);
        }
      };
      xhttp.open("GET", Constants.GOOGLE_API_URL + query, true);
      xhttp.send();
    }

    return {
        executeQuery : executeQuery
    }
};