import { useEffect } from "react";

import PrismJs from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import MarkDownIt from "markdown-it";
import PlaceholderLoading from "react-placeholder-loading";

type MarkdownMessageProps = {
  ai_input?: string;
  ai_output: string;
  isLoading?: boolean;
};

const MarkdownMessage = (props: MarkdownMessageProps) => {
  const md = MarkDownIt();

  useEffect(() => {
    PrismJs.highlightAll();
  }, []);

  if (props.isLoading) {
    return <PlaceholderLoading shape="rect" width={500} height={60} />;
  }
  return (
    <>
      <div className="py-4">
        {props.ai_input && (
          <h1 className="text-3xl font-bold">Prompt:{props.ai_input}</h1>
        )}
      </div>

      <article
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: md.render(props.ai_output) }}
      ></article>
    </>
  );
};

export default MarkdownMessage;
