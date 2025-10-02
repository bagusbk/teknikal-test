import express from 'express';
import * as usersController from '../../app/controllers/users_controller'

const router = express.Router();

router.get('/', usersController.index)
router.post('/', usersController.createUser)
router.post('/login', usersController.login)
router.post('/decrypt', usersController.decryptToken)
router.put('/:id', usersController.updateUser)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

export { router as usersRouter };