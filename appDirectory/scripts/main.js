require(['jquery','knockout', 'appViewModel'], function($, ko, AppViewModel) {
    $(function(){
    	ko.applyBindings(new AppViewModel());
    });
});