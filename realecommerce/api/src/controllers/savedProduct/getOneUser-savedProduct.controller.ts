// import { RequestHandler } from "express";
// import { savedProductsModel } from "../../models/savedProduct.schema";
// interface CustomRequest extends Request {
//   user?: { id: string };
// }

// export const getOneUsersavedProduct: RequestHandler = async (
//   req: CustomRequest,
//   res
// ) => {
//   try {
//     const savedProducts = await savedProductsModel.findById(req.user?.id);
//     if (!savedProducts) {
//       return res.status(404).json({
//         message: "Iim id tai product algaa",
//       });
//     }
//     return res.status(200).json({
//       savedProducts,
//     });
//   } catch (error) {}
// };
