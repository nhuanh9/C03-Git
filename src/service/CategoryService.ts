import {AppDataSource} from "../data-source";
import {Product} from "../entity/Product";
import {Service} from "./Service";
import {Category} from "../entity/Category";

class CategoryService implements Service<Category> {
    private repository = AppDataSource.getRepository(Category);

    findAll = async () => {
        return await this.repository.find();
    }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findById = async (id) => {
        return await this.repository.find({where: {id: id}});
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

}
export default new CategoryService();
