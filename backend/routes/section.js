const router = require("express").Router();
const { param } = require("express-validator");
const tokenHandler = require("../config/tokenHandler");
const sectionController = require("../controllers/section");
const validation = require("../config/validation");

router.post(
  "/:boardId/sections",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  tokenHandler.verifyToken,
  sectionController.create,
  validation.validate
);

router.put(
  "/:boardId/sections/:sectionId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid board id");
    } else return Promise.resolve();
  }),
  param("sectionId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid section id");
    } else return Promise.resolve();
  }),

  validation.validate,
  sectionController.update
);

router.delete(
  "/:boardId/sections/:sectionId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid board id");
    } else return Promise.resolve();
  }),
  param("sectionId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid section id");
    } else return Promise.resolve();
  }),
  tokenHandler.verifyToken,
  validation.validate,
  sectionController.delete
);

router.get(
  "/:boardId/sections",
  tokenHandler.verifyToken,
  validation.validate,
  sectionController.getAll
);

module.exports = router;
