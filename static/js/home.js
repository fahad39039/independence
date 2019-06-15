var ViewModel = function(){
	var self = this;
	self.userName = ko.observable("");
	self.submit = function(){
		var user_data = {
			"name": self.userName()
		}

		$.ajax({
			url: "./",
			data: JSON.stringify(user_data),
			type: 'POST',
			dataType: 'json',
			contentType: 'appliaction/json',
			success: function(response){
				window.location = "/"+user_data['name'];
				console.log(response);
			},
			error: function(error) {
				// body...
			}
		})
	}
}

ko.applyBindings(new ViewModel());