'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/global.css';

const queryClient = new QueryClient();

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
