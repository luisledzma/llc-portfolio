import React from "react";
export type CodeSnippetProps = {
  text: string;
  link: string;
  isEmail: boolean;
};
const CodeSnippet = ({
  text,
  link,
  isEmail,
}: CodeSnippetProps): JSX.Element => {
  return (
    <p className="mt-2 break-all">
      <span className="text-[#9160A6]">const </span>{" "}
      <span className="text-[#66BCF2]">{text}</span>
      <span className="text-[#66BCF2]"> = </span>
      {isEmail ? (
        <a className="text-[#9CBF78]" href={`mailto:${link}`}>
          `{link}`
        </a>
      ) : (
        <a
          className="text-[#9CBF78]"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          `{link}`
        </a>
      )}
      <span>;</span>
    </p>
  );
};

export default CodeSnippet;
