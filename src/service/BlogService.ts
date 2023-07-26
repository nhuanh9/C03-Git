import {Service} from "./Service";
import {Blog} from "../entity/Blog";
import { AppDataSource } from "../data-source";

export class BlogService implements Service<Blog>{
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(Blog);
    }
    add = async (blog) => {
        await this.Repository.save(blog)
     }
        
    delete(id) {
    }

    findAll() {
    }

    findById(id) {

    }

    update(id, data) {

    }

}
export default new BlogService