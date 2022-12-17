import { DataSource } from 'typeorm';
import { DBContext } from '../DBContext';

export interface IDBContext {
	dbIsConnected(): boolean;

	start(): Promise<DBContext>;

	get DBSource(): DataSource;

	set DB(src: DataSource);
}
