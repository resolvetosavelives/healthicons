import { useEffect, useRef, useState } from 'react';

// Copies the text as plain text, which design tools like Figma paste as a
// vector when it's SVG code. Uses the browser's clipboard API: copying by
// selecting a hidden text box (the old way) fails inside a modal <dialog>,
// like the icon popup, since everything outside it can't be selected.
async function copyText(text: string, button: HTMLElement) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // older browsers, or a page served without https: a hidden text box next
  // to the button, so it's inside the dialog too
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  button.insertAdjacentElement('afterend', textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  button.focus();
  if (!copied) {
    throw new Error('copy failed');
  }
}

// attaches copy-to-clipboard to a button; `copied` is true briefly after a
// successful copy so the button can say so, and `onCopy` (if any) is called
export function useCopyButton(text: string | null, onCopy?: () => void) {
  const ref = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  // the latest callback, without setting the button up again when it changes
  const onCopyRef = useRef(onCopy);
  onCopyRef.current = onCopy;
  useEffect(() => {
    const button = ref.current;
    if (!button || !text) {
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const onClick = async () => {
      try {
        await copyText(text, button);
      } catch {
        // nothing was copied, so the button doesn't say it was
        return;
      }
      setCopied(true);
      clearTimeout(timer);
      timer = setTimeout(() => setCopied(false), 1500);
      onCopyRef.current?.();
    };
    button.addEventListener('click', onClick);
    return () => {
      button.removeEventListener('click', onClick);
      clearTimeout(timer);
    };
  }, [text]);
  return { ref, copied };
}
