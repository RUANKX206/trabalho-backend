import { Module } from "@nestjs/common";
import { CreateProductController } from "./Product/controller/create-product.controller";
import { CreateModelController } from "./Model/controller/create-model.controller";
import { DeleteModelController } from "./Model/controller/delete-model.controller";
import { DeleteProductController } from "./Product/controller/delete-product.controller";
import { EditModelController } from "./Model/controller/edit-model.controller";
import { EditProductController } from "./Product/controller/edit-product.controller";
import { FetchRecentModelsController } from "./Model/controller/fetch-recent-models.controller";
import { FetchRecentProductsController } from "./Product/controller/fetch-recent-products.controller";
import { GetProductByIdController } from "./Product/controller/get-product-by-id.controller";
import { GetModelByIdController } from "./Model/controller/get-model-by-id.controller";
import { UpdateAvailableProductController } from "./Product/controller/update-available-product.controller";
import { CreateUserController } from "./Users/controller/create-user.controller";
import { GetUsersByIdController } from "./Users/controller/get-user-by-id.controller";
import { DeleteUserController } from "./Users/controller/delete-user.controller";
import { EditUserController } from "./Users/controller/edit-user.controller";
import { UpdateProfileUserController } from "./Users/controller/update-profile-user.controller";
import { CreateProfileUserController } from "./profile/controller/create-profile.controller";
import { EditProfileController } from "./profile/controller/edit-profile.controller";
import { DeleteProfileService } from "./profile/service/delete-profile.service";
import { GetProfileByIdController } from "./profile/controller/get-profile-by-id.controller";
import { CreateOrderController } from "./order/controller/create-order.controller";
import { DeleteOrdersController } from "./order/controller/delete-order.controller";
import { EditOrderController } from "./order/controller/edit-order.controller";
import { FetchRecentOrdersController } from "./order/controller/fetch-recent-order.controller";
import { GetOrderByIdController } from "./order/controller/get-order-by-id.controller";
import { PrismaService } from "./prisma.service";
import { CreateProductService } from "./Product/service/create-product.service";
import { CreateModelService } from "./Model/service/create-model.service";
import { DeleteModelService } from "./Model/service/delete-model.service";
import { DeleteProductService } from "./Product/service/delete-product.service";
import { EditModelService } from "./Model/service/edit-model.service";
import { EditProductService } from "./Product/service/edit-product.service";
import { FetchRecentModelsService } from "./Model/service/fetch-recent-models.service";
import { FetchRecentProductsService } from "./Product/service/fetch-recent-products.service";
import { GetProductByIdService } from "./Product/service/get-product-by-id.service";
import { GetModelByIdService } from "./Model/service/get-model-by-id.service";
import { UpdateAvailableProductService } from "./Product/service/update-available-product.service";
import { ProductsRepository } from "./Product/repository/products.repository";
import { ModelsRepository } from "./Model/repository/models.repository";
import { CreateUserService } from "./Users/service/create-user.service";
import { GetUserByIdService } from "./Users/service/get-user-by-id.service";
import { DeleteUserService } from "./Users/service/delete-user.service";
import { EditUsersService } from "./Users/service/edit-user.service";
import { UpdateProfileUserService } from "./Users/service/update-profile-user.service"; 
import { UserRepository } from "./Users/repository/user.repository";
import { EditProfilesService } from "./profile/service/edit-profile.service";
import { GetProfileByIdService } from "./profile/service/get-profile-by-id.service";
import { ProfileRepository } from "./profile/repository/profile.repository";
import { CreateOrdersService } from "./order/service/create-order.service";
import { DeleteOrdersService } from "./order/service/delete-order.service";
import { EditOrdersService } from "./order/service/edit-order.service";
import { FetchRecentOrdersService } from "./order/service/fetch-recent-order.service";
import { GetOrderByIdService } from "./order/service/get-order-by-id.service";
import { OrdersRepository } from "./order/repository/order.repository";
import { GetOrdersByUserIdController } from "./Users/controller/get-orders-by-user-id.controller";
import { GetOrderByUserIdService } from "./Users/service/get-orders-by-user-id.service";






@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController, DeleteModelController, DeleteProductController, EditModelController, EditProductController, FetchRecentModelsController, FetchRecentProductsController, GetProductByIdController, GetModelByIdController, UpdateAvailableProductController, CreateUserController,GetUsersByIdController,DeleteUserController, EditUserController, GetOrdersByUserIdController,UpdateProfileUserController, CreateProfileUserController,EditProfileController,GetProfileByIdController, CreateOrderController, DeleteOrdersController, EditOrderController,FetchRecentOrdersController,GetOrderByIdController, CreateProfileUserController, CreateProfileUserController ],
  providers: [PrismaService, CreateProductService, CreateModelService, DeleteModelService, DeleteProductService, EditModelService, EditProductService, FetchRecentModelsService, FetchRecentProductsService, GetProductByIdService, GetModelByIdService, UpdateAvailableProductService, ProductsRepository, ModelsRepository, CreateUserService, GetUserByIdService,DeleteUserService,EditUsersService,UpdateProfileUserService, UserRepository,UpdateProfileUserService,EditProfilesService, GetProfileByIdService,ProfileRepository,CreateOrdersService,DeleteOrdersService ,EditOrdersService,FetchRecentOrdersService,GetOrderByIdService,GetOrderByUserIdService,OrdersRepository,UpdateProfileUserService, UpdateProfileUserService, DeleteProfileService],

})
export class AppModule {}
