// Main viewmodel class
define(['knockout', 'personViewModel', 'itemsViewModel'], function(ko, PersonViewModel, ItemsViewModel) {
    return function appViewModel() {
    	var self = this;
    	
    	//initialize just one PersonViewModel and one ItemsViewModel
    	self.personViewModel = new PersonViewModel();
    	self.itemsViewModel = new ItemsViewModel();
    	
    	//switcher mechanism:
        self.person = ko.observable(self.personViewModel); //initialize with this
        self.items = ko.observable(null);
        
        self.showItemsEnabled = ko.observable(true);
        self.showPersonEnabled = ko.observable(false);
        
        self.reset = function(){
        	self.personViewModel = new PersonViewModel();
        	self.itemsViewModel = new ItemsViewModel();
    		self.showPerson();
        }
        
        self.showItems = function(){
        	self.person(null);
        	self.items(self.itemsViewModel);
        
        	self.showItemsEnabled(false);	
        	self.showPersonEnabled(true);
        }
        
        self.showPerson = function(){
        	self.person(self.personViewModel);
        	self.items(null);
        	
        	self.showItemsEnabled(true);	
        	self.showPersonEnabled(false);
        }
    };
});