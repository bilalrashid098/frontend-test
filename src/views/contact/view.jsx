import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { contactFormValidation } from "../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./index.module.css";
import ContactImg from "../../assets/images/contact.jpg";
import { contactConfig } from "../../utils/constants";
import toast from "react-hot-toast";
import * as emailjs from "emailjs-com";

const ContactView = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      comment: "",
    },
    resolver: yupResolver(contactFormValidation),
  });

  const resetValues = () => {
    setValue("email", "");
    setValue("name", "");
    setValue("comment", "");
  };

  const onSubmit = (data) => {
    console.log(data);

    const templateParams = {
      from_name: data.email,
      user_name: data.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: data.comment,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          resetValues();
          toast.success("SUCCESS! Thankyou for your messege");
        },
        (error) => {
          console.log(error.text);
          resetValues();
          toast.error(error.text);
        }
      );
  };

  return (
    <Container>
      <Row className="justify-content-between align-items-center">
        <Col md={12} className="mb-5">
          <h2 className="mb-3">Contact</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            minus quis at praesentium nesciunt perferendis nemo, molestias
            accusamus est laborum provident optio commodi cupiditate aliquid
            veritatis quo tenetur eaque impedit.
          </p>
        </Col>
        <Col md={5} className="mb-md-0 mb-5">
          <img className={styles.contactImg} src={ContactImg} alt="contact" />
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Enter your fullname"
              name="name"
              title="Name"
              register={register}
              error={errors?.name ? errors?.name?.message : ""}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              title="Email"
              register={register}
              error={errors?.email ? errors?.email?.message : ""}
            />
            <div>
              <FormLabel>Your Comments</FormLabel>
              <Form.Control
                as="textarea"
                {...register("comment")}
                style={{ height: "100px" }}
                className={`${styles.input} ${styles.textarea}`}
              />
              {errors?.comments ? (
                <span className={`${styles.inputError}`}>
                  {errors?.comments?.message}
                </span>
              ) : (
                ""
              )}
            </div>
            <Button className="w-100 mt-4" variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactView;
