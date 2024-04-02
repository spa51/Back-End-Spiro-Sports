import { Request, Response }  from 'express';
import Location from '../models/location';
import Category from '../models/category';

// Mostrar todo Localizaciones
export const getLocations = async (req: Request, res: Response) => {
    try {
        const listLocations =  await Location.findAll({
            include: { model: Category, attributes: ['name'], as: 'categoryDetails' }
        });
        res.json(listLocations);
    } catch (error) {
        console.error('Error al obtener las localizaciones:', error);
        res.status(500).json({ error: 'Error al obtener las localizaciones' });
    }
}


// Mostrar uno ID
export const getLocation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const location = await Location.findByPk(id)
    
    if (location) {
        res.json(location)
    } else {
        res.status(404).json({
            msg: `No existe una location con el id ${id}`
        })
    }
}


// Eliminar uno ID
export const deleteLocation =  async (req: Request, res: Response) => {
    const { id } = req.params;
    const location = await Location.findByPk(id)

    if (location) {
        await location.destroy();
        res.json({
            msg: 'La localizacion fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un localizacion con el id ${id}`
        })
        
    }
}

// Agregar UNO ID
export const postLocation =  async (req: Request, res: Response) => {
    const { body } = req;

    try {
        
    await Location.create(body);

    res.json({
        msg:`La localizacion fue agregado con exito!`
    })
        
    } catch (error) {
        console.log(error);
        res.json({
            msg:`No lo puedo Creer algo salio mal que sera?`
        })
    }

}
// Actualizar uno ID
export const updateLocation =  async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const location = await Location.findByPk(id)

        if (location) {
            await location.update(body);
            res.json({
                msg: 'La localizacion fue actualizada con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe una localizacion con el id ${id}`
            })
    
            
        }
        
    } catch (error) {
        
        console.log(error);
        res.json({
            msg:`No lo puedo Creer algo salio mal que sera?`
        })
        
    }


}
