import { IRepositoryParam } from "../../repositories/IRepositories"

interface IUserRepositoryParam extends IRepositoryParam {
    q?: {
        kd_user?: string
        username?: string
    }
}

interface IUserData {
    kd_user?: string
    username?: string
    password?: string
    nama?: string
    hak_akses?: string
    kd_klinik?: string
    kd_cabang?: string
}

export {
    IUserRepositoryParam,
    IUserData,
}