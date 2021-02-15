import React from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const PdfViewer = ({ file, width, pageNumber }) => (
  <Document file={file}>
    <Page pageNumber={pageNumber} width={width} />
  </Document>
);

export default PdfViewer;
