import categoryService from "../service/CategoryService";

class CategoryController {
    findAll = async (req, res) => {
        let list = await categoryService.findAll();
        res.json(list)
    }
    add = async (req, res) => {
        let data = await categoryService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await categoryService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await categoryService.delete(req.params.id);
        res.json(data)
    }
}

export default new CategoryController();
