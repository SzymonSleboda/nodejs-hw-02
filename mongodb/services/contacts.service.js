const Contact = require("../models/contact.model");

const getAll = async () => {
  return Contact.find();
};

const getOne = async (id) => {
  return Contact.findById(id);
};

const create = async (data) => {
  return Contact.create(data);
};

const update = async (id, data) => {
  return Contact.findByIdAndUpdate(id, data, { new: true });
};

const updateFavorite = async (id, favorite) => {
  return Contact.findByIdAndUpdate(id, { favorite }, { new: true });
};

const remove = async (id) => {
  return Contact.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  updateFavorite,
  remove,
};
