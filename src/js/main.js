'use strict';

var restApi      = null;
var imgResultSet = null;
var webResultSet = null;

window.addEventListener("DOMContentLoaded", function() {
  restApi = new RestApi();
  imgResultSet = new ResultSet(document.getElementById(Constants.IMG_RESULT_DIV_ID), ImgResult, Constants.IMG_PER_PAGE);
  webResultSet = new ResultSet(document.getElementById(Constants.WEB_RESULT_DIV_ID), WebResult, Constants.WEB_PER_PAGE)
}, false);

function onSearch() {
  const inputValue = document.getElementById(Constants.SEARCH_INPUT_ID).value;
  if(inputValue) {
    // restApi.executeQuery(inputValue, Constants.QUERY_TYPE_IMG, preProcessImgResult);
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
  addWebResultPagination(Math.ceil(items.length/ Constants.WEB_PER_PAGE))
}

function addWebResultPagination(pageCount) {
    console.log(pageCount)
}

function setPagination() {
    webResultSet.setPage(1);
}