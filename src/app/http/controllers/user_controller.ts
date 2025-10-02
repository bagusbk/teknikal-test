import { Response } from "express";
import { v4 as uuidV4 } from 'uuid'
import { IMainRequest } from "../requests/main_request";
import { IUserData } from "../../models/repository_models/IUserRepositoryModel";
import { hashSync } from 'bcryptjs'
import { UserRepositories } from "../../repositories/UserRepositories";
import { generateToken, IParamToken } from "../../config/jwt_config";

const createUser = async (req: IMainRequest, res: Response) => {
 const uuid = uuidV4()

 const userBody: IUserData = req.body
 const password = hashSync(userBody.password || 'password', 10)

 const savingData: IUserData = {
    kd_user: uuid,
    username: userBody.username,
    password: password,
    nama: userBody.nama,
    hak_akses: userBody.hak_akses,
    kd_klinik: userBody.kd_klinik,
    kd_cabang: userBody.kd_cabang,
 }

 const createData = await UserRepositories.create(savingData)
 return res.status(201).send({
        message: "User created successfully",
        data: savingData
    })
}

const updateUser =  async (req: IMainRequest, res: Response) => {
    const userId = String(req.params.id)
    const userData = await UserRepositories.findOne({
        q: {kd_user: userId}
    })

    if(!userData){
        return res.status(404).send('User not found')
    }

    const userBody: IUserData = req.body
    const updateData: IUserData = {
        username: userBody.username,
        nama: userBody.nama,
        hak_akses: userBody.hak_akses,
        kd_klinik: userBody.kd_klinik,
        kd_cabang: userBody.kd_cabang,
    }

    await UserRepositories.update(updateData, {q: {kd_user: userId}})

    return res.send({
        message: "User updated successfully",
        data: updateData
    })
}

const deleteUser = async (req: IMainRequest, res: Response) => {
    const userId = String(req.params.id)
    const userData = await UserRepositories.findOne({
        q: {kd_user: userId}
    })

    if(!userData){
        return res.status(404).send('User not found')
    }

    await UserRepositories.delete({q: {kd_user: userId}})
    
    return res.send({
        message: "User deleted successfully",
        data: userId
    })
}

const login = async (req: IMainRequest, res: Response) => {
    const userBody: IUserData = req.body

    const JWT_TOKEN_VALIDITY = Math.round(1 * 24 * 60 * 60)
    const today = new Date().getTime()

    const userData = await UserRepositories.findOne({
        q: {username: userBody.username}
    })

    if(!userData){
        return res.status(404).send('Username not found')
    }

    const tokenPayload: IParamToken = {
        sub: userData.kd_user!.toString(),
        iat: Number(today.toString().substring(0, 10)),
        exp: Number(
            Math.round(today + JWT_TOKEN_VALIDITY * 1000)
            .toString()
            .substring(0, 10)
        )
    }

    const token = await generateToken(tokenPayload)

    return res.send(token)
}

export {
    createUser,
    updateUser,
    deleteUser,
    login,
}