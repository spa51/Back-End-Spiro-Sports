import { Request, Response }  from 'express';
import Category from '../models/category';


// Categorias Listas

// Mostrar todo Categorias
export const getCategorys = async (req: Request, res: Response) => {
    const listCategorys =  await Category.findAll()
    res.json(listCategorys)
}

// Mostrar uno ID
export const getCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findByPk(id)
    
    if (category) {
        res.json(category)
    } else {
        res.status(404).json({
            msg: `No existe una categoria con el id ${id}`
        })
    }
}

// Eliminar uno ID
export const deleteCategory =  async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findByPk(id)

    if (category) {
        await category.destroy();
        res.json({
            msg: 'La categoria fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un categoria con el id ${id}`
        })
        
    }
}

// Agregar UNO ID
export const postCategory =  async (req: Request, res: Response) => {
    const { body } = req;

    try {
        
    await Category.create(body);

    res.json({
        msg:`La Categoria fue agregado con exito!`
    })
        
    } catch (error) {
        console.log(error);
        res.json({
            msg:`No lo puedo Creer algo salio mal que sera?`
        })
    }

}// Actualizar uno ID
export const updateCategory =  async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const category = await Category.findByPk(id)

        if (category) {
            await category.update(body);
            res.json({
                msg: 'La categoria fue actualizada con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe una categoria con el id ${id}`
            })
    
            
        }
        
    } catch (error) {
        
        console.log(error);
        res.json({
            msg:`No lo puedo Creer algo salio mal que sera?`
        })
        
    }


}