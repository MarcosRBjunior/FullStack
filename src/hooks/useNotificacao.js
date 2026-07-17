import { useCallback, useRef, useState } from 'react';

function useNotificacao(duracaoMs = 2500) {
    const [mensagem, setMensagem] = useState('');
    const timeoutRef = useRef(null);

    const notificar = useCallback((texto) => {
        clearTimeout(timeoutRef.current);
        setMensagem(texto);
        timeoutRef.current = setTimeout(() => setMensagem(''), duracaoMs);
    }, [duracaoMs]);

    return [mensagem, notificar];
}

export default useNotificacao;
