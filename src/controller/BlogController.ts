
import blogService from "../service/ProductService";

class BlogController{
    findAll = async (req, res) => {
        let list = await blogService.findAll();
        res.json(list)
    }
    add = async (req, res) => {
        let data = await blogService.add(req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await blogService.delete(req.params.id);
        res.json(data)
    }
}