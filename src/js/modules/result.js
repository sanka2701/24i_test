function Result(wrapper) {
    this.wrapper = wrapper;
}

Result.prototype.getElement = function () {
    return this.wrapper;
};

Result.prototype.removeFromDom = function () {
    this.wrapper.remove();
};