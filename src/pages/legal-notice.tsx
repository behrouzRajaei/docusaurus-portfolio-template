import React from "react";
import Layout from "@theme/Layout";

export default function LegalNotice() {
  return (
    <Layout title="Legal Notice">
      <main style={{ maxWidth: "900px", margin: "120px auto", padding: "0 20px" }}>
        <h1>Legal Notice</h1>

        <h2>Information according to §5 TMG</h2>

        <p>
          Behrouz Rajaei<br />
          Berlin<br />
          Germany
        </p>

        <h2>Contact</h2>

        <p>
          Email: bmd.rajaei@mail.de
        </p>

        <h2>Responsible for content according to §55 Abs. 2 RStV</h2>

        <p>
          Behrouz Rajaei<br />
          Berlin<br />
          Germany
        </p>

        <h2>Liability for content</h2>

        <p>
          The contents of our pages were created with great care. However, we cannot
          guarantee the accuracy, completeness or timeliness of the contents.
        </p>

        <h2>Liability for links</h2>

        <p>
          Our website contains links to external websites of third parties. We have
          no influence on the contents of those websites.
        </p>

        <h2>Copyright</h2>

        <p>
          The content and works created by the site operator on these pages are
          subject to German copyright law.
        </p>

      </main>
    </Layout>
  );
}
