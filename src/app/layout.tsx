import { AppProviders } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>
            <body>
                 <AppProviders>{children}</AppProviders>
            </body>
        </html>
    );
}
