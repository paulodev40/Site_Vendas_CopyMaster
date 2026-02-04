import { useCallback } from 'react';

/**
 * Hook para gerenciar redirecionamentos para a Kiwify
 * mantendo os parâmetros de rastreio (UTMs, fbclid, etc)
 */
export const useKiwifyRedirect = () => {
  const redirectToCheckout = useCallback((checkoutUrl: string) => {
    if (typeof window === 'undefined') return;

    const currentQueryParams = new URLSearchParams(window.location.search);
    const targetUrl = new URL(checkoutUrl);

    currentQueryParams.forEach((value, key) => {
      targetUrl.searchParams.set(key, value);
    });

    if (!targetUrl.searchParams.has('src')) {
      targetUrl.searchParams.set('src', 'direto_site_vercel');
    }

    window.location.href = targetUrl.toString();
  }, []);

  return { redirectToCheckout };
};