define(['knockout', 'item'], function(ko, Item) {
	var ItemsViewModel = function(){
		var self = this;
		
		self.firstName = ko.observable();
		self.items =  ko.observableArray([new Item("one"), new Item("two")]);
		
		self.addItem = function(){
			self.items.push(new Item(self.firstName()));	
		}        
	};
	
	return ItemsViewModel;
});