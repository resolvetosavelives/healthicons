import classnames from 'classnames';
import { useCopyButton } from '../lib/useCopyButton';
import styles from './Packages.module.scss';

// instructions to paste into an AI coding assistant, with a button to copy
// them
export function AiPrompt({ prompt }: { prompt: string }) {
  const copy = useCopyButton(prompt);
  return (
    <div className={styles.prompt}>
      <div className={styles.promptHeader}>
        <span className={styles.resultLabel}>Prompt</span>
        <button
          type="button"
          ref={copy.ref}
          className={classnames(styles.promptCopy, {
            [styles.promptCopied]: copy.copied
          })}
        >
          {copy.copied ? 'Copied' : 'Copy prompt'}
        </button>
      </div>
      <pre className={styles.promptText}>{prompt}</pre>
    </div>
  );
}
