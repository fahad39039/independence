var ViewModel = function(){
	var self = this;
	self.userName = ko.observable("");
	self.getUrl = ko.observable(false);
	self.myUrl = ko.observable("");
	self.showMsg = ko.observable(false);
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
				self.getUrl(true);
				self.myUrl(window.location['href']+user_data['name']);
				console.log(response);
			},
			error: function(error) {
				// body...
			}
		})
	}
	self.copyUrl = function(){
		copyText = document.getElementById("url");
		copyText.select();
		document.execCommand("copy");
		self.showMsg(true);
	}
}

ko.applyBindings(new ViewModel());
