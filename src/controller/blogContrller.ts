import { BlogService } from "../service/BlogService";

export class BlogController {
    static add(arg0: string, add: any) {
        throw new Error("Method not implemented.");
    }
     private BlogService ;
     constructor() {
        this.BlogService = BlogService;
    }

    add = async(req :Request , res: Response) => {
        let data = await this.BlogService.add()
    }
}