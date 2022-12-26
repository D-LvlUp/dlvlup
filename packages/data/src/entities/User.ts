import { Column, Entity } from 'typeorm';

@Entity({ name: 'users_auth' })
export class Users {
	constructor (_user: any) {
		Object.assign(this, _user);
	}

	@Column({ nullable:false })
		id: string;

	@Column({ length: 80, nullable:false })
		username: string;

	@Column({ length: 150, nullable: false })
		email: string;

	@Column({ length: 250 })
		fullname: string;

	@Column({ length: 50 })
		role: string;

	@Column({ nullable: false })
		password: string;

	@Column()
		lastLogin: Date;

	@Column()
	readonly createdAt: Date;

	@Column()
	readonly updated_at: Date;
}
