import { UserList } from '../fakeData.js';

export const resolvers = {
	Query: {
		users: () => {
			return UserList;
		},
		user: (parent, args) => {
			const user = UserList.find((user) => user.id === Number(args.id));
			return user;
		},
	},
};
