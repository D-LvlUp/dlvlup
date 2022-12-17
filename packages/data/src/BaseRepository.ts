import { DataSource, EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import 'reflect-metadata';

export abstract class BaseRepository<T extends ObjectLiteral> {
	protected readonly _dataRepository: Repository<T>;

	constructor(_db: DataSource, Context: EntityTarget<T>) {
		this._dataRepository = _db.getRepository(Context);
	}

	async AddAsync(item: QueryDeepPartialEntity<T>) {
		await this._dataRepository.insert(item);
		return this;
	}

	async AddRangeAsync(item: QueryDeepPartialEntity<T>[]) {
		await this._dataRepository.insert(item);
		return this;
	}

	async GetAsync(query?: Func<Queryable<T>, Queryable<T>>): Promise<T> {
		let data = await this._dataRepository.find();
		let Querier = new Queryable<T>(data);

		if(query != undefined) {
			return query(Querier).data[0];
		} else {
			return data[0];
		} //Return first Result meeting the Criteria.
	}

	async GetRangeAsync(query?: Func<Queryable<T>, Queryable<T>>, distinct?: boolean): Promise<T[]> {
		let data = await this._dataRepository.find();
		let Querier = new Queryable<T>(data);

		if(query != undefined) {
			return query(Querier).data;
		} else {
			return data;
		} //Return Results meeting the Criteria.
	}

}

class Queryable<T> {
	constructor(EntityData: T[]) {
		this.data = EntityData;
	}
	public data: T[];

	Where(expression: (value: T) => boolean): this {
		this.data = this.data.filter(expression);
		return this;
	}

	Select(key: (value: T) => T): this {
		this.data = this.data.map(key);
		return this;
	}

	OrderBy(order: (value: T) => T[]): this {
		throw new Error('Method not implemented');
	}
}

interface Func<T, TResult> {
	(item: T): TResult;
}
