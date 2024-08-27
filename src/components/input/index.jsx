import { FormControl, FormLabel } from "react-bootstrap";
import styles from "./index.module.css";

const Input = (props) => {
  const {
    type,
    value,
    placeholder,
    onChange,
    className = "",
    error,
    name,
    register = null,
    condition = {},
    disabled = false,
    title,
    inputContainerClassName = "",
    errorClassName = "",
    style,
  } = props;

  return (
    <div className={`${inputContainerClassName} mb-3`}>
      <FormLabel>{title}</FormLabel>
      {register ? (
        <FormControl
          className={`${className} ${styles.input}`}
          type={type}
          name={name}
          disabled={disabled}
          {...register(name, condition)}
          style={style}
        />
      ) : (
        <FormControl
          className={`${className} ${styles.input}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          style={style}
          disabled={disabled}
        />
      )}
      {error && (
        <span className={`${styles.inputError} ${errorClassName}`}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
