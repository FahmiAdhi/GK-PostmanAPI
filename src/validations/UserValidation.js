const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.brand === "") {
    errors.nama = "Brand harus diisi";
  }

  if (!values.umur || values.model === "") {
    errors.umur = "Model harus diisi";
  }

  if (!values.alamat || values.price === "") {
    errors.alamat = "Price harus diisi";
  }

  return errors;
};

export default UserValidation;
