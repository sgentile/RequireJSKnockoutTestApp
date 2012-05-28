// Main viewmodel class
define(['knockout', 'customBindingHandlers/hasFocus'], function(ko) {
    return function appViewModel() {
        this.firstName = ko.observable('Bert');
        this.editingName = ko.observable();
        this.firstNameCaps = ko.computed(function() {
            return this.firstName().toUpperCase();
        }, this);
    };
});