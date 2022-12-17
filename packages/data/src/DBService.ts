import { BaseRepository } from './BaseRepository';
import { DBEntities } from './entities';
import { ObjectLiteral } from 'typeorm';

export abstract class DBService<T extends ObjectLiteral> {
	protected constructor() {}

	public _entities = DBEntities;

	public Repository: BaseRepository<T>;

	public async Setup() {}
}
