const User = require("../models/user.model");
const userDal = require("../dal/index");
const utils = require("../utils/index");

exports.createUser = async (req) => {
  try {
    let { name, surname, email, password, birthDate } = req.body;
    birthDate = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    const _password = utils.helper.hashToPassword(password);
    const user = new User({
      password: _password,
      email,
      name,
      surname,
      birthDate,
      age,
    });
    const json = await userDal.user.create(user);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.login = async (req) => {
  const { email, password } = req.body;
  try {
    const _password = utils.helper.hashToPassword(password);
    const json = await userDal.user.findOne({ email: email, password: _password });
    console.log(json);
    if (!json) {
      throw new Error("Şifre veya mail adresi yanlış");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUserById = async (req) => {
  const id = req.params.id;
  try {
    const json = await userDal.user.findById(id);
    if (!json) {
      throw new Error("Kullanıcı bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUserByName = async (req) => {
  const name = req.params.name;
  try {
    const json = await userDal.user.find({ name: name });
    if (json.length === 0) {
      throw new Error("kullanıcı bulunmadı");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateUser = async (req) => {
  const id = req.params.id;
  const { name, surname, email } = req.body;
  try {
    const json = await userDal.user.updateById(id, { name, surname, email });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updatePassword = async (req) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const _password = utils.helper.hashToPassword(password);
    const json = await userDal.user.updateById(id, { password: _password });
    if (!json) {
      throw new Error("Kullanıcı bulunamadı!");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};
