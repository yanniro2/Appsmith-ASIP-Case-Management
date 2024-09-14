export default {
	filterUsers: (data = testingAPI.data) => {
		let users = data;
		// make sure searching field name , title for geting match values
		if (Input11.text != '') {
			users = users.filter(u => u.name.toLowerCase().startsWith(Input11.text.toLowerCase()));
		}
		return users;
	}
}
