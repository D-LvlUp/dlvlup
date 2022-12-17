import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
	constructor (_user: any) {
		Object.assign(this, _user);
	}

	@PrimaryGeneratedColumn('increment')
		id: number;

	@Column({ length: 100, nullable: false })
		email: string;

	@Column({ nullable: false })
		password: string;

	@Column({ length: 100, nullable:false })
		username: string;
}
