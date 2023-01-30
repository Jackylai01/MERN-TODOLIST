const router = require("express").Router();
const { param } = require("express-validator");
const validation = require("../config/validation");
const tokenHandler = require("../config/tokenHandler");
const boardCtrl = require("../controllers/board");

router.post("/", tokenHandler.verifyToken, boardCtrl.create);

router.get("/", tokenHandler.verifyToken, boardCtrl.getAll);

router.put("/", tokenHandler.verifyToken, boardCtrl.updatePosition);

router.get(
  "/:boardId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardCtrl.getOne
);

router.put(
  "/:boardId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardCtrl.update
);

router.get(
  "/favourites/data",
  tokenHandler.verifyToken,
  boardCtrl.getFavourites
);

router.put(
  "/favourites/data",
  tokenHandler.verifyToken,
  boardCtrl.updateFavouritePosition
);

router.delete(
  "/:boardId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardCtrl.deleted
);

module.exports = router;
