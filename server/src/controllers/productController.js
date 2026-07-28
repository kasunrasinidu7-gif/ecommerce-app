import Product from "../models/Product.js";

export const createProduct = async (req, res) => {

    try {
        const { 
            name,
            description,
            price,
            stock,
            category,
        } = req.body;

        const seller =req.user.userId;

        const product = await Product.create({
            name,
            description,
            price,
            stock,
            category,
            seller
        });

        console.log(product);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });

    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Database Server Error",
        });
    }

};

