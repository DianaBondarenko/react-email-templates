import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import Footer from "./Footer";

export const PasswordChangedEmail = () => {
  const supportEmail = "{{supportEmail}}";

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">
          {`@media only screen and (max-width: 600px) {
          .container {padding: 40px 24px!important;}
          .main-content {padding: 56px 0!important;}
          }`}
        </style>
      </Head>
      <Preview>Password changed</Preview>
      <Body style={main}>
        <Container style={container} className="container">
          <Section>
            <Img
              src="http://cdn.mcauto-images-production.sendgrid.net/d923f972c2575381/a8865917-d3ff-4b00-9493-9bd66972cbc2/153x50.png"
              width="150"
              height="50"
              alt="Beagle"
            />
            <Section style={mainContent} className="main-content">
              <Img
                src="http://cdn.mcauto-images-production.sendgrid.net/d923f972c2575381/5c066bcb-51a1-4fa3-9a27-fe1b7ae65186/48x48.png"
                width="48"
                height="48"
                alt="check"
                style={icon}
              />
              <Text style={paragraph}>
                Your Beagle password has been successfully updated. There’s
                nothing you need to do, but if you think something fishy is
                going on, please{" "}
                <Link href={`mailto:${supportEmail}`} style={link}>
                  email us
                </Link>{" "}
                right away.
              </Text>
            </Section>
          </Section>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

export default PasswordChangedEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    'Roboto Mono,Courier,sans-serif,Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  margin: 0,
};

const container = {
  backgroundColor: "#ffffff",
  padding: "40px 80px",
  maxWidth: "640px",
};

const mainContent = {
  padding: "60px 0",
};

const icon = {
  marginBottom: "24px",
};

const paragraph = {
  color: "#434355",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: 0,
};

const link = {
  color: "#434355!important",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  textDecoration: "underline",
  cursor: "pointer",
};
