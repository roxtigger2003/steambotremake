Object.prototype.extend = function(obj) {
	var result_object = this.clone();

	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			result_object[i] = obj[i];
		}
	}
	return result_object;
};

Object.prototype.clone = function() {
    if (null == this || "object" != typeof this) return this;
    var copy = this.constructor();
    for (var attr in this) {
        if (this.hasOwnProperty(attr)) copy[attr] = this[attr];
    }
    return copy;
};

module.exports = {
	get_date_formated_filesystem: function() {
		var date = new Date().toISOString();
	    date = date.replace(/-/gi, "_");
	    date = date.replace(/:/gi, "_");
	    date = date.replace(/T/gi, "__");
	    date = date.slice(0, 20);
	    return date;
	},
	get_date_formated: function() {
	    var date = new Date();
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var time = this.prepend_zero(day) + "/"  + this.prepend_zero(month) + "/" + year + " " + this.prepend_zero(hours) + ":" + this.prepend_zero(minutes) + ":" + this.prepend_zero(seconds);
		return time;
	},
	strip_html: function(html) {
	    html=html.replace(/<br>/gi, "\n");
	    html=html.replace(/<p.*>/gi, "\n");
	    html=html.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ");
	    html=html.replace(/<(?:.|\s)*?>/g, "");
	    return html;
	},
	print_logo: function() {
		console.log("Remake and vietsub by Catalizcs");
		console.log("Day khong phai la soure goc!");
		console.log("follow me at: https://facebook.com/cataliz2k");
	}, 
	prepend_zero: function(value) {
		value = parseInt(value, 10);
		if (value < 10) {
			value = "0" + value;
		}
		return value;
	},
	get_time_seconds: function() {
		var seconds = new Date() / 1000;
		return parseInt(seconds, 10);
	}

};

