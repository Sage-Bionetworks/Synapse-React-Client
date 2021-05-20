import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

// Create a client
export const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

/**
 * To ensure that a component has a QueryClient available via context, you can wrap it in this function.
 *
 * To use react-query's useQuery, each component must have access to the QueryClientProvider context.
 * Since we only export individual components, we may not have the required context. The downside of this strategy
 * is that the component MUST use this supplied QueryClient, and cannot configure their own.
 *
 * We should remove this wrapper if we can ensure that these components will always receive a QueryClient via context
 * in every place they are used (including dependent applications, e.g. Portals and SWC)
 *
 * Adapted from https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
 */
export const withQueryClientProvider = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P> =>
  function _(props: P) {
    return (
      <QueryClientProvider client={defaultQueryClient}>
        <Component {...(props as P)} />
      </QueryClientProvider>
    )
  }
