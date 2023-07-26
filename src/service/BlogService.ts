import {Service} from "./Service";
import {Blog} from "../entity/Blog";
import {AppDataSource} from "../data-source";
import {Product} from "../entity/Product";

class BlogService implements Service<Blog>{
    private repository = AppDataSource.getRepository(Blog);
    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findAll = async () => {
        return await this.repository.find({
        });
    }

    findById(id) {
    }

    update(id, data) {
    }

}
export default new BlogService()