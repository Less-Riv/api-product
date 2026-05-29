import productsDAO from "../dao/products.dao.js";

const productsControllers = {};

productsControllers.getAll = async (req, res) => {
    productsDAO.getAll()
    .then((products) => {
        res.json({
            data: products, 
        });
    })
    .catch((error) => {
        res.status(500).json({ error: error });
    });
};

productsControllers.getOne = async (req, res) => {
    productsDAO
    .getOne(req.params.barcode) 
    .then((product) => {
        if(product){
            res.json({ data: product });
        }else{
            res.status(404).json({ error: "Producto no encontrado." });
        }
    })
    .catch((error) => {
        console.error("Error para encotrar el producto: ", error);
        res
        .status(500)
        .json({ error: "Se produjo un error para encotrar el producto." });
    });
};

productsControllers.insertOne = async (req, res) => {
    const product = req.body;
    productsDAO
    .insertOne(product)
    .then((response) => {
        res.json({
            message: "Producto insertado correctamente.",
            product: response,
        });
    })
    .catch((error) => {
        console.error("Error para insertar el producto: ", error);
        res
        .status(500)
        .json({ error: "Hubo un error para insertar el producto." });
    });
};




//Actualizar
productsControllers.updateOne = (req, res) => {
    productsDAO.updateOne(req.params.barcode, req.body)
    .then(() => {
        res.json({ message: "product update successfully" });
    })
    .catch((error) => {
        console.error("Error al actualizar:", error);

        res.json({
            message: "Servidor no disponible",
            error: error
        });
    });
};
//eliminar
productsControllers.deleteOne = async (req, res) => {
    productsDAO.deleteOne(req.params.barcode)
    .then((result) => {
        res.json({
            message: "product deleted successfully",
            product: result
        });
    })
    .catch((err) => {
        console.error(
            "An error occurred while deleting the product:",
            err
        );

        res.status(500).json({
            error: err
        });
    });
};

export default productsControllers;