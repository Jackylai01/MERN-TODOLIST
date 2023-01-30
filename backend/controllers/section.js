const Section = require("../models/Section");
const Task = require("../models/Task");

const SectionCtrl = {
  create: async (req, res) => {
    try {
      const boardId = await req.params.boardId;
      const section = await Section.create({ board: boardId });
      section._doc.tasks = [];
      res.status(201).json(section);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    const { sectionId } = req.params;
    try {
      const section = await Section.findByIdAndUpdate(
        sectionId,
        {
          $set: req.body,
        },
        { new: true }
      );

      section._doc.tasks = [];
      res.status(200).json(section);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    const { sectionId } = req.params;
    try {
      await Task.deleteMany({ section: sectionId });
      await Section.deleteOne({ _id: sectionId });
      res.status(200).json("deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const Sections = await Section.find().populate("board");
      res.status(200).json(Sections);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = SectionCtrl;
