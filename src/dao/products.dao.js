import Product from "../models/Product.js";

const productsDAO = {};

productsDAO.getAll = async () => {
    const products = await Product.find();
    return products;
};

productsDAO.getOne = async (barcode) => {
    const product = await Product.findOne({ barcode: barcode });
    return product;
};

productsDAO.insertOne = async (product) => {
    const newProduct = await Product.create(product);
    console.log(newProduct);
    return newProduct;
};

//Actualizar
productsDAO.updateOne = async (barcode, updateData) => {
    const updatedProduct = await Product.findOneAndUpdate(
        { barcode: barcode },
        updateData,
        { new: true }
    );

    return updatedProduct;
};

//Eliminar
productsDAO.deleteOne = async (barcode) => {
    const deletedProduct = await Product.findOneAndDelete({
        barcode: barcode
    });

    return deletedProduct;
};

export default productsDAO;