let users = [
	{id: 1, name: 'Mickhael', age: 41},
	{id: 2, name: 'Tatiana', age: 39},
	{id: 3, name: 'Alexander', age: 15},
	{id: 4, name: 'Mariy', age: 9},
	{id: 5, name: 'Ilia', age: 6}
]

users.push({id: 6, name: 'girlName', age: 0})

const getUsers = () => {
	return users.sort(function(a, b) {
		return a.age - b.age
	})
}

console.log(getUsers())