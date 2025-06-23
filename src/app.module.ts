import { Module } from "@nestjs/common";
import { CreateModelController } from "./Model/Controller/create-model.controller";
import { DeleteModelController } from "./Model/Controller/delete-model.controller";
import { EditModelController } from "./Model/Controller/edit-model.controller";
import { FetchRecentModelsController } from "./Model/Controller/fetch-recent-models.controller";
import { GetModelByIdController } from "./Model/Controller/get-model-by-id.controller";
import { ModelsRepository } from "./Model/Repository/models.repository";
import { CreateModelService } from "./Model/Service/create-model.service";
import { DeleteModelService } from "./Model/Service/delete-model.service";
import { EditModelService } from "./Model/Service/edit-model.service";
import { FetchRecentModelsService } from "./Model/Service/fetch-recent-models.service";
import { GetModelByIdService } from "./Model/Service/get-model-by-id.service";
import { PrismaService } from "./prisma.service";
import { CreateProductController } from "./Product/Controller/create-product.controller";
import { DeleteProductController } from "./Product/Controller/delete-product.controller";
import { EditProductController } from "./Product/Controller/edit-product.controller";
import { FetchRecentProductsController } from "./Product/Controller/fetch-recent-products.controller";
import { GetProductByIdController } from "./Product/Controller/get-product-by-id.controller";
import { UpdateAvailableProductController } from "./Product/Controller/update-available-product.controller";
import { ProductsRepository } from "./Product/Repository/products.repository";
import { CreateProductService } from "./Product/Service/create-product.service";
import { DeleteProductService } from "./Product/Service/delete-product.service";
import { EditProductService } from "./Product/Service/edit-product.service";
import { FetchRecentProductsService } from "./Product/Service/fetch-recent-products.service";
import { GetProductByIdService } from "./Product/Service/get-product-by-id.service";
import { UpdateAvailableProductService } from "./Product/Service/update-available-product.service";

@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController, DeleteModelController, DeleteProductController, EditModelController, EditProductController, FetchRecentModelsController, FetchRecentProductsController, GetProductByIdController, GetModelByIdController, UpdateAvailableProductController],
  providers: [PrismaService, CreateProductService, CreateModelService, DeleteModelService, DeleteProductService, EditModelService, EditProductService, FetchRecentModelsService, FetchRecentProductsService, GetProductByIdService, GetModelByIdService, UpdateAvailableProductService, ProductsRepository, ModelsRepository],

  
})
export class AppModule {}
