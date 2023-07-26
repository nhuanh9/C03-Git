import blogService from "../service/BlogService";

class BlogController {
    update = async (res, req) => {
        let data = await blogService.update(req.params.id, req.body)
        res.json(data)
    }
    findById = async (res, req) => {
        let data = await blogService.findById(req.params.id)
        req.json(data)
    }
}
export default new BlogController();