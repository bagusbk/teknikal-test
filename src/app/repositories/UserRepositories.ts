import { dbConnection as db } from '../../app/config/knex_config'
import { IUserData, IUserRepositoryParam } from '../models/repository_models/IUserRepositoryModel'
import { IRepository } from './IRepositories'

export const table = 'table_user'
export const tableAlias = 'tu'
export const tableWithAlias = `${table} as ${tableAlias}`

class UserRepositories implements IRepository {
    static find(param: IUserRepositoryParam) {
        const query = db<IUserData>(tableWithAlias)
        const select: any[] = [`${tableAlias}.*`]

        query.select(select)
        return query
    }

    static findAll(
        param: IUserRepositoryParam,
    ): Promise<IUserData[]>{
        return this.find(param)
    }

    static findOne(
        param: IUserRepositoryParam,
    ): Promise<IUserData | undefined>{
        return this.find(param).first()
    }

    static create(data: IUserData): any {
        const query = db<any>(table)

        query.insert(data)

        return query
    }

    static update(
        data: IUserData,
        where: IUserRepositoryParam,
    ): any {
        const query = db(table).update(data)

        if(where.q?.kd_user){
            query.andWhere('kd_user', where.q.kd_user)
        }

        return query
    }

    static delete(where: IUserRepositoryParam): any {
        const query = db(table).delete()

        if(where.q?.kd_user){
            query.andWhere('kd_user', where.q.kd_user)
        }

        return query
    }
}

export { UserRepositories }