import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  const initialValues = {
    name: "",
    email: "",
    topic: "",
    message: "",
  };

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
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
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
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const questions = {
                name: values.name,
                topic: values.topic,
                email: values.email,
                message: values.message,
              };
              alert(JSON.stringify(questions, null, 2));
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => {
              return (
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
                      <Field type="text" placeholder="sujet" name="topic" />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div className="contact-error">{msg}</div>
                        )}
                      />
                      {/* MESSAGE  */}
                      <div css={{ display: "flex", flexDirection: "row" }}>
                        <label htmlFor="message">
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
                </Form>
              );
            }}
          </Formik>
          {/* <form
            className="form-container"
            action="https://sendmail.w3layouts.com/SubmitContactForm"
            method="post"
          >
            <div style={{ marginBottom: "22px" }}>
              Une question, une suggestion ? Remplissez le formulaire
              ci-dessous.
            </div>
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="w3lName" id="w3lName" />
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender" />
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="w3lSubject" id="w3lSubject" />
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form> */}
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
