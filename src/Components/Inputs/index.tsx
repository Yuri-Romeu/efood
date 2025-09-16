import * as S from './styles';
import React from 'react';

type Props = {
     name: string;
     label: string;
     type: string;
     size?: number;
     value?: string;
     onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
     onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
     class?: 'error' | '';
     mask?: string;
};

const Inputs = ({
     name,
     label,
     type,
     size,
     value,
     onChange,
     onBlur,
     class: className,
     mask,
}: Props) => {
     return (
          <S.Container size={size}>
               <label htmlFor={name}>{label}</label>

               {mask ? (
                    <S.MaskedInput
                         mask={mask}
                         type={type}
                         id={name}
                         size={size}
                         value={value}
                         onAccept={(val: string) =>
                              onChange?.({
                                   target: { name, value: val },
                              } as React.ChangeEvent<HTMLInputElement>)
                         }
                         onBlur={onBlur}
                         className={className}
                         unmask={false}
                    />
               ) : (
                    <S.Input
                         type={type}
                         id={name}
                         size={size}
                         className={className}
                         value={value}
                         onChange={onChange}
                         onBlur={onBlur}
                    />
               )}
          </S.Container>
     );
};

export default Inputs;
