import {Service} from "./Service";
import {Blog} from "../entity/Blog";
import {AppDataSource} from "../data-source";

class BlogService implements Service<Blog> {
    private blogRepository;

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blog)
    }

    add(data) {
    }

    delete(id) {
    }

    findAll() {
    }

    findById = async(id)=> {
        return await this.blogRepository.find(id)
    }

    update = async (id, data) => {
        return await this.blogRepository.update(id, data)
    }

}
export default new BlogService();