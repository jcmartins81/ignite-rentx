import ICategoriesRepository, {ICreateCategoryDTO} from "./ICategoriesRepository";
import Category from "../model/category";


class PostgresCategoriesRepository implements ICategoriesRepository {
    create({name, description}: ICreateCategoryDTO): void {
    }

    findByName(name: string): Category {
        return undefined;
    }

    list(): Category[] {
        return [];
    }

}

export default PostgresCategoriesRepository