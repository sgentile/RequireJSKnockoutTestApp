require(['jquery','knockout', 'appViewModel'], function($, ko, appViewModel) {
    $(function(){
    	ko.applyBindings(new appViewModel());
    });
});