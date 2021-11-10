import Document, { DocumentContext, Html } from 'next/document'
  import { ServerStyleSheet } from 'styled-components'
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
        
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          })
  
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            </>
          ),
        }
      } finally {
        sheet.seal()
      }
    }
  }


