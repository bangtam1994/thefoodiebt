import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormErrorMessage from "../components/Form/FormErrorMessage";
import * as Yup from "yup";
import axios from "axios";

// Yup validation
const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Champ obligatoire"),
  email: Yup.string()
    .email("Email non valide")
    .required("Champ obligatoire"),
  topic: Yup.string()
    .required("Champ obligatoire")
    .max(100, "Veuillez entrer moins de 100 caractères"),
  message: Yup.string()
    .required("Champ obligatoire")
    .max(1000, "Veuillez entrer moins de 1000 caractères"),
});

const ContactPage = ({ data: { site } }) => {
  const [formError, setFormError] = React.useState(false);
  const [formSuccess, setFormSuccess] = React.useState(false);
  const initialValues = {
    name: "",
    email: "",
    topic: "",
    message: "",
  };
  console.log(formError);
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('https://comco.computer/wp-content/uploads/2016/05/Contact-Background.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Contact</h1>
        </div>
        <div>
          {/* FORM  */}

          <Formik
            initialValues={{
              ...initialValues,
            }}
            validationSchema={ValidationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setFormError(false);

              const formData = {
                name: values.name,
                topic: values.topic,
                email: values.email,
                message: values.message,
              };

              console.log(formData);
              try {
                const response = await axios.post(
                  `${process.env.GATSBY_API_URL}/forms/contact`,
                  formData
                );
                console.log("RESPONSE", response.data);

                if (response.data && response.data.message === "MESSAGE SENT") {
                  setFormSuccess(true);
                }
              } catch (error) {
                console.error(error.message);
                setFormError(true);
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => {
              return !formSuccess ? (
                <Form>
                  <div className="form-container">
                    <div style={{ marginBottom: 22 }}>
                      Une question, un message ? Veuillez remplir ce formulaire
                      ci-dessous.
                    </div>
                    <div>
                      {/* NAME */}
                      <div css={{ display: "flex", flexDirection: "row" }}>
                        <label htmlFor="name">Nom </label>
                      </div>
                      <Field type="text" placeholder="Nom" name="name" />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <div className="contact-error">{msg}</div>
                        )}
                      />

                      {/* EMAIL  */}
                      <div css={{ display: "flex", flexDirection: "row" }}>
                        <label htmlFor="email">Email </label>
                      </div>
                      <Field type="email" placeholder="Email" name="email" />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div className="contact-error">{msg}</div>
                        )}
                      />

                      {/* TOPIC  */}
                      <div css={{ display: "flex", flexDirection: "row" }}>
                        <label htmlFor="email">Sujet </label>
                      </div>
                      <Field
                        type="text"
                        placeholder="Demande, avis, question..."
                        name="topic"
                      />
                      <ErrorMessage
                        name="topic"
                        render={(msg) => (
                          <div className="contact-error">{msg}</div>
                        )}
                      />
                      {/* MESSAGE  */}
                      <div css={{ display: "flex", flexDirection: "row" }}>
                        <label htmlFor="Entrez votre corps de texte ici">
                          Tapez votre message ici :{" "}
                        </label>
                      </div>
                      <Field
                        type="message"
                        placeholder="message"
                        name="message"
                        as="textarea"
                      />
                      <ErrorMessage
                        name="message"
                        render={(msg) => (
                          <div className="contact-error">{msg}</div>
                        )}
                      />
                    </div>
                  </div>

                  {/* BUTTON  */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button -primary"
                    >
                      Envoyer le message
                    </button>
                  </div>
                  {formError && (
                    <FormErrorMessage
                      isVisible={true}
                      message={`Une erreur est survenue, merci de réessayer
                          ultérieurement ou de nous contacter si le problème
                          persiste.`}
                    />
                  )}
                </Form>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <span>Votre message a bien été envoyé !</span>
                  <button
                    className="button -secondary"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Retourner à l'accueil
                  </button>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
