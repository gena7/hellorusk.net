import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import BLOG from "../blog.config";
import { CSSBaseline } from "@zeit-ui/react";
import flush from "styled-jsx/server";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CSSBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
          {flush()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang={BLOG.language}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
