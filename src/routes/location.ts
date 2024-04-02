import { Router} from 'express';
import { deleteLocation, getLocations, getLocation, postLocation, updateLocation } from '../controllers/location';
import validateToken from './validate-token';

const router = Router();

router.get('/',getLocations);
router.get('/:id', getLocation);
router.delete('/:id',validateToken, deleteLocation);
router.post('/',validateToken, postLocation);
router.put('/:id',validateToken,updateLocation);


export default router;