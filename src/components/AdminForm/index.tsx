import { FormEvent, useState } from 'react';
import Input from '@/components/Input';
import style from './style.module.scss';
import useAPI from '@/utils/useAPI';

type TriggerArgs = { playerTag: string, playerToken: string };
type ResponseBody = { valid: true };

const AdminForm = () => {
  const [ tag, setTag ] = useState<string>('');
  const [ token, setToken ] = useState<string>('');
  const [ alreadySubmitted, setAlreadySubmitted ] = useState<boolean>(false);

  const { trigger, data, isMutating } = useAPI<ResponseBody, Error, TriggerArgs>('/admin', 'POST');

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setAlreadySubmitted(true);
    trigger({ playerTag: tag, playerToken: token });
  };

  const showInvalidMsg: boolean = alreadySubmitted && !isMutating && data === undefined;
  return (
    <form onSubmit={ onSubmit } className={ style.form }>
      {showInvalidMsg && (
        <p className={ style.invalidMsg }>Invalid player tag or token.</p>
      )}
      <label htmlFor="player-tag">player tag:</label>
      <Input
        attributes={{
          id: 'player-tag',
          placeholder: 'Example: #2Y8RRQL9U',
          spellCheck: false,
          type: 'text',
          minLength: 2,
          maxLength: 13,
          required: true,
          pattern: '^#([A-Z]|[0-9]){2,13}$',
        }}
        useStateTuple={[ tag, setTag ]}
      />
      <label htmlFor="player-token">player token:</label>
      <Input
        attributes={{
          id: 'player-token',
          placeholder: 'Example: k5ou9psf',
          spellCheck: false,
          type: 'text',
          minLength: 8,
          maxLength: 8,
          required: true,
          pattern: '^([a-z]|[0-9]){8}$',
          autoComplete: 'off',
        }}
        useStateTuple={[ token, setToken ]}
      />
      <button disabled={ isMutating } type="submit">submit</button>
    </form>
  );
};

export default AdminForm;
