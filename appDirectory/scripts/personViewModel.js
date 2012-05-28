define(['knockout', 'item', 'customBindingHandlers/hasFocus'], function(ko, Item) {
	var PersonViewModel = function(){
		this.firstName = ko.observable('Bert');
        this.editingName = ko.observable();
        
        this.firstNameCaps = ko.computed(function() {
            return this.firstName().toUpperCase();
        }, this);
	};
	
	return PersonViewModel;
});
