var Shape = function(){
    this.type ="shape";
}

Shape.prototype.get_type = function get_type(){
    return this.constructor;
};

module.exports = Shape;