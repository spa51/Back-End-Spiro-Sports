import { Router} from 'express';
import {getCategorys, getCategory, deleteCategory, postCategory, updateCategory } from '../controllers/category';
import validateToken from './validate-token';

const router = Router();

router.get('/', getCategorys);
router.get('/:id', getCategory);
router.delete('/:id',validateToken, deleteCategory);
router.post('/',validateToken, postCategory);
router.put('/:id',validateToken, updateCategory);

export default router;