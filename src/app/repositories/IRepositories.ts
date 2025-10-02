interface IRepository{
    findAll?: () => any
    findOne?: () => any
    create?: () => any
    update?: () => any
}

interface IRepositoryCount {
    count: number
}

interface IRepositoryParam {
    q?: {
        kd_user?: string
    }
    t?: any
}

export { IRepository, IRepositoryCount, IRepositoryParam }