import React from "react";

export const getFormatedText = (
  text: string,
  placeholders: string | string[],
  className?: string
): JSX.Element => {
  // Normalize to array
  const values =
    typeof placeholders === "string" ? [placeholders] : placeholders;

  // Matches %1$@, %2$@, %3$@%, etc.
  const regex = /%(\d+)\$@%?/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchStart = match.index;
    const matchEnd = regex.lastIndex;
    const placeholderIdx = parseInt(match[1], 10) - 1;

    // Push preceding text
    if (lastIndex < matchStart) {
      elements.push(text.slice(lastIndex, matchStart));
    }

    // Push the placeholder value wrapped in a span
    const value = values[placeholderIdx] ?? "";
    elements.push(
      <span className={className} key={`ph-${key++}`}>
        {value}
      </span>
    );

    lastIndex = matchEnd;
  }

  // Push any remaining text
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return <>{elements}</>;
};
