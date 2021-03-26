import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be 2 chars long"),
  size: yup
    .string()
    .oneOf(["xl", "large", "medium", "small"], "Please choose a size"),
  sauce: yup
    .string()
    .oneOf(["red","garlic","bbq","alfredo"],"Please choose sauce"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onions: yup.boolean(),
  pineapple:yup.boolean(),
  instructions: yup.string(),
});