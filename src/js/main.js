'use strict';

var restApi      = null;
var imgResultSet = null;
var webResultSet = null;

window.addEventListener("DOMContentLoaded", function() {
  restApi = new RestApi();
  imgResultSet = new ResultSet(document.getElementById(Constants.IMG_RESULT_DIV_ID), ImgResult, Constants.IMG_PER_PAGE);
  webResultSet = new ResultSet(document.getElementById(Constants.WEB_RESULT_DIV_ID), WebResult, Constants.WEB_PER_PAGE)
}, false);

document.getElementById(Constants.SEARCH_INPUT_ID).onkeydown = function(event) {
    if (event && event.keyCode === 13) {
        onSearch();
    }
};

function onSearch() {
  const inputValue = document.getElementById(Constants.SEARCH_INPUT_ID).value;
  if(inputValue) {
    restApi.executeQuery(inputValue, Constants.QUERY_TYPE_IMG, preProcessImgResult);
    restApi.executeQuery(inputValue, Constants.QUERY_TYPE_WEB, preProcessWebResult);
  }
}

function preProcessImgResult(items) {
  const imgArr = items.map(function (item) {
    return item.image.thumbnailLink;
  });
  imgResultSet.setResults(imgArr);
}

function preProcessWebResult(items) {
  const webArr = items.map(function (item) {
    return item;
  });
  webResultSet.setResults(webArr);
  removePagination();
  addWebResultPagination(Math.ceil(items.length/ Constants.WEB_PER_PAGE))
}

function removePagination() {
    const indexes = document.getElementById(Constants.PAGINATION_DIV_ID).getElementsByClassName('page-index');
    while (indexes.length > 0) {
        indexes.shift().remove();
    }
}

function addWebResultPagination(pageCount) {
    const paginationDiv = document.getElementById(Constants.PAGINATION_DIV_ID);

    for(var i = 0; i< pageCount; i++) {
        var pageIndex = document.createElement('a');
        pageIndex.innerText = i + 1;
        pageIndex.className = 'page-index';
        pageIndex.setAttribute('pageIndex', i);
        pageIndex.onclick = function () {
            var index = this.getAttribute('pageIndex');
            setPagination(index);
        };

        paginationDiv.appendChild(pageIndex);
    }
}

function setPagination(index) {
    webResultSet.setPage(index);
}