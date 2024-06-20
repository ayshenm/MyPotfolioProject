import { ChangeEvent, useState } from "react";

interface FormValues {
  name: string;
  email: string;
  [key: string]: any; // Diğer alanlar için dinamik indeksleyici
}

export const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // register function
  const register = (fieldName: string) => {
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setValues((prevData) => ({
        ...prevData,
        [fieldName]: e.target.value,
      }));
    };

    const onFocus = (): void => {};

    return {
      onChange,
      onFocus,
      name: fieldName,
      value: values[fieldName] || "",
    };
  };

  // handleSubmit function
  const handleSubmit = (callback: () => void) => {
    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  // watch
  const watch = (name: string) => {
    return values[name];
  };

  // validate
  const validate = (formValues: FormValues) => {
    const errors: Record<string, string> = {};

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formValues.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  // isFormValid
  const isFormValid = Object.values(values).every((v) => v !== "");

  return {
    values,
    errors,
    register,
    watch,
    handleSubmit,
    isFormValid,
  };
};
